var homeTpl = require('../tpl/home.string');
var util = require('../utils/common.js');
document.body.innerHTML += homeTpl;
angular.module('mapp')
	.controller('homeCtrl',homeCtrl);
homeCtrl.$injector = ['$scope','Factive'];
function homeCtrl($scope,Factive){
	var myswiper = new Swiper('.swiper-container',{
		onSlideChangeStart:function(swiper){
			var navli = $('#nav li').eq(swiper.activeIndex);
			util.active(navli);
		}
	});
	$('#nav li').on('click',function(){
		myswiper[1].slideTo($(this).index());
		util.active($(this));
	})
	$('#title li').on('click',function(){
		myswiper[0].slideTo($(this).index());
		util.active($(this));
	})
}