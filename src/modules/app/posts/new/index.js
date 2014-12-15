'use strict';

// /posts/new

module.exports =
  angular.module('AngularProj.posts.new', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('posts.new', { // /posts/edit
        url: '/new',
        templateUrl: 'app/posts/new/template.html',
        controller: 'NewPostsCtrl'
      });
  })
  .controller('NewPostsCtrl', function($scope, $http, $stateParams, $state) {
    $scope.post = {};

    $scope.createPost = function() {
      // POST

      $http.post('https://afternoon-crag-3805.herokuapp.com/posts.json', $scope.post)
        .success(function(data) {
          console.log('created success');
          $state.go('posts.show', {
            id: data.id
          });
        });
    };

  });
