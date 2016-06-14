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
        $scope.logedin=false;
        $scope.registered=true;

        var keyval=[];
        $.each($cookies.getAll(), function(key,obj) {
            keyval.push(key);
        });
        var register;
        $scope.submitdata=function() {

            var registeremail = $scope.user.email;
            for (i = 0; i < keyval.length; i++) {
                if (registeremail === keyval[i]) {
                    register=true;
                    $window.location.reload();
                }
                else {
                    register=false;
                    $cookies.putObject($scope.user.email, $scope.user);
                    $window.location.reload();
                };
            };
            if(keyval.length==0){
                register=false;
                $cookies.putObject($scope.user.email, $scope.user);
                $window.location.reload();
            }
            if(register){
                alert("You are already register in cookies.");
            };
            if(!register){
                alert("You are successfully register.");
            };

        };

    });

    app.controller("login",function($scope,$cookies,$window,myservices,$location){
        $scope.user2={};
        $scope.lin=true;
        $scope.logedin=false;
        $scope.registered=true;


        var keyval=[];
        var objval=[];
        $.each($cookies.getAll(), function(key,obj) {

            keyval.push(key);
            objval.push(obj);
        });

        $scope.login = function() {
            var email = $scope.user2.email;
            var password = $scope.user2.password;

            for (i = 0; i <objval.length; i++) {
                var detail = JSON.parse(objval[i]);
                if (email === detail.email && password === detail.password) {
                    login = true;
                    console.log("user detected");
                        debugger;
                    if(detail.type==="Condidate") {
                        login = true;
                        console.log("user detected");

                        myservices.putLoginSuccess();
                        $location.path('/condidate');

                    }else {
                        login = true;
                        myservices.putLoginSuccess();
                        $location.path('/admin');
                    };
                }
                else {
                    console.log("user Not Match");
                    $window.location.reload();
                };
            };
            if(!login){
                alert("you are not yet register");
            };

        };

    });

    app.controller("condidate",function($scope,$cookies,$location,myservices){
        $scope.lin=false;
        $scope.logedin=false;
        $scope.registered=false;


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

    app.controller("admin", function($scope,$cookies,$location,myservices){
        $scope.lin=false;
        $scope.logedin=false;
        $scope.registered=false;


        $scope.admin=function () {

            var loginval = $cookies.getObject("loginsuccess");
            if(loginval){
                $location.path("/admin");
            } else {
                $location.path("/login");
            };
        };


    });
