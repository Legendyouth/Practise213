angular.module('mapp')
	.controller('homeCtrl',homeCtrl);
homeCtrl.$injector = ['$scope','Factive'];
function homeCtrl($scope,Factive){
	let myswiper = new Swiper('.swiper-container',{
		onSlideChangeStart:function(swiper){
			$('#nav li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
			$('#title li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
		}
	});
	$('#nav li').on('click',function(){
		myswiper[1].slideTo($(this).index())
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('#title li').on('click',function(){
		myswiper[0].slideTo($(this).index())
		$(this).addClass('active').siblings().removeClass('active');
		//console.log(Factive.ac)
	})
}