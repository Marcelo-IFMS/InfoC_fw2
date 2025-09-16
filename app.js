const app = require('./config/server')
const port = process.env.port //set port=3000; set <listas as variáveis de Ambiente>
const boasVindas = require('./modulo')

app.listen(port, () => {
  console.log(`${boasVindas}, aberto na porta: ${port}`)
})
