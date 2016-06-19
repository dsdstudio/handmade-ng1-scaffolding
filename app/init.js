import angular from 'angular';
import uiRouter from 'angular-ui-router';
import indexTpl from 'templates/index.html!ng-template'
import layoutTpl from 'templates/layout.html!ng-template'
import aboutTpl from 'templates/about.html!ng-template'

class AppController {
	constructor(){
		this.title = '보롱 ~ 월드 index.html';
	}
}
class AboutController {
	constructor(){
		this.title = 'about.html';
	}
}
angular.module('app', [uiRouter])
	.config(($stateProvider, $urlRouterProvider) => {
		$stateProvider.state('main', {
			abstract:true,
			templateUrl:layoutTpl.templateUrl,
		})
		.state('main.index', {
			url:'/',
			templateUrl:indexTpl.templateUrl,
			controller:AppController,
			controllerAs:'vm'
		})
		.state('main.about', {
			url:'/about',
			templateUrl:aboutTpl.templateUrl,
			controller:AboutController,
			controllerAs:'vm'
		});

		$urlRouterProvider.otherwise('/');

	})
	.controller('AppController', AppController);
angular.bootstrap(document, ['app']);
