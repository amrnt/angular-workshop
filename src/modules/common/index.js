'use strict';

module.exports =
  angular.module('AngularProj.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
