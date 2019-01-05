// JavaScript source code
 var app=angular
       .module("myapp",[])
       .controller("ctrl",function ($scope) {
	   var employees=[
	   	   {name:"dheeraj",sex:"male",city:"kolkata",password:"250dd"},
		   {name:"rajiv",sex:"male",city:"mumbai",password:"rr000"},
		   {name:"megha",sex:"female",city:"pune",password:"hyt00"}
	   ];
	   $scope.employees=employees;
	   });
	
