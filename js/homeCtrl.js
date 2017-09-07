angular.module('app').controller('homeCtrl', function($scope, mainService) {
  $scope.test = mainService.home;
});
