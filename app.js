angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    /* Set home route */
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: `tmpl/homeTmpl.html`,
        controller: 'homeCtrl'
      })
      .state('about', {
        url: '/about/:num',
        templateUrl: `tmpl/aboutTmpl.html`,
        controller: 'aboutCtrl'
      });
  });
