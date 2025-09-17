export default ((app) => {
    app.get('/noticias', (req, res) => {
        res.send('GET Noticias')
    })
})
