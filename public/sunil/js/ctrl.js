/**
 * Created by abc on 02/06/2016.
 */
var app=angular.module('app');

    app.service('myservices',function ($cookies) {
        this.userarry = [];

        this.putLoginSuccess = function() {
            $cookies.putObject("loginsuccess", true);
        };


        this.logout = function() {

        };

    });
   

    app.controller("default",function($scope,$cookies,$window,myservices){
        $scope.user={};
        myservices.userarry.push($scope.user);
        $scope.lin=true;
        $scope.submitdata=function(){

            $cookies.putObject($scope.user.email, $scope.user);
            $window.location.reload();
            alert("You are successfully register.");
        };

    });

    app.controller("login",function($scope,$cookies,$window,myservices,$location){
        $scope.user2={};
        $scope.lin=true;
        
        var keyval=[];
        var objval=[];
        $.each($cookies.getAll(), function(key,obj) {

            keyval.push(key);
            objval.push(obj)
        });

        $scope.login=function() {
            var email = $scope.user2.email;
            for (i = 0; i <keyval.length; i++) {
                // debugger;
                if (email === keyval[i]) {
                    login = true;
                    console.log("user detected");

                    myservices.putLoginSuccess();
                    
                    $location.path('/condidate');
                }
                else {
                    console.log("user Not Match");
                    $window.location.reload();
                   // alert("you are not yet register");
                };
            };


            if(!login){
                alert("you are not yet register");
            }

        };

    });

    app.controller("condidate",function($scope,$cookies,$location){
        $scope.lin=false;
        
        $scope.condidate=function () {
            debugger;
            var loginval = $cookies.getObject("loginsuccess");
            if(loginval){
                $location.path("/candidate");
            } else {
                $location.path("/login");
            };
        };

        

    });

    app.controller("admin", function($scope){
        $scope.lin=true;

        $scope.admin=function () {

            var loginval = $cookies.getObject("loginsuccess");
            if(loginval){
                $location.path("/admin");
            } else {
                $location.path("/login");
            };
        };


    });
