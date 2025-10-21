module.exports = (app) => {
    app.post('/postuser', async (req, res) => {
        try {
            await app.dbClient.connect();
            const resultado = await app.dbClient.db('sample_mflix')
                .collection('users')
                .insertOne(req.body)
            res.status(200).send('Dados Gravados')
        } catch (error) {
            res.status(400).send('Erro ao Gravar: '+error)
        }
    })
}