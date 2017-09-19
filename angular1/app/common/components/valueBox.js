/* Criando um componente para Header */
angular.module("primeiraApp").component("valueBox", {

	bindings: {
		grid: '@',
		colorClass: '@',
		value: '@',
		text: '@',
		iconclass: '@'
	},
	/* É possível mudar o comportamento do componente, injeta a gridsystem factory criada */
	controller: [
		"gridSystem",
		function(gridSystem){
			this.gridClasses = gridSystem.toCssClasses(this.grid);
		}
	],
	template: `
		<div class="{{ ctrl.gridClasses }}">
			<div class="small-box "{{ ctrl.colorClass }}">
			
				<div class="inner">
					<h3>{{ ctrl.value }}</h3>
					<p>{{ ctrl.text }}</p>
				</div>

				<div class="icon">
					<i class="fa {{ ctrl.iconclass }}"></i>
				</div>
				
			</div>
			
		</div>
	`

});