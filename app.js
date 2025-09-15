const app = require('./config/server')
const port = process.env.port //set port=3000; set <listas as variáveis de Ambiente>
const boasVindas = require('./modulo')
//  console.log(`${boasVindas}, aberto na porta: ${port}`)
app.all('/', (req, res, next) => {
  console.log(req.url + ' - ' + req.method)
  next()
})
const index = require('./rotas/index')
index(app);
const cursos = require('./rotas/cursos')
cursos(app);
const pesquisa = require('./rotas/pesquisa')
pesquisa(app);



app.post('/', (req, res) => {
  res.send('Bem vindos turma 6C - Post')
})
app.put('/', (req, res) => {
  res.send('Bem vindos turma 6C - PUT')
})
app.delete('/', (req, res) => {
  res.send('Bem vindos turma 6C - Delete')
})



app.listen(port, () => {
  console.log(`${boasVindas}, aberto na porta: ${port}`)
})
