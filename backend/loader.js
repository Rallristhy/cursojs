/* Guarda o server para enviar como parâmetro para routes */
const server = require("../backend/config/server");
require("../backend/config/database");
/* Chamando a função e enviando como parâmetro o server */
require("../backend/config/routes")(server);