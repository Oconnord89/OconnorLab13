var app=angular.module("mylab13", []);

app.controller('ctrl',
function($scope){/////inject scope to allow function to change model, view

$scope.words=['crayon','meatball'];

    $scope.randomWord=function(words,){
    $scope.tasks.push(words);
};


});
