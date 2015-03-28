angular.module('lab9_10', ['ngRoute'])
       .config(['$routeProvider', function($routeProvider){
                     /**
                      * when() Cuantas veces sea necesario
                      * otherwise() una sola vez "OJO"
                      */
                      $routeProvider
                      .when('/', {
                            templateUrl: 'main.html'
                      })
                      .when('/message/one', {
                            templateUrl: 'templates/one.html'
                      })
                      .when('/message/two', {
                            templateUrl: 'templates/two.html'
                      })
                      .otherwise({
                            redirectTo: '/'
                      });

              }]);