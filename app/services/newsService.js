(function() {
	"use strict";
	var app = angular.module("newsApp")
	.factory(
		"newsService",
		function($http){
			//va a contener todas las funciones del servicio
			var service = {
				getAll: function(){
					return $http.get("https://newsapi.org/v2/top-headlines?apiKey=b64b9ed920ca468bbfec2e80ca76d821&country=ar");
					//el link es una api, q trae un resours o algo asi
				}
			}

			return service;//retorna el objeto q creo anteriormente q contiene campos con todas las funciones q realiza
		})
}());