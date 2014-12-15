'use strict';

module.exports =
	angular.module('AngularProj.posts.edit', [])
	.config(function($stateProvider) {
		$stateProvider
			.state('posts.edit', { // /posts/edit
				url: '/edit',
				templateUrl: 'app/posts/edit/template.html'
			});
	});
