"use strict";
{
function TodoController(){
    const vm = this;
    vm.ToDoList = [
        {task: " Finish the Lab"},
        {task: " Play basketball"},
        {task: " Workout"},
        {task: " Eat dinner"},
        {task: " Read for 20 minutes"}]
    }
    function addTask(){
        console.log("adding?");
        vm.ToDoList.push({'task': newToDo});
        newToDo = '';
    };

var fetch = angular.module('ToDoApp', []);

fetch.controller('complete', ['$scope', '$http', function ($scope, $http) {
    $scope.completeTask = false;

    $scope.completeTaskClick = function(){
    $scope.completeTask = true;
    }
    
    $scope.removeTask = false;

    $scope.removeTaskClick = function(){
    $scope.removeTask = true;
    }

}]);


angular
    .module("ToDoApp")
    .controller("TodoController", TodoController);

};