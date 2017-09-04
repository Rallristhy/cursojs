const _ = require("lodash");
const BillingCycle = require("../billingCycle/billingCycle");

function getSummary(req, res, next){
	BillingCycle.aggregate({
		$project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
	}, {
		$group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}} //_id é obrigatório
	}, {
		$project: {_id: 0, credit: 1, debt: 1} //não mostrar o id
	}, function(error, result){
		if(error){
			res.status(500).json({errors: [error]});
		} else {
			res.json(_.defaults(result[0], {credit: 0, debt: 0})) // _.defaults faz um merge entre os objetos, se não tiver informação pega 0 como padrão, sempre retornará um objeto válido
		}
	});
}

/* Exportando a função */
module.exports = { getSummary };