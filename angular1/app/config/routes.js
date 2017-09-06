/* Configurando app  i injestando dependencias*/
angular.module("primeiraApp").config([
	"$stateProvider", //objeto do ui-router
	"$urlRouterProvider", //objeto do ui-router
	function($stateProvider, $urlRouterProvider){

		/* Criar estados, atualiza a url do browser e carrega o template na ui-view */
		$stateProvider.state("dashboard", {
			url: "/dashboard",
			templateUrl: "dashboard/dashboard.html"
		});

		/* Criar estados, atualiza a url do browser e carrega o template na ui-view */
		$stateProvider.state("billingCycle", {
			url: "/billingCycles",
			templateUrl: "billingCycle/tabs.html"
		});

		/* Definir um estato padrão, rota padrão */
		$urlRouterProvider.otherwise("/dashboard")
	}
]);