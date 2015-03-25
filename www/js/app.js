angular.module('ionic-navview', ['ionic'])

        .config(function ($stateProvider, $urlRouterProvider) {


            $urlRouterProvider.otherwise('/');

            $stateProvider

            .state('state1', {
                url: '/',
                templateUrl: 'templates/state1.html'
            })

            .state('state2', {
                url: '/state2',
                templateUrl: 'templates/state2.html'
            })

            .state('state3', {
                url: '/state3',
                templateUrl: 'templates/state3.html'
            });

        })
