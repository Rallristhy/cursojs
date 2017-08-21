/* Importando o express */
const express = require('express');

/* Parametrizando Router */
const router = express.Router();

/* 
* Middleware Global sempre será chamada
* Criando rotas agrupadas com várias instancias 
*/
router.use(function(req, res, next) {
	const init = Date.now();
	next();

	/* Imprime o tempo */
	console.log(`Tempo = ${Date.now() - init} ms.`);
});


/* 
* :id é uma parâmetro qualquer que será recebido 
* req.params.id recebe o id da requisição
*/
router.get('/produtos/:id', function(req, res){
	res.json({id: req.params.id, name: 'Caneta'});
});

router.get('/clientes/:id/:name', function(req, res){
	res.json({id: req.params.id, name: req.params.name});
});

/* Exporta o router para ser utilizado em outro arquivo */
module.exports = router;