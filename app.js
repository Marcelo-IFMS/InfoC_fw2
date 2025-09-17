
import app  from './config/server.js'
import db from './config/db.js';
const port = process.env.port ////set port=3000; set <listas as variáveis de Ambiente>
import boasVindas from './modulo.js'

app.get("/db", async (req, res) => {
    const movies = await db();
    res.json({ msg: "Arquivo db.js executado", resultado: movies });
});

app.listen(port, () => {
  console.log(`${boasVindas}, aberto na porta: ${port}`)
})
