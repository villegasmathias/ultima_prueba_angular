(function(){
	"use strict";//usa el determinado lenguaje de manera estandar
	var app= angular.module("newsApp",["ui.router"]);//modulo q creé,se realiza una inyeccion de dependencia ui.router

	app.config(function ($stateProvider) {
		$stateProvider
			.state(
				"home",{
				url:"/",
				templateUrl:"app/views/home.html"
			})
			.state(
			"newsIndex",{
				url:"/news",
				templateUrl: "app/views/news/index.html",
				controller:"newsController as vm"
			})
	});

}());