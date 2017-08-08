/* Importando o express */
const express1 = require('express');
const express2 = require('express');

/* = True, mesma instância */
console.log(express1 === express2);

const server1 = express1();
const server2 = express1();

/* = False, são instancias diferentes */
console.log(server1 === server2);

/*
* Resumindo, o express e o Router são singletons, só existe uma instância de cada objeto
*/