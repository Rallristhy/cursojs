/* Importando mongo para conectar ao MongoDB */
const mongoose = require("mongoose");
module.exports = mongoose.connect('mongodb://localhost/db_finance');

/* Sobrescreve de forma global mas mensagens de erros */
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor que o limite mínimo de '{MAX}'.";
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'.";