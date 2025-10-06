module.exports = function (app) {
    app.get('/db',  async (req, res) => {
        try {
            await app.dbClient.connect();
            const users = await app.dbClient.db('sample_mflix').collection('users').find({ name: /^A/ }).toArray();
            const size = Object.keys(users).length
            res.json({ msg: `Arquivo db.js executado ${size}`, resultado: users });
            
        } finally {
            //encerra ocorrendo erro
            await app.dbClient.close();
        }
        
    })
}
