/* Importando o express */
const express = require('express');

/* Chamando o express */
const server = express();
const port = 40050;

/* Importando arquivo  ex05_routes */
const router = require('./ex05_routes');

/*
* Chamando o middleware 
* Deverá ser chamada /api/produtos/? ou /api/clientes/1
*/
server.use('/api', router);

/* Parametrizando porta para rodar o servidor */
server.listen(port, function(){
	console.log('Executando na porta: '+port);
});