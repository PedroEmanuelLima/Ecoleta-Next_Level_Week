const express = require('express');
const app = express();

//configurar pasta pulica
app.use(express.static('public'));



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
    return res.render("create-point.html")
});

app.get('/search', (req, res) => {
    return res.render("search-result.html")
});

//Ligando o servidor
app.listen(3001);