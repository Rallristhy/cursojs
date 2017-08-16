/* Importando bodyParser que é um middleware que faz o parser da body vinda do front end */
const bodyParser = require('body-parser');

/* Importando express */
const express = require('express');

/* Criando um server express */
const server = express();

/* 
* Middleware para qualquer URL
* server.use - Toda requisição vindas para o backend passará pelo urlencoded
* urlencoded é o formato dos dados vindos do frondend
*/
server.use(bodyParser.urlencoded({ extended: true }));

/* 
* Middleware
* Se o body vindas do front end for um json, passará por esse middleware para fazer a interpretação
*/
server.use(bodyParser.json());

/* Criar uma constante para porta que será executada */
const port = 9000;

server.listen(port, function() {
	console.log("Server running on port: "+port);
});