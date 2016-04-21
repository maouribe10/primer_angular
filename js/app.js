(function(){
	var app = angular.module('store', []);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('TabController', function(){
		this.tab = 0;
		this.setTab = function(setTab){
			this.tab = setTab;
		};
		this. isTab = function(tab){
			return this.tab === tab;
		}
	});

	var gems = [
		{name: 'Dodecahedro', price: 3.50, description: 'esto es una gema muy grande y muy bonita, y dispone de mucho brillo y color', puedeComprarse: false},
		{name: 'Octahedro', price: 8.50, description: 'Una gema con clase y distinción que requiere ser portada por alguién que la merezca', puedeComprarse: true}, 
		{name: 'Pentahedro', price: 6.30, description: 'Esta gema es muy pesada por lo que tiene un precio exhorbitante', puedeComprarse: true}
	];

})();
