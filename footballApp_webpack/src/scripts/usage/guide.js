
angular.module('mapp')
	.controller('guideCtrl',guideCtrl);
guideCtrl.$injector = ['$scope'];
function guideCtrl($scope){
	var myswiper = new Swiper('.swiper-container');
}