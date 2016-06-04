/**
 * Created by abc on 02/06/2016.
 */

var app=angular.module('app',['ngRoute','ngCookies']);


app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'register.html',
            controller : 'default'
        })
        .when('/login', {
            templateUrl : 'login.html',
            controller : 'login'
        })
        .when('/condidate', {
            templateUrl : 'condidate.html',
            controller : 'condidate'
        })
        .when('/admin', {
            templateUrl : 'admin.html',
            controller : 'admin'
        });


});


