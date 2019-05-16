var wd = window.screen.width,
	count = 0,
	magLeft = 0,
	swiper;
var imgSrcArr = ['images/cover_1.png', 'images/cover_2.png', 'images/linerBgx.png', 
'images/linerBg.png', 'images/arrow.png', 'images/title_1.png', 'images/footerCopyRight.png',
 'images/website.png', 'images/footerLink.png'];
var img = [],
	len = imgSrcArr.length,
	flag = 0;
for(var i = 0; i < len; i++) {
	img[i] = new Image();
	img[i].src = imgSrcArr[i];
	img[i].onload = function() {
		flag++;
		if(flag == len) {
			console.log(flag);
			$('.containerVolvo').show();
			inCatalog();
			swiper = new Swiper('.swiper-container', {
				slidesPerView: 5,
				initialSlide :4,//默认第四个
				direction: 'vertical',
				centeredSlides: true,
				pagination: {
					clickable: true,
				},
			});
			swiper.on('transitionStart', function() {
				console.log(this.activeIndex);
				var slide = ['2019.1','2019.2','2019.3','2019.4','2019.5'];
				var len=slide.length;
				console.log(this.activeIndex,len);
				if(this.activeIndex < len){
					swiper.slideTo(this.activeIndex, 0);
					console.log(this.activeIndex);
					$('.coverImg a').hide().eq(this.activeIndex).show();
				}else{
					swiper.slideTo(4,0);
					$('.coverImg a').hide().eq(4).show();
				}
				for(var i = 0; i < slide.length; i++) {
					if(i == this.activeIndex) {
						$('.midContent section').text(slide[i]);
					}
				}

			})
		}
	}
}
$(function() {
	$('.coverImg a').eq(4).show();
	$('.volvo_content').css({
		width: 2 * wd,
		'margin-left': magLeft,
		height: 815 / 750 * wd + 40
	});
	$('.midContent>img,.midContent>section,.coverMonth > section').css({
		height: 56 / 750 * wd,
		'line-height': 56 / 750 * wd + 'px',
		'font-size': 54 / 750 * wd + 'px'
	});
	$('.listMonth').css({
		'font-size': 54 / 750 * wd + 'px'
	});

})

function inCatalog() {
	setTimeout(function() {
		fadeIn($('.titlePic'));
	}, 300);
	setTimeout(function() {
		slideInLeft($('.blackLine'));
	}, 500);
	setTimeout(function() {
		fadeIn($('.webSite'));
	}, 700);
	setTimeout(function() {
		slideInLeft($('.changeMonth'));
		slideInRight($('.coverImg'));
	}, 900);
	setTimeout(function() {
		fadeIn($('.footerImg'));
	}, 1000);
}

function fadeIn(e) {
	e.removeClass('fadeOut').addClass('fadeIn');
}

function fadeOut(e) {
	e.removeClass('fadeIn').addClass('fadeOut');
}

function slideInLeft(e) {
	e.css({
		opacity: 1
	}).removeClass('slideOutLeft').addClass('slideInLeft');
}

function slideInRight(e) {
	e.css({
		opacity: 1
	}).removeClass('slideOutRight').addClass('slideInRight');
}

function slideOutRight(e) {
	e.css({
		opacity: 1
	}).removeClass('slideInRight').addClass('slideOutRight');
}