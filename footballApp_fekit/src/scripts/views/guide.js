var guideTpl = require('../tpl/guide.string');
document.body.innerHTML += guideTpl;
angular.module('mapp')
	.controller('guideCtrl',guideCtrl);
guideCtrl.$injector = ['$scope'];
function guideCtrl($scope,$timeout){
	var myswiper = new Swiper('.swiper-container');
}