angular.module('app', ['ngRoute','tubular']).config(['$routeProvider', function($routeProvider) {$routeProvider.when('/', {templateUrl: 'grid.html',}).otherwise({redirectTo: '/'}); } ]);