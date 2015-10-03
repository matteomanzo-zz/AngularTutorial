(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gems = {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'This gem is a dodecahedron',
      canPurchase: true,
      soldOut: true,
  }

})();
