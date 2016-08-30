var app = angular.module('myApp',['ui.router']);

    app.config(function($stateProvider,$urlRouterProvider) {
        console.log('log');
        $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: function($scope){
                $scope.text = 'This is the Home'
            }
        })

        .state('home.nested1',{
            url: '/nested1',
            templateUrl:'nested1.html',
            controller: function($scope){
                $scope.text1 = 'This is the nested view 1'
            }
        })

        .state('home.nested2',{
            url: '/nested2',
            templateUrl:'nested2.html',
            controller: function($scope){
                $scope.fruits = ['apple','mango','oranges'];
            }
        });

        $urlRouterProvider.otherwise('/home');
    });