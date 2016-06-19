import angular from 'angular';
import uiRouter from 'angular-ui-router';

angular.module('app', [uiRouter])
	.controller('AppController', function($scope) {
		$scope.title = '보롱 월~~드';
	});
angular.bootstrap(document, ['app']);
