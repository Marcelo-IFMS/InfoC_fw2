module.exports = function (app) {
    app.get('/db', async (req, res) => {
        try {
            await app.dbClient.connect();
            const movies = await app.dbClient.db('sample_mflix').collection('users').find({ email: /game/ }).toArray();
            const size = Object.keys(movies).length
            res.json({ msg: `Arquivo db.js executado ${size}`, resultado: movies });
            
        } finally {
            //encerra ocorrendo erro
            await app.dbClient.close();
        }
        
    })
}
