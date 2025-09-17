export default ((app) => {
    app.get('/pesquisa', (req, res) => {
        res.render('./pesquisa')
    })
})
