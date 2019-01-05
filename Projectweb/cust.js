// JavaScript source code
var app=angular
             .module("mymodule",[])
             .controller("mycontroller",function ($scope)
{ var employee={
	firstname:"dheeraj",
	lastname:"pandey",
	occupation:"student",
	expenditure:"8000"
};
$scope.employee=employee;
});
