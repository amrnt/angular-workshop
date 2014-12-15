'use strict';

module.exports =
	angular.module('AngularProj.posts', [
		require('./edit').name
	])
	.config(function($stateProvider) {
		$stateProvider
			.state('posts', {
				url: '/posts',
				templateUrl: 'app/posts/template.html'
			});
	});
