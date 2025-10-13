module.exports = (app) => {
    app.get("/emails/:email", async (req, res) => {
        await app.dbClient.connect();
        const email = req.params.email
        const emails = await app.dbClient.db('sample_mflix')
            .collection('users')
            .find({ email: new RegExp(email,'i')})
            .toArray();
        res.json({totalRegistros:emails.length,emails});
    })
}