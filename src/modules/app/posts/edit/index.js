'use strict';

// /posts/ID/edit

module.exports =
  angular.module('AngularProj.posts.edit', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('posts.edit', { // /posts/edit
        url: '/:id/edit',
        templateUrl: 'app/posts/edit/template.html',
        controller: 'EditPostsCtrl'
      });
  })
  .controller('EditPostsCtrl', function($scope, $http, $stateParams, $state) {

    var postID = $stateParams.id;

    $scope.post = {};

    $http.get('https://afternoon-crag-3805.herokuapp.com/posts/' + postID + '.json')
      .success(function(data) {
        $scope.post = data;
      });

    $scope.updatePost = function() {
      // PUT
      $http.put('https://afternoon-crag-3805.herokuapp.com/posts/' + postID + '.json', $scope.post)
        .success(function(data) {
          console.log('updated success');
          $state.go('posts.show', {
            id: postID
          });
        });
    };

  });
