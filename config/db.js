
import { MongoClient, ServerApiVersion } from 'mongodb';
const url = process.env.dbconn; //key gravada em variável de ambiente
//MongoClient
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
export default async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    const movie = await client.db('sample_mflix').collection('users').find({ name: /^Ma/ }).toArray();
    return movie;
  } finally {
    //encerra ocorrendo erro
    await client.close();
  }
}
// const collections = await client.db("admin").listCollections().toArray();
// console.log(collections);
// await client.db("portalnoticias").collection("noticias").insertOne({ noticia: "IFMS abre jogos internos", conteudo: 'Hoje inicia os primeiros jogos internos do IFMS campus dourados' });
// const users = await client.db("portalnoticias").collection("noticias").find().toArray();
// console.log(users);

// console.log("Pinged your deployment. You successfully connected to MongoDB!");
