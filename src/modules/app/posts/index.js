'use strict';

// /posts
// /posts/index

module.exports =
	angular.module('AngularProj.posts', [
		require('./show').name,
		require('./edit').name
	])
	.config(function($stateProvider) {
		$stateProvider
			.state('posts', {
				url: '/posts',
				templateUrl: 'app/posts/template.html',
				controller: 'PostsCtrl'
			});
	})
	.controller('PostsCtrl', function($scope, $http) {
		$scope.posts = [];

		$http.get('https://afternoon-crag-3805.herokuapp.com/posts.json')
			.success(function(data) {
				$scope.posts = data;
			});

	});
