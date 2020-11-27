var http = require('http');

//criamos nosso primeiro servidor
http.createServer(function(req, res){
    res.write('Ceunsp Andes - Servidor Node')
    res.end(); //fim da resposta
}).listen(5000);

//o servidor ficará ouvindo na porta 5000