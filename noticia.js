var http = require('http');
var server = http.createServer(function (req, res) {
    var url = req.url;
    if (url == '/') { 
        res.end(`Pagina Inicial da disciplina de FW2`) 
    }     else if (url == '/cursos') {
        res.end(`<h1>Bem vindos aos ${url}</h1>`)
    } else if (url == '/pesquisa') {
        res.end(`<h1>Bem vindos a ${url}</h1>`)
    } else if (url == '/esportes') {
        res.end(`<h1>Bem vindos aos ${url}</h1>`)
    } else if (url == '/extensao') {
        res.end(`<h1>Bem vindos a ${url}</h1>`)
    } else {
        res.end(`<h1>Pagina nao encontrada: ${url}</h1>`)
    }
    console.log(req.url+' - '+req.method);
})
server.listen(3000);