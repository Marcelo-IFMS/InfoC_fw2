export default ((app) => {
    app.get('/cursos', (req, res) => {
        res.render('./cursos')
    })
})
