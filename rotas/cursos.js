module.exports = ((app) => {
    app.get('/cursos', (req, res) => {
        res.render('./cursos')
    })
})
