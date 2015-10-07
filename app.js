(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.product = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'This gem is a dodecahedron',
      canPurchase: true,
      soldOut: true,
    },

    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'This is a Pentagonal Gem',
      canPurchase: true,
      soldOut: false,
    }
  ]

})();
