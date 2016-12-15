angular.module('appManager', [])

.controller('contactMgrCtrl', function($scope, $routeParams){
 console.log($routeParams)
})

.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/contact/:id', {
      controller: 'contactMgrCtrl',
      templateUrl: 'ShoppingList/contactManager.html'

  })

  .when('/addContact', {
    controller: 'addCtrl',
    templateUrl: 'ShoppingList/addContact.html'
  })

  .otherwise({
    redirecTo: '/Shopping/404.html'
  });

    $locationProvider.html5Mode(true);
})