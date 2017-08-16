/* Importando mongo para conectar ao MongoDB */
const mongoose = require("mongoose");
module.exports = mongoose.connect('mongodb://localhost/db_finance');