const app = require('./config/server')
const port = require('./config/port')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})