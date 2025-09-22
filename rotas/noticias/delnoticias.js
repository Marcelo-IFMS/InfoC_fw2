module.exports=  ((app) => {
    app.delete('/noticias', (req, res) => {
        res.send('Delete Noticias')
    })
})
