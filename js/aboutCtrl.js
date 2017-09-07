angular
  .module('app')
  .controller('aboutCtrl', function($scope, $stateParams, mainService) {
    $scope.test = mainService.about;
    $scope.person = mainService.arr[$stateParams.num];
    $scope.updateHome = function() {
      mainService.home = 'Home is now updated, but from about.';
    };
  });
