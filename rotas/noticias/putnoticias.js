module.exports= ((app) => {
    app.put('/noticias', (req, res) => {
        res.send('PUT Noticias')
    })
})
