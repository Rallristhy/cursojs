/* Importando o express */
const express = require('express');

/* Chamando o express */
const server = express();
const port = 40050;

/* 
* Mapeia vários métodos para a mesma URL (Rota)
*/
server.route('/clientes').get(function(req, res){
	res.send('Lista de Clientes');
}).post(function(req, res){
	res.send('Novo Cliente');
}).put(function(req, res){
	res.send('Altesra Cliente');
});

/* Parametrizando porta para escutar o servidor */
server.listen(port, function(){
	console.log('Executando na porta: '+port);
});