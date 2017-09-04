/* Importando a model */
const BillingCycle = require("./billingCycle");

const _ = require("lodash");

/* 
* Recebe um array de métodos, será criado uma api rest
* Cria vários serviços para inserir, alterar, deletar, consultar
*/
BillingCycle.methods(['get', 'post', 'put', 'delete']);

/* Sempre que ocorrer um update, retornará o novo objeto e não o antigo */
BillingCycle.updateOptions({new: true, runValidators: true});

/*
 * O node-restful permite interceptar requisições antes ou depois
 * No caso abaixo depois de um post faça algo...
 */
BillingCycle.after("post", sendErrosOrNext)
			.after("put", sendErrosOrNext);

function sendErrosOrNext(req, res, next){
	/* Os erros do node-restful ficam em bundle */
	const bundle = res.locals.bundle;

	if(bundle.errors){
		var errors = parseErrors(bundle.errors);
		res.status(500).json({errors});
	} else {
		next();
	}
}

/* Percorre o objeto Errors e captura as mensagens */
function parseErrors(nodeRestfulErrors){
	const errors = [];
	_.forIn(nodeRestfulErrors, error => errors.push(error.message));
	return errors;
}

/* Criando uma rota count */
BillingCycle.route("count", function(req, res, next){
	BillingCycle.count(function(error, value){

		if(error){
			/* Padronizando erros, para facilitar no frontend a tratativa de erros */
			res.status(500).json({errors: [error]});
		} 

		else {
			res.json({value});
		}
	});
});

module.exports = BillingCycle;