angular.module('mapp')
	.factory('Factive',function(){
		return{
			ac:"$(this).addClass('active').siblings().removeClass('active');"
		}
	})