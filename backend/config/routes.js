const express = require('express');

/* 
* Passando informações para um módulo, devemos passar o server do server.js como parâmetro
* API de Rotas
*/
module.exports = function(server){

	const router = express.Router();

	/* Criando rota /api para qualquer requisição */
	server.use("/api", router);

	/* Testando /api/teste para testar
	router.route("/teste").get(function(req, res, next){
		res.send("Funcionou");
	});
	*/

	/* Importando billingCycleService */
	const billingCycleService = require("../api/billingCycle/billingCycleService");

	/* 
	* Registrando rota billingCycles como url base
	*/
	billingCycleService.register(router, "/billingCycles");

	const billingSummaryService = require("../api/billingSummary/billingSummaryService");
	/* router sempre é chamado com /api/ */
	router.route("/billingSummary").get(billingSummaryService.getSummary);

}