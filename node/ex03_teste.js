const s1 = require('./ex03_singleton');
const s2 = require('./ex03_singleton');

/*
* Imprime 1, 2, 3, 4 pois é a mesma instancia pois a variável numero está fora da função
*/
s1.exibirProximo();
s2.exibirProximo();
s1.exibirProximo();
s2.exibirProximo();
