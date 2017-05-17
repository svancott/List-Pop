(function() {
    function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             })
         $stateProvider
             .state('history', {
                 url: '/history',
                 controller: 'HistoryCtrl as history',
                 templateUrl: '/templates/history.html'
             });
     }

     angular
         .module('listPop', ['ui.router', 'firebase'])
         .config(config);
 })();
