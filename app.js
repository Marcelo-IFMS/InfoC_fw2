const express = require('express')
const app = express()
const port = process.env.port //set port=3000; set <listas as variáveis de Ambiente>


//possibilita a utilização de arquibos ejs renderizados pelo express
app.set('view engine', 'ejs')
// para alterar a pasta padrão 'views' deve inserir o código:
//  app.set('views', 'nova/pasta') 
app.use(express.static('public'))


app.all('/', (req, res, next) => {
  console.log(req.url + ' - ' + req.method)
  next()
})

app.get('/', (req, res) => {
  res.send('Bem vindos turma 6C - GET')})
app.post('/', (req, res) => {
  res.send('Bem vindos turma 6C - Post')})
app.put('/', (req, res) => {
  res.send('Bem vindos turma 6C - PUT')})
app.delete('/', (req, res) => {
  res.send('Bem vindos turma 6C - Delete')})


app.get('/cursos', (req, res) => {
  res.render('cursos')
})
app.get('/pesquisa', (req, res) => {
  res.render('pesquisa')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
