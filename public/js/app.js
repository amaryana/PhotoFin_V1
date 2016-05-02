angular.module('photofin', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '../views/homeTmpl.html'
    })
    .state('login', {
        url: '/login',
        templateUrl: '../views/loginTmpl.html'
    })
    .state('profile', {
        url: '/profile',
        templateUrl: '../views/profileTmpl.html'
    })
    .state('explore', {
        url: '/explore',
        templateUrl: '../views/exploreTmpl.html'
    });
    $urlRouterProvider.otherwise('/home');

});
