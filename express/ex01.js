/* Importando o express */
const express = require('express');

/* Chamando o express */
const server = express();
const port = 40050;

/* 
* Criando um middleware (rota)
* get ou post ou all (http)
*/
server.get('/', function(req, res){
	res.send('Oii!');
});

/* 
* Criando um middleware (rota) com expressão regular, onde tudo que tiver /api/ responde essa rota
*/
server.get(/api/, function(req, res){
	res.send('Testando API');
});




/* Parametrizando porta para rodar o servidor */
server.listen(port, function(){
	console.log('Executando na porta: '+port);
});

