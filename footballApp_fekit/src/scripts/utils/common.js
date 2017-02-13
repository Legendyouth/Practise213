var commonUtil = {
	active:function($el){
       $el.addClass("active").siblings().removeClass("active");
	}
}

module.exports = commonUtil;