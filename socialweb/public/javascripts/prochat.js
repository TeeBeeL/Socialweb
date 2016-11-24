$(document).ready(function() {
var app = angular.module('chatter',[])



app.controller('chat', ['$scope', function($scope){
  
  $scope.firstUser = "Henry";
  $scope.secondUser = "Cole";

    $scope.msgsone = [];
    $scope.msgstwo = [];


$scope.oneSend = function(){

  $scope.msgstwo.push({
      name: $scope.firstUser,
      contents : $scope.user1msg 
  })

  $scope.msgsone.push({
      name: $scope.firstUser,
      contents : $scope.user1msg 
  })


}
$scope.sndSend = function(){

  $scope.msgsone.push({
      name: $scope.secondUser,
      contents : $scope.user2msg 
  })

  $scope.msgstwo.push({
      name: $scope.secondUser,
      contents : $scope.user2msg 
  })


}

}])
});