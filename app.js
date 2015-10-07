(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'This gem is a dodecahedron',
      canPurchase: true,
      soldOut: true,
      images:[
        {
          full: 'http://paulscottinfo.ipage.com/polyhedra/platonic/dodecahedron/1dodecahedronL.gif'
        }
      ]
    },

    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'This is a Pentagonal Gem',
      canPurchase: true,
      soldOut: false,
    }
  ]

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    }

    this.isSelected = function(cehckTab) {
      return this.tab === cehckTab;
    }
  });

})();
