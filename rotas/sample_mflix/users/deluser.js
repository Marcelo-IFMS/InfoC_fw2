module.exports = (app) => {
    app.delete('/deluser', async (req, res) => {
        try {
            const name= req.body.name  
            await app.dbClient.connect();
            const resultado = await app.dbClient.db('sample_mflix')
                .collection('users')
                .deleteOne({ name: name })
            res.status(200).send('Dados Gravados')
        } catch (error) {
            res.status(400).send('Erro ao Gravar: ' + error)
        }
    })
}