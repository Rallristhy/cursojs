/* Importando o express */
const express = require('express');

/* Chamando o express */
const server = express();
const port = 40050;

/* 
* use aceita qualquer tipo de requisição get, post, put ...
* começa com /api se chamar aapi da erro mas /apii não da erro
*/
server.use('/api', function(req, res, next){
	console.log('Inicio...');
	next();
	console.log('Fim...');
});

server.use('/api', function(req, res){
	console.log('Resposta...');
	res.send('Olá API!');
});

/* Parametrizando porta para escutar o servidor */
server.listen(port, function(){
	console.log('Executando na porta: '+port);
});