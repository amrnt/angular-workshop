'use strict';

// /posts/ID

module.exports =
  angular.module('AngularProj.posts.show', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('posts.show', { // /posts/edit
        url: '/:id',
        templateUrl: 'app/posts/show/template.html',
        controller: 'ShowPostsCtrl'
      });
  })
  .controller('ShowPostsCtrl', function($scope, $http, $stateParams) {

    var postID = $stateParams.id;

    $scope.post = {};

    $http.get('https://afternoon-crag-3805.herokuapp.com/posts/' + postID + '.json')
      .success(function(data) {
        $scope.post = data;
      });

  });
