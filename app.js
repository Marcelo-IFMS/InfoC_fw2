var express = require('express')
var app = express()
app.get('/', function (req, res) {
    res.send('Pagina Inicial da disciplina de FW2')
});
app.post('/', function(req,res){
    res.send('Post na página inicial')
})
app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000')
});