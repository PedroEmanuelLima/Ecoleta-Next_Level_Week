const populatesUFs = () => {
   const uFSelect = document.querySelector('select[name=uf]')
   
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json() )
        .then(states => {
            for(state of states){
                uFSelect.innerHTML += `<option value=${state.id}>${state.nome}</opition>`
            }
        });
}

populatesUFs();

function getCities(event){
    const citySelect = document.querySelector('select[name=city]')
    const stateInput = document.querySelector('input[name=states]')

    const ufValue = event.target.value
    
    const indexOfSetectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSetectedState].text

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`)
        .then(res => res.json() )
        .then(cities => {
            for(city of cities){
                citySelect.innerHTML += `<option value=${city.id}>${city.nome}</opition>`
            }
            citySelect.disabled = false
        });

}

document
    .querySelector('select[name=uf]')
    .addEventListener('change', getCities);

