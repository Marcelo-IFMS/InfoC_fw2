const express = require('express')
const app = express()

//possibilita a utilização de arquibos ejs renderizados pelo express
app.set('view engine', 'ejs')
// para alterar a pasta padrão 'views' deve inserir o código:
//  app.set('views', 'nova/pasta') 
app.use(express.static('public'))

module.exports = app;