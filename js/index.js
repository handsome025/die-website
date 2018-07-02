jQuery(function($) {
	var clientWidth = $(window).width() //BODY对象宽度
	var clientHeight = $(window).height() //BODY对象高度
	var topH = $(".top").height() //BODY对象高度
	// alert(clientWidth)
	// alert(clientHeight)
	console.info(clientWidth,clientHeight,topH)
	$(".swiper-container").css("height",clientHeight - topH +"px") 
	// bannerEvent(0)
	var mySwiper = new Swiper('.swiper-container',{ 
	    pagination: '.pagination',
	    paginationClickable: true,
	    mode: 'vertical',
	    loop: true,
	    autoHeight:true,
	    mousewheelControl:true,
	    onSlideChangeEnd: function(swiper){
	    	console.info(swiper.activeIndex)
	    	var index = $(".swiper-slide-active").data("index")
	      	$("[data-index='"+index+"']").find("a").addClass("curr").closest("li").siblings("li").find("a").removeClass("curr")
	    },
	    onSlideChangeStart: function(swiper) {
			// var H = $(".content-slide").eq(swiper.activeIndex).height();

			// console.info(888,H) 
			// $(".swiper-slide").css('height', clientHeight-topH + 'px');
			// $(".swiper-wrapper").css('height', clientHeight-topH + 'px');
			console.info($(".li1").height(),$(".li2").height(),$(".li3").height(),$(".li4").height(),$(".li5").height())
		}
	})
	$(".nav li").click(function(){
		var index = $(this).data("index")
		$(this).find("a").addClass("curr").closest("li").siblings("li").find("a").removeClass("curr")

		mySwiper.swipeTo(index, 800, false);
	})
	$(".next").click(function(){
		mySwiper.swipeNext()
	})

	
});


