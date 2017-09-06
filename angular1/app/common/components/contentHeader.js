/* Criando um componente para Header */
angular.module("primeiraApp").component("contentHeader", {

	/*
	 * @ bind do tipo string
	 */
	bindings: {
		name: '@',
		small: '@'
	},
	template: `
		<section class="content-header">
			<h1>{{ $ctrl.name }}<small>{{ $ctrl.small }}</small></h1>
		</section>
	` 

});