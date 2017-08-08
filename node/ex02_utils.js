var upper = function(texto){
	return texto.toUpperCase();
}

/* 
* Torna a função upper visível para outros módulos(arquivos.js) 
* Ou module.exports = { upper: upper };
*/
module.exports = { upper };