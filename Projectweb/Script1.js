// JavaScript source code
 var app=angular
       .module("myapp",[])
       .controller("ctrl",function ($scope) {
	   var employees=[
	   	   {name:"dheeraj",sex:"male",city:"kolkata",salary:"25000"},
		   {name:"rajiv",sex:"male",city:"mumbai",salary:"30000"},
		   {name:"megha",sex:"female",city:"pune",salary:"20000"}
	   ];
	   $scope.employees=employees;
	   });
	  