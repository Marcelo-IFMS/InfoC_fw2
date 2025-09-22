module.exports= ((app) => {
    app.get('/pesquisa', (req, res) => {
        res.render('./pesquisa')
    })
})
