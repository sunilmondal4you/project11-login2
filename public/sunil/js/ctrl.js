/**
 * Created by abc on 02/06/2016.
 */
var app=angular.module('app');

    app.service('myservices',function () {
        this.userarry = [];
    });
   

    app.controller("default",function($scope,$cookies,$window,myservices){
        $scope.user={};
        myservices.userarry=$scope.user;

        $scope.submitdata=function(){
            $cookies.putObject(myservices.userarry.email, myservices.userarry);
            $window.location.reload();
            alert("You are successfully register.");
        };

    });


    app.controller("login",function($scope,$cookies,$window,myservices,$location){
        $scope.user2={};
        $scope.login=function() {
            if($scope.user2.email===myservices.userarry.email){
                $location.path('#/condidate');
            }else{
                console.log("INVALID LOGIN ID");
                alert("you are not yet registered");
            }
        };

    });

    app.controller("condidate",function($scope,$cookies,$window,myservices){
        console.log(myservices.userarry);
        $cookies.get(myservices.userarry);

    });

    app.controller("admin", function($scope,$cookies,$window,myservices){


    });
