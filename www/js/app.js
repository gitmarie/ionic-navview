angular.module('ionic-navview', ['ionic'])

        .config(function ($stateProvider, $urlRouterProvider) {


            $urlRouterProvider.otherwise('/');

            $stateProvider

            .state('state1', {
                url: '/',
                templateUrl: 'state1.html'
            })

            .state('state2', {
                url: '/state2',
                templateUrl: 'state2.html'
            })

            .state('state3', {
                url: '/state3',
                templateUrl: 'state3.html'
            });

        })
