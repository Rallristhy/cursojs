/* Importando a model */
const BillingCycle = require("./billingCycle");

/* 
* Recebe um array de métodos, será criado uma api rest
* Cria vários serviços para inserir, alterar, deletar, consultar
*/
BillingCycle.methods(['get', 'post', 'put', 'delete']);

/* Sempre que ocorrer um update, retornará o novo objeto e não o antigo */
BillingCycle.updateOptions({new: true, runValidators: true});

module.exports = BillingCycle;