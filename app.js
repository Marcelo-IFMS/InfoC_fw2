
const port = process.env.port //set port=3000; set <listas as variáveis de Ambiente>
const app = require('./config/server')
app.all('/', (req, res, next) => {
  console.log(req.url + ' - ' + req.method)
  next()
})
app.get('/', (req, res) => {
  res.render('index')})
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
  console.log(`Servidor Iniciado na porta:${port}`)
})