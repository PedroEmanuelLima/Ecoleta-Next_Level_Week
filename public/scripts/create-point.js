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
    const stateInput = document.querySelector('input[name=state]')

    const ufValue = event.target.value
    
    const indexOfSetectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSetectedState].text

    citySelect.innerHTML = "<option value=''>Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`)
        .then(res => res.json() )
        .then(cities => {
            for(city of cities){
                citySelect.innerHTML += `<option value='${city.nome}'>${city.nome}</opition>`
            }
            citySelect.disabled = false
        });

}

document
    .querySelector('select[name=uf]')
    .addEventListener('change', getCities);

 // Itens de coleta

 const itemsTosCollect = document.querySelectorAll('.items-grid li');


const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    //adicionar ou reover a casse
    itemLi.classList.toggle("selected");
    
    const itemId = itemLi.dataset.id;


    //verifica se existem itens selecionados, se sim pegar os items selecionados
    const alreadySelected = selectedItems.findIndex(item => item == itemId);

    //se já estiver selecionado
    if(alreadySelected >= 0){
        //tirar seleção
        const filteredItems = selectedItems.filter(item => {
            const itemIsDiferent = item != itemId;
            return itemIsDiferent;
        })
        selectedItems = filteredItems
    }else{
        //se não estiver selecionado, colocar à seleção
        selectedItems.push(itemId)
    }   

    //atualizar o camo esxondido com itens selecionados
    collectedItems.value = selectedItems;
}



for (item of itemsTosCollect){
    item.addEventListener('click', handleSelectedItem)
}