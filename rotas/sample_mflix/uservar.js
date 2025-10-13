module.exports = (app) => {
    app.get("/users/:nome", async (req, res) => {
        await app.dbClient.connect();
        const nome = req.params.nome
        const users = await app.dbClient.db('sample_mflix')
            .collection('users')
            .find({ name: new RegExp(nome,'i')})
            .toArray();
        res.json(users);
    })
}