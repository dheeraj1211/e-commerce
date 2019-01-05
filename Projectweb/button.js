// JavaScript source code
var app=angular.module("myapp",[])
               .controller("demo",function($scope,$location,$anchorScroll)
			   {
			   	   $scope.scrollTo=function(scrolllocation)
				   {
				   $location.hash(scrolllocation);
				   $anchorScroll();}
			   });