/*
 * Facilitar o uso do padrão col do bootstrap Grid System
 * Método recebe um conjunto de númetros que transformam em classes do bootstrap
 */
angular.module("primeiraApp").factory("gridSystem", [ function() {

	function toCssClasses(numbers) {

		/* Se numbers foi definida ( != null) então remove os espaços em branco e separa em uma array
		 * Senão cols é indefinido retorna um array vazio
		 */
		const cols = numbers ? numbers.split(" ") : [];

		/* Cria uma variável classe */
		let classes = "";

		/* Se o primeiro elemento do array estiver preenchido, então classes receve col-xs- concatenado "o que vier como parametro" */
		if(cols[0]) classes += `col-xs-${cols[0]}`;
		if(cols[1]) classes += ` col-sm-${cols[1]}`;
		if(cols[2]) classes += ` col-md-${cols[2]}`;
		if(cols[3]) classes += ` col-lg-${cols[3]}`;

		return classes;

	}

	/* Uma Factory sempre deve retornar um objeto */
	return { toCssClasses: toCssClasses };

}]);
