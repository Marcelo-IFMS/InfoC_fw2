const express = require('express')
const app = express()
const port = 3000
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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
