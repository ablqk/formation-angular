(function() {
    // creation du module avec ses dépendences
    var app = angular.module('tuto', []);
 
    // Création d'un controller et attachement d'une variable au scope.
    app.controller('HelloCtrl', function() {
      // déclaration d'une variable
      this.text = "Hello";
      this.showParagraph = function(){
        return false;
      };
    });

})();
