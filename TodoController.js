"use strict";
{

var fetch = angular.module('ToDoApp', []);

fetch.controller('ToDoListController', ['$scope', '$http', function ($scope, $http){
    const vm = this;
    vm.ToDoList = [
        {task: " Finish the Lab", edit: false},
        {task: " Play basketball", edit: false},
        {task: " Workout", edit: false},
        {task: " Eat dinner", edit: false},
        {task: " Read for 20 minutes", edit: false}];

    $scope.addTask = function(){
        vm.ToDoList.push({'task': $scope.newToDo, 'done': false, 'edit': false});
        $scope.newToDo = '';

    };
}]);

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
    .controller("TodoController", ToDoController);
};