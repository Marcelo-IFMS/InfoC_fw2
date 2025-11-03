module.exports = (app) => {
    app.put('/putuser', async (req, res) => {
        try {
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password
            await app.dbClient.connect();
            const resultado = await app.dbClient.db('sample_mflix')
                .collection('users')
                .updateOne({ name: name }, { $set: { email: email, password: password } })
            res.status(200).send('Dados apagados')
        } catch (error) {
            res.status(400).send('Erro ao Gravar: ' + error)
        }
    })
}