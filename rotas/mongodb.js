module.exports = (app) => {
    app.get('/mongodb', (req, res) => {
        async function run() {
            try {
                // Connect the client to the server	(optional starting in v4.7)
                await app.dbClient.connect()
                // Send a ping to confirm a successful connection
                await app.dbClient.db("admin").command({ ping: 1 })
                console.log("Pinged your deployment. You successfully connected to MongoDB!");
            } finally {
                // Ensures that the client will close when you finish/error
                await app.dbClient.close();
            }
        }
        run().catch(console.dir)
        res.send('Final')
    })
}
