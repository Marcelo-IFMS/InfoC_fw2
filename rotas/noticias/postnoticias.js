export default ((app) => {
    app.post('/noticias', (req, res) => {
        res.send('POST Noticias')
    })
})
