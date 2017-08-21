/* Forma simples de disponibilizar a api para o frontend */
const restful = require("node-restful");
const mongoose = restful.mongoose;

/* Definindo Schema Credit */
const creditSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	value: { type: Number, min: 0, required: true }
});

/* Definindo Schema Debit */
const debitSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	value: { type: Number, min: 0, required: [true, "Informe o valor do débito!"] },
	status: { type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
});

/* Definindo Ciclo de Pagamento */
const billingCycleSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	month: { type: Number, min: 1, max: 12, required: true },
	year: { type: Number, min: 1970, max: 2100, required: true },
	/* Vetor de creditos */
	credits: [creditSchema],
	/* Vetor de debitos */
	debts: [debitSchema]
});

/* Exportando para ser consumido em outros módulos, cada arquivo é um módulo */
module.exports = restful.model('BillingCycle', billingCycleSchema);