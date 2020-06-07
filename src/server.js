const express = require('express');
const app = express();

//pegar o banco de dados
const db = require('./database/db');



//configurar pasta pulica
app.use(express.static('public'));

//hailitar o uso do req.body
app.use(express.urlencoded({ extended: true }));


//utilizando template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: app,
    noCache: true
});



// Configurar caminhos da aplicação
app.get('/', (req, res) => {
    return res.render("index.html")
});




app.get('/create-point', (req, res) => {
    
    // req.query: Query Strings da nossa url
    // req.query
    
    return res.render("create-point.html")
});


app.post('/savepoint', (req, res) => {
    //req.body: O corpo de nosso formulário
    // console.log(req.body)

    //inserir dados no anco de dados
     const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES ( ?,?,?,?,?,?,? );
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ];

    function afterInsertDate(err){
        if(err){
            console.log(err);
            return res.render('create-point.html', { saved: "erro" });
        }

        console.log("Cadastrado com sucesso.");
        console.log(this)

        return res.render('create-point.html', { saved: "successfully" });
    };

    db.run(query, values, afterInsertDate);

});



app.get('/search', (req, res) => {
    //puxando dados

    const search = req.query.search;

    if(search == ""){
        //Pesquisa vazia
        return res.render("search-result.html", { total: 0});
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, row){
        if(err){
            return console.log(err);
        }
        
        const total = row.length;

        //mostrar a página html com os dados do banco
        return res.render("search-result.html", { places: row, total});
    })
 
});

//Ligando o servidor
app.listen(3001);