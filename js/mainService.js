angular.module('app').service('mainService', function($http) {
  this.about = 'This is a message from the service, for the aboutPage';
  this.home = 'This is a message from the service, for the homePage';

  this.arr = ['shea', 'Peter', 'Gloria'];
});
