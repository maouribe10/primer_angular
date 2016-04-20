(function(){
	var app = angular.module('store', []);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{name: 'dodecahedro', price: 3.50, description: 'esto es una gema muy grande y muy bonita, y dispone de mucho brillo y color', puedeComprarse: false}, 
		{name: 'pentahedro', price: 6.30, description: 'Esta gema es muy pesada por lo que tiene un precio exhorbitante', puedeComprarse: true}
	];

})();
