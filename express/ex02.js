/* Importando o express */
const express = require('express');

/* Chamando o express */
const server = express();
const port = 40050;

/* 
* Criando rota padrão e mandando para próxima depois finaliza 
* Saída Inicio... Resposta... Fim...
*/
server.get('/', function(req, res, next){
	console.log('Inicio...');
	next();
	console.log('Fim...');
});

server.get('/', function(req, res){
	console.log('Resposta...');
	res.send('Olá express!');
});

/* Parametrizando porta para escutar o servidor */
server.listen(port, function(){
	console.log('Executando na porta: '+port);
});