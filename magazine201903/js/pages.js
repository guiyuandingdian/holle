var page = 0,
	scroTop = 0,
	sct1 = 0,
	sct2 = 0,
	sct3 = 0,
	sct4 = 0,
	sct5 = 0,
	wd = window.screen.width,
	hd = window.screen.height,
	count = 0,
	magLeft = 0,
	style = 0,
	index = 0;
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: true,
	autoHeight: true,
	onTransitionEnd: function (swiper) {
		page = swiper.activeIndex;
		clearHeadStyle();

		if (page == 0) {
			window.scrollTo(100, sct1);
		} else if (page == 1) {
			window.scrollTo(100, sct2);
		} else if (page == 2) {
			window.scrollTo(100, sct3);
		} else if (page == 3) {
			window.scrollTo(100, sct4);
		} else if (page == 4) {
			window.scrollTo(100, sct5);
		}

		pages();

	}
})
var swiper1 = new Swiper('.swiper-container-1', {
	loop: true,
	speed: 2000,
	autoplay: {
		delay: 2000
	},
	autoplayDisableOnInteraction : false
})
var swiper2 = new Swiper('.swiper-container-2', {
	loop: true,
	speed: 2100,
	autoplay: {
		delay: 2000
	},
	autoplayDisableOnInteraction : false,
})
var swiper3 = new Swiper('.swiper-container-3', {
	loop: true,
	speed: 2000,
	autoplay: {
		delay: 2000
	},
	autoplayDisableOnInteraction : false,
})
var swiper4 = new Swiper('.swiper-container-4', {
	loop: true,
	speed: 2100,
	autoplay: {
		delay: 2000
	},
	autoplayDisableOnInteraction : false,
})
var swiper5 = new Swiper('.swiper-container-5', {
	loop: true,
	speed: 2100,
	autoplay: {
		delay: 2000
	},
	autoplayDisableOnInteraction : false,
})
var swiper6 = new Swiper('.swiper-container-6', {
	loop: true,
	speed: 2000,
	autoplay: {
		delay: 2000
	},
	autoplayDisableOnInteraction : false,
})
var swiper7 = new Swiper('.swiper-container-7', {
	loop: true,
	speed: 2100,
	autoplay: {
		delay: 2000
	},
	autoplayDisableOnInteraction : false,
})
var swiper8 = new Swiper('.swiper-container-8', {
	loop: true,
	speed: 2100,
	autoplay: {
		delay: 2000
	},
	autoplayDisableOnInteraction : false,
})

var swiper9 = new Swiper('.swiper-container-9', {
	loop: true,
	speed: 2000,
	autoplay: {
		delay: 2000
	},
	autoplayDisableOnInteraction : false,
})

var swiper10 = new Swiper('.swiper-container-10', {
	loop: true,
	speed: 2100,
	autoplay: {
		delay: 2000
	},
	autoplayDisableOnInteraction : false,
})

//播放音乐
$('#playMusic').click(function () {
	//alert($('#bgMusic').get(0).paused);
	if ($('#bgMusic').get(0).paused) {
		$('#bgMusic').get(0).play();
		$(this).text("music OFF");
	} else {
		$('#bgMusic').get(0).pause();
		$(this).text("music ON");
	}
})

//清除头部样式
function clearHeadStyle() {
	//清除头部样式

	$('.page_1_1_1').removeClass('scaleSmallToLarge');
	slideOutDownToUp($('.page_1_1_2').find('img'));
	slideOutUpToDown($('.page_1_1_3').find('img'));

	$('.page_2_1_1_1').css({
		left: '-20vw'
	});
	$('.page_2_1_1_2').css({
		right: '-50vw'
	});
	slideOutLeft($('.page_2_1_2_2'));
	$('.page_2_1_2_3').removeClass('twinkle');
	$('.page_2_1_2_4').css({
		opacity: 0
	});

	slideOutDownToUp($('.page_3_1_1').find('img'));
	$('.page_3_1_2').css({
		width: '0',
		'margin-left': '50%'
	}).find('img').css({
		left: 'calc(-100vw * 255 / 750)'
	});
	fadeIn($('.page_3_1_3 img').eq(0));

	slideOutUpToDown($('.page_4_1_0'));
	$('.page_4_1_2').css({
		right: 'calc(100vw * 18 / 750)',
		bottom: '0'
	})
	slideOutRight($('.page_4_1_3_1'));
	slideOutLeft($('.page_4_1_3_2'));

	slideOutDownToUp($('.page_5_1_2_1 img'));
	slideOutUpToDown($('.page_5_1_2_3 img'));
	// $('.page_5_1_3_2,.page_5_1_3_3').removeClass('roteWeel')
	// $('.page_5_1_3').css({
	// 	left: 'calc(100vw * 500 / 750)',
	// 	bottom: 'calc(100vw * 320 / 750)'
	// });




}

function swiperContainerHide() {
	$('.swiperContainer').css({
		opacity: 0,
		height: hd
	});
}

// 刷新滚动到顶部
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

//图片加载
var img = [],
	len = imgArr.length,
	flag = 0;
var startX, startY, moveEndX, moveEndY, X, Y;
for (var i = 0; i < len; i++) {
	img[i] = new Image();
	img[i].src = imgArr[i];
	img[i].onload = function () {
		flag++;
		var text = parseInt((flag / len).toFixed(2) * 100);
		$('.loadingContent section').text(text + '%')
		if (flag == len) {
			$('.loading').hide();
			catalogShow();
			// swiperContainerShow();
		}
	}
}

$(function () {


	//catalogShow();
	//swiperContainerShow();
	$('.coverImg,.titlePic').on('touchstart', function (e) {

		startX = e.originalEvent.changedTouches[0].pageX,
			startY = e.originalEvent.changedTouches[0].pageY;
	})
	$('.coverImg,.titlePic').on('touchend', function (e) {
		moveEndX = e.originalEvent.changedTouches[0].pageX,
			moveEndY = e.originalEvent.changedTouches[0].pageY,
			X = moveEndX - startX,
			Y = moveEndY - startY;
		//console.log(123,X);
		if (X < 0 && Math.abs(X) > Math.abs(Y)) {

			if (count == 1) {
				return;
			}
			count++;
			magLeft = magLeft - 0.68 * wd;
			$('.coverImg').css({
				'margin-left': magLeft
			});
			$('.coverMonth > img').attr('src', 'images/cover_arrow_right.png').css({
				width: wd * 79 / 750
			});
			$('.coverMonth > section').css({
				'padding-right': wd * 79 / 750 + 5
			});
			$('.titlePic').css({
				'margin-left': magLeft
			});
			slideOutLeft($('.titlePic_1'))
			slideInRight($('.titlePic_2'));
			inListCover();
		}
		if (X > 0 && Math.abs(X) > Math.abs(Y)) {
			if (count == 0) {
				return;
			}
			count--;
			magLeft = magLeft + 0.68 * wd;
			$('.coverImg').css({
				'margin-left': magLeft
			});
			$('.coverMonth > img').attr('src', 'images/cover_arrow.png').css({
				width: wd * 150 / 750
			});
			$('.coverMonth > section').css({
				'padding-right': wd * 150 / 750 + 5
			});
			$('.titlePic').css({
				'margin-left': magLeft
			});
			slideInLeft($('.titlePic_1'))
			slideOutRight($('.titlePic_2'));
			outListCover();
		}
	});

	$('.coverPic').click(function () {
		if (count == 1) {
			count--;
			magLeft = magLeft + 0.68 * wd;
			$('.coverImg').css({
				'margin-left': magLeft
			});
			$('.coverMonth > img').attr('src', 'images/cover_arrow.png').css({
				width: wd * 150 / 750
			});
			$('.coverMonth > section').css({
				'padding-right': wd * 150 / 750 + 5
			});
			$('.titlePic').css({
				'margin-left': magLeft
			});
			slideInLeft($('.titlePic_1'))
			slideOutRight($('.titlePic_2'));
			outListCover();
		} else {
			count++;
			magLeft = magLeft - 0.68 * wd;
			$('.coverImg').css({
				'margin-left': magLeft
			});
			$('.coverMonth > img').attr('src', 'images/cover_arrow_right.png').css({
				width: wd * 79 / 750
			});
			$('.coverMonth > section').css({
				'padding-right': wd * 79 / 750 + 5
			});
			$('.titlePic').css({
				'margin-left': magLeft
			});
			slideOutLeft($('.titlePic_1'))
			slideInRight($('.titlePic_2'));
			inListCover();
		}
	})
	//
	$('.page_3_7 .page_3_7_2_3').click(function () {
		clickBtn($(this), 'left');
	});
	$('.page_3_8 .page_3_7_2_3').click(function () {
		clickBtn($(this), 'right');
	});
	//	点击加好切换图片
	//	$('.par_2').click(function() {
	//		changeImg($(this))
	//	});
	//	$('.par_1').click(function(){
	//		changeImg($(this));
	//	})
	$('.page_3_9_1_1').click(function () {
		$(this).fadeOut().parent().find('.page_3_9_1_2').fadeIn();
	});
	$('.page_3_9_1_2').click(function () {
		$(this).fadeOut().parent().find('.page_3_9_1_1').fadeIn();
	})



	//目录
	$('.midContent').css({
		height: 815 / 750 * wd
	});
	$('.coverPic,.coverMonth').css({
		width: wd
	});
	$('.listCover').css({
		width: wd * 0.68
	});
	$('.listCover > section').css({
		height: 120 * wd / 750
	});
	$('.coverMonth > section').css({
		height: 56 / 750 * wd,
		'line-height': 56 / 750 * wd + 'px',
		'font-size': 50 / 750 * wd + 'px'
	});
	$('.coverMonth > img').css({
		width: wd * 150 / 750
	});
	$('.coverMonth > section').css({
		'padding-right': wd * 150 / 750 + 5
	});

	//目录点击

	$('.listCover section').click(function () {
		index = $(this).index();
		console.log(index);
		catalogHide();
	})

	//回目录

	$('.returnCatalog').click(function () {
		style = 1;
		swiperContainerHide();
		slideOutRight($('.coverMonth'));
		$('.volvo_title,.coverPic,.footerImg img').css({
			opacity: 0
		});
		catalogShow();
	});

});

function catalogShow() {
	$('.containerVolvo').show();
	magLeft = 0;
	if (style == 1) {
		console.log(111);
		magLeft = magLeft - 0.68 * wd;
		$('.coverImg').css({
			width: wd * 1.68,
			height: 815 / 750 * wd,
			'margin-left': magLeft
		});
		count = 1;

		setTimeout(function () {
			$('.volvo_title,.coverPic,.footerImg img').css({
				opacity: 1
			});
			inCatalog();
			inListCover();
		}, 900);
	} else {
		console.log(222);
		$('.coverImg').css({
			width: wd * 1.68,
			height: 815 / 750 * wd,
			'margin-left': magLeft
		});
		inCatalog();
	}
}

function catalogHide() {
	$('.containerVolvo').hide();
	outCatalog();
	clearHeadStyle();
	setTimeout(function () {
		swiperContainerShow();
		$('#bgMusic').get(0).play();
		$(this).text("music OFF");
	}, 300)

}

function changeImg(self) {
	var imgAdd = 'images/page_3_20.png',
		imgReduce = 'images/page_3_16_1.png';
	var imgSrc = self.attr('src');
	if (imgSrc == imgAdd) {
		self.parent().fadeOut().parent().find('.page_3_9_1_2').fadeIn();
	} else {
		self.parent().fadeOut().parent().find('.page_3_9_1_1').fadeIn();
	}
}

//目录载入
function inCatalog() {
	setTimeout(function () {
		fadeIn($('.titlePic'));
	}, 300);
	setTimeout(function () {
		slideInLeft($('.blackLine'));
	}, 500);
	setTimeout(function () {
		fadeIn($('.webSite'));
	}, 700);
	setTimeout(function () {
		slideInRight($('.coverMonth'));
	}, 900);
	setTimeout(function () {
		fadeIn($('.footerImg'));
	}, 1200);
}
//列表载入
function inListCover() {
	$('.listCover').css({
		opacity: 1
	});
	setTimeout(function () {
		slideInRight($('.listCover_1'));
	}, 300);
	setTimeout(function () {
		slideInRight($('.listCover_2'));
	}, 500);
	setTimeout(function () {
		slideInRight($('.listCover_3'));
	}, 700);
	setTimeout(function () {
		slideInRight($('.listCover_4'));
	}, 900);
	setTimeout(function () {
		slideInRight($('.listCover_5'));
	}, 1100);
	setTimeout(function () {
		fadeIn($('.coverFont'))
	}, 1300)
}
//列表消失
function outListCover() {
	$('.listCover').css({
		opacity: 0
	});
	slideOutRight($('.listCover_1'));
	slideOutRight($('.listCover_2'));
	slideOutRight($('.listCover_3'));
	slideOutRight($('.listCover_4'));
	slideOutRight($('.listCover_5'));
	fadeOut($('.coverFont'));
}

function outCatalog() {
	fadeOut($('.titlePic'));
	slideOutLeft($('.blackLine'));
	fadeOut($('.webSite'));
	slideOutRight($('.coverMonth'));
	fadeOut($('.footerImg'));
	outListCover();
}

function swiperContainerShow() {
	$('.swiperContainer').css({
		opacity: 1,
		height: 'auto'
	});
	clearHeadStyle();
	$('.swiper-pagination span').eq(index).click();
	pages();
}

function swiperContainerHide() {
	$('.swiperContainer').css({
		opacity: 0,
		height: hd
	});
}

//点击事件
function clickBtn(self, position) {
	var imgsrc = self.parent().find('.page_3_7_2_3').attr('src');
	var imgAdd = "images/page_3_12.png",
		imgReduce = "images/page_3_16.png";
	//console.log(imgsrc, imgsrc == imgAdd);
	if (imgsrc == imgAdd) {
		self.parent().css({
			width: wd * 443 / 750
		});
		self.parent().find('.page_3_7_2_3').attr('src', imgReduce);
		if (position == 'left') {
			self.parent().parent().find('.page_3_7_1 img').css({
				left: wd * 80 / 750
			});

			setTimeout(function () {
				slideInLeft(self.parent().find('.page_3_7_2_1'));
			}, 300);
		} else {
			self.parent().parent().find('.page_3_7_1 img').css({
				left: -wd * 80 / 750
			});
			setTimeout(function () {
				slideInRight(self.parent().find('.page_3_7_2_1'));
			}, 300);
		}
	} else {
		self.parent().parent().find('.page_3_7_1 img').css({
			left: 0
		});
		self.parent().css({
			width: wd * 241 / 750
		});
		self.parent().find('.page_3_7_2_3').attr('src', imgAdd);
		if (position == 'left') {
			slideOutLeft(self.parent().find('.page_3_7_2_1'));
		} else {
			slideOutRight(self.parent().find('.page_3_7_2_1'));
		}

	}
}
$(window).scroll(function () {
	scroTop = $(window).scrollTop();
	pages();
})

function pages() {
	if (page == 0) {
		$('.page_1_1_1').addClass('scaleSmallToLarge');
		slideInDownToUp($('.page_1_1_2').find('img'));
		slideInUpToDown($('.page_1_1_3').find('img'));

		var img1 = $('.page_1_2');
		var top1 = img1.offset().top;
		var img2 = $('.page_1_3');
		var top2 = img2.offset().top;
		var img3 = $('.page_1_4');
		var top3 = img3.offset().top;
		var img4 = $('.page_1_6');
		var top4 = img4.offset().top;
		var img5 = $('.page_1_7');
		var top5 = img5.offset().top;
		var img6 = $('.page_1_8');
		var top6 = img6.offset().top;
		var img7 = $('.page_1_10');
		var top7 = img7.offset().top;
		var img8 = $('.page_1_11');
		var top8 = img8.offset().top;
		var img9 = $('.page_1_12');
		var top9 = img9.offset().top;
		var img10 = $('.page_1_14');
		var top10 = img10.offset().top;
		var img11 = $('.page_1_15');
		var top11 = img11.offset().top;

		var img12 = $('.page_1_16');
		var top12 = img12.offset().top;
		var img13 = $('.page_1_18');
		var top13 = img13.offset().top;
		var img14 = $('.page_1_19');
		var top14 = img14.offset().top;

		var img15 = $('.page_1_20');
		var top15 = img15.offset().top;


		if (scroTop > 50 && scroTop < top1 + hd - 500) {
			img1.find('img.page_1_2_2').css({
				transform: 'scale(1)',
				opacity: 1
			});
			setTimeout(() => {
				fadeIn(img1.find('img.page_1_2_1'));
				fadeIn(img1.find('img.page_1_2_3'));
			}, 2000);
		} else {
			fadeOut(img1.find('img.page_1_2_1'));
			fadeOut(img1.find('img.page_1_2_3'));
			img1.find('img.page_1_2_2').css({
				transform: 'scale(3)',
				opacity: 0
			});
		}

		if (scroTop > top2 - hd && scroTop < top2 + hd - 200) {
			slideInLeft(img2.find('.page_1_3_2'));
			slideInRight(img2.find('.page_1_3_1'));
		} else {
			slideOutLeft(img2.find('.page_1_3_2'));
			slideOutRight(img2.find('.page_1_3_1'));
		}

		if (scroTop > top3 - hd + 60 && scroTop < top3 + hd - 600) {
			slideInLeft(img3);
		} else {
			slideOutLeft(img3);
		}

		if (scroTop > top4 - hd + 60 && scroTop < top4 + hd - 500) {
			slideInDownToUp(img4.find('.page_1_6_2'));
			slideInUpToDown(img4.find('.page_1_6_1'));
			setTimeout(() => {
				fadeIn(img4.find('.page_1_6_3'));
			}, 1000)
		} else {
			slideOutDownToUp(img4.find('.page_1_6_2'));
			slideOutUpToDown(img4.find('.page_1_6_1'));
			fadeOut(img4.find('.page_1_6_3'));
		}

		if (scroTop > top5 - hd + 60 && scroTop < top5 + hd - 500) {
			fadeIn(img5);
		} else {
			fadeOut(img5);
		}

		if (scroTop > top6 - hd + 60 && scroTop < top6 + hd - 600) {
			slideInLeft(img6);
		} else {
			slideOutLeft(img6);
		}

		if (scroTop > top7 - hd + 60 && scroTop < top7 + hd - 500) {
			slideInDownToUp(img7.find('.page_1_6_2'));
			slideInUpToDown(img7.find('.page_1_6_1'));
			setTimeout(() => {
				fadeIn(img7.find('.page_1_6_3'));
			}, 1000)
		} else {
			slideOutDownToUp(img7.find('.page_1_6_2'));
			slideOutUpToDown(img7.find('.page_1_6_1'));
			fadeOut(img7.find('.page_1_6_3'));
		}

		if (scroTop > top8 - hd + 60 && scroTop < top8 + hd - 500) {
			fadeIn(img8);
		} else {
			fadeOut(img8);
		}

		if (scroTop > top9 - hd + 60 && scroTop < top9 + hd - 600) {
			slideInLeft(img9);
		} else {
			slideOutLeft(img9);
		}

		if (scroTop > top10 - hd + 60 && scroTop < top10 + hd - 500) {
			slideInDownToUp(img10.find('.page_1_6_2'));
			slideInUpToDown(img10.find('.page_1_6_1'));
			setTimeout(() => {
				fadeIn(img10.find('.page_1_6_3'));
			}, 1000)
		} else {
			slideOutDownToUp(img10.find('.page_1_6_2'));
			slideOutUpToDown(img10.find('.page_1_6_1'));
			fadeOut(img10.find('.page_1_6_3'));
		}

		if (scroTop > top11 - hd + 60 && scroTop < top11 + hd - 500) {
			fadeIn(img11);
		} else {
			fadeOut(img11);
		}

		if (scroTop > top12 - hd + 60 && scroTop < top12 + hd - 600) {
			slideInLeft(img12);
		} else {
			slideOutLeft(img12);
		}

		if (scroTop > top13 - hd + 60 && scroTop < top13 + hd - 500) {
			slideInDownToUp(img13.find('.page_1_6_2'));
			slideInUpToDown(img13.find('.page_1_6_1'));
			setTimeout(() => {
				fadeIn(img13.find('.page_1_6_3'));
			}, 1000)
		} else {
			slideOutDownToUp(img13.find('.page_1_6_2'));
			slideOutUpToDown(img13.find('.page_1_6_1'));
			fadeOut(img13.find('.page_1_6_3'));
		}

		if (scroTop > top14 - hd + 60 && scroTop < top14 + hd - 500) {
			fadeIn(img14);
		} else {
			fadeOut(img14);
		}

		if (scroTop > top15 - hd + 60 && scroTop < top15 + hd - 500) {
			zoomInPage(img15.find('.page_1_20_1'));
		} else {
			zoomOutPage(img15.find('.page_1_20_1'));
		}
		sct1 = scroTop;


	}
	if (page == 1) {
		$('.page_2_1_1_1').css({
			left: '120vw'
		});
		$('.page_2_1_1_2').css({
			right: '120vw'
		});
		setTimeout(function () {
			slideInLeft($('.page_2_1_2_2'));
		}, 300);
		setTimeout(function () {
			$('.page_2_1_2_3').addClass('twinkle');
		}, 1000)
		setTimeout(function () {
			$('.page_2_1_2_4').css({
				opacity: 1
			});
		}, 2600)

		var img1 = $('.page_2_2');
		var top1 = img1.offset().top;
		var img2 = $('.page_2_4');
		var top2 = img2.offset().top;
		var img3 = $('.page_2_5');
		var top3 = img3.offset().top;
		var img4 = $('.page_2_7');
		var top4 = img4.offset().top;
		var img5 = $('.page_2_8');
		var top5 = img5.offset().top;
		var img6 = $('.page_2_10');
		var top6 = img6.offset().top;
		var img7 = $('.page_2_11');
		var top7 = img7.offset().top;
		var img8 = $('.page_2_13');
		var top8 = img8.offset().top;
		var img9 = $('.page_2_14');
		var top9 = img9.offset().top;

		if (scroTop > 0 && scroTop < top1 + hd - 700) {
			img1.find('.page_2_2_1').css({
				height: 'calc(100vw * 31 / 750)',
				'margin-top': 0
			}).find('img').css({
				top: 0
			});
			img1.find('.page_2_2_2').css({
				width: 'calc(100vw * 653 / 750)'
			});
		} else {
			img1.find('.page_2_2_1').css({
				height: '0',
				'margin-top': 'calc(100vw * 16 / 750)'
			}).find('img').css({
				top: 'calc(-100vw * 16 / 750)'
			});
			img1.find('.page_2_2_2').css({
				width: '0'
			});
		}

		if (scroTop > top2 - hd && scroTop < top2 + hd - 500) {
			fadeIn(img2);
		} else {
			fadeOut(img2);
		}

		if (scroTop > top3 - hd && scroTop < top3 + hd - 700) {
			img3.find('.page_2_2_1').css({
				height: 'calc(100vw * 31 / 750)',
				'margin-top': 0
			}).find('img').css({
				top: 0
			});
			img3.find('.page_2_2_2').css({
				width: 'calc(100vw * 653 / 750)'
			});
		} else {
			img3.find('.page_2_2_1').css({
				height: '0',
				'margin-top': 'calc(100vw * 16 / 750)'
			}).find('img').css({
				top: 'calc(-100vw * 16 / 750)'
			});
			img3.find('.page_2_2_2').css({
				width: '0'
			});
		}

		if (scroTop > top4 - hd && scroTop < top4 + hd - 200) {
			fadeIn(img4);
		} else {
			fadeOut(img4);
		}

		if (scroTop > top5 - hd && scroTop < top5 + hd - 700) {
			img5.find('.page_2_2_1').css({
				height: 'calc(100vw * 31 / 750)',
				'margin-top': 0
			}).find('img').css({
				top: 0
			});
			img5.find('.page_2_2_2').css({
				width: 'calc(100vw * 653 / 750)'
			});
		} else {
			img5.find('.page_2_2_1').css({
				height: '0',
				'margin-top': 'calc(100vw * 16 / 750)'
			}).find('img').css({
				top: 'calc(-100vw * 16 / 750)'
			});
			img5.find('.page_2_2_2').css({
				width: '0'
			});
		}

		if (scroTop > top6 - hd + 100 && scroTop < top6 + hd - 500) {
			fadeIn(img6);
		} else {
			fadeOut(img6);
		}

		if (scroTop > top7 - hd && scroTop < top7 + hd - 700) {
			// console.log(1111);
			img7.find('.page_2_2_1').css({
				height: 'calc(100vw * 31 / 750)',
				'margin-top': 0
			}).find('img').css({
				top: 0
			});
			img7.find('.page_2_2_2').css({
				width: 'calc(100vw * 653 / 750)'
			});
		} else {
			img7.find('.page_2_2_1').css({
				height: '0',
				'margin-top': 'calc(100vw * 16 / 750)'
			}).find('img').css({
				top: 'calc(-100vw * 16 / 750)'
			});
			img7.find('.page_2_2_2').css({
				width: '0'
			});
		}

		if (scroTop > top8 - hd && scroTop < top8 + hd - 600) {
			fadeIn(img8);
		} else {
			fadeOut(img8);
		}

		if (scroTop > top9 - hd + 200 && scroTop < top9 + hd) {
			img9.find('.page_2_14_2').addClass('twinkle1');
		} else {
			img9.find('.page_2_14_2').removeClass('twinkle1');
		}
		sct2 = scroTop;

	}
	if (page == 2) {
		slideInDownToUp($('.page_3_1_1').find('img'));
		$('.page_3_1_2').css({
			width: '100%',
			'margin-left': '0'
		}).find('img').css({
			left: '0'
		});
		setTimeout(() => {
			fadeOut($('.page_3_1_3 img').eq(0));
		}, 1000)

		var img1 = $('.page_3_2');
		var top1 = img1.offset().top;
		var img2 = $('.page_3_3');
		var top2 = img2.offset().top;
		var img3 = $('.page_3_4');
		var top3 = img3.offset().top;
		var img4 = $('.page_3_5');
		var top4 = img4.offset().top;
		var img5 = $('.page_3_6');
		var top5 = img5.offset().top;
		var img6 = $('.page_3_7');
		var top6 = img6.offset().top;
		var img7 = $('.page_3_8');
		var top7 = img7.offset().top;
		var img8 = $('.page_3_9');
		var top8 = img8.offset().top;

		if (scroTop > 50 && scroTop < top1 + hd - 600) {
			fadeIn(img1);
		} else {
			fadeOut(img1);
		}

		if (scroTop > top2 - hd + 200 && scroTop < top2 + hd - 500) {
			// console.log(1,top2,hd);
			slideInRight(img2.find('.page_3_3_1').find('img'));
			slideInLeft(img2.find('.page_3_3_2'));
		} else {
			// console.log(2,scroTop);
			slideOutRight(img2.find('.page_3_3_1').find('img'));
			slideOutLeft(img2.find('.page_3_3_2'));
		}

		if (scroTop > top2 - hd + 200 && scroTop < top2 + hd - 200) {
			slideInLeft(img2.find('.page_3_3_3').find('img'));
		} else {
			slideOutLeft(img2.find('.page_3_3_3').find('img'));
		}

		if (scroTop > top3 - hd + 200 && scroTop < top3 + hd - 500) {
			// console.log(1,top2,hd);
			slideInLeft(img3.find('.page_3_3_1').find('img'));
			slideInRight(img3.find('.page_3_3_2'));
		} else {
			// console.log(2,scroTop);
			slideOutLeft(img3.find('.page_3_3_1').find('img'));
			slideOutRight(img3.find('.page_3_3_2'));
		}

		if (scroTop > top3 - hd + 200 && scroTop < top3 + hd - 200) {
			slideInRight(img3.find('.page_3_3_3').find('img'));
		} else {
			slideOutRight(img3.find('.page_3_3_3').find('img'));
		}

		if (scroTop > top4 - hd && scroTop < top4 + hd - 600) {
			// console.log(1,top2,hd);
			slideInRight(img4.find('.page_3_3_1').find('img'));
			slideInLeft(img4.find('.page_3_3_2'));
		} else {
			// console.log(2,scroTop);
			slideOutRight(img4.find('.page_3_3_1').find('img'));
			slideOutLeft(img4.find('.page_3_3_2'));
		}

		if (scroTop > top5 - hd && scroTop < top5 + hd - 550) {
			// console.log(1,top2,hd);
			img5.find('.page_3_6_2').css({
				'transform': 'rotate(360deg)',
				opacity:0
			});
			slideInLeft(img5.find('.page_3_6_1'));
		} else {
			// console.log(2,scroTop);
			img5.find('.page_3_6_2').css({
				'transform': 'rotate(0deg)',
				opacity:1
			});
			slideOutLeft(img5.find('.page_3_6_1'));
			// fadeIn(img5.find('.page_3_6_2'));
		}

		if (scroTop > top6 - hd && scroTop < top6 + hd - 500) {
			// console.log(1,top2,hd);
			img6.find('.page_3_6_2').css({
				'transform': 'rotate(360deg)',
				opacity:0
			});
			// setTimeout(() => {
			// 	fadeOut(img6.find('.page_3_6_2'));
			// },1500)
			slideInRight(img6.find('.page_3_6_1'));
		} else {
			// console.log(2,scroTop);
			img6.find('.page_3_6_2').css({
				'transform': 'rotate(0deg)',
				opacity:1				
			});
			// fadeIn(img6.find('.page_3_6_2'));
			slideOutRight(img6.find('.page_3_6_1'));
		}

		if (scroTop > top7 - hd && scroTop < top7 + hd - 550) {
			// console.log(1,top2,hd);
			img7.find('.page_3_6_2').css({
				'transform': 'rotate(360deg)',
				opacity:0
			});
			// setTimeout(() => {
			// 	fadeOut(img7.find('.page_3_6_2'));
			// },1500)
			fadeIn(img7.find('.page_3_6_1'));
		} else {
			// console.log(2,scroTop);
			img7.find('.page_3_6_2').css({
				'transform': 'rotate(0deg)',
				opacity:1
			});
			// fadeIn(img7.find('.page_3_6_2'));
			fadeOut(img7.find('.page_3_6_1'));
		}

		if (scroTop > top8 - hd && scroTop < top8 + hd - 500) {
			// console.log(1,top2,hd);
			img8.find('.page_3_6_3').addClass('mr');
			fadeIn(img8.find('.page_3_6_1'));
		} else {
			// console.log(2,scroTop);
			img8.find('.page_3_6_3').removeClass('mr');
			fadeOut(img8.find('.page_3_6_1'));
		}
		sct3 = scroTop;


	}
	if (page == 3) {
		slideInUpToDown($('.page_4_1_0'));
		setTimeout(function () {
			$('.page_4_1_2').css({
				right: 'calc(100vw * 6 / 750)',
				bottom: 'calc(100vw * 12 / 750)'
			})
		}, 1000)
		setTimeout(function () {
			slideInRight($('.page_4_1_3_1'));
			slideInLeft($('.page_4_1_3_2'));
		}, 2000);

		var img1 = $('.page_4_2');
		var top1 = img1.offset().top;
		var img2 = $('.page_4_3');
		var top2 = img2.offset().top;
		var img3 = $('.page_4_4');
		var top3 = img3.offset().top;
		var img4 = $('.page_4_5');
		var top4 = img4.offset().top;
		var img5 = $('.page_4_6');
		var top5 = img5.offset().top;

		if (scroTop > 50 && scroTop < top1 + hd - 700) {
			// console.log(1,top2,hd);
			fadeIn(img1);
		} else {
			// console.log(2,scroTop);
			fadeOut(img1);
		}

		if (scroTop > 100 && scroTop < top2 + hd - 300) {
			img2.find('.page_4_3_1').css({
				width: 'calc(100vw * 652 / 750)',
				'margin-left': 0
			}).find('img').css({
				left: '0',
				transform: 'scale(1)'
			});

		} else {
			img2.find('.page_4_3_1').css({
				width: '0',
				'margin-left': 'calc(100vw * 326 / 750)'
			}).find('img').css({
				left: 'calc(-100vw * 326 / 750)',
				transform: 'scale(1.2)'
			});
		}

		if (scroTop > 400 && scroTop < top2 + hd - 100) {
			img2.find('.page_4_3_3').css({
				height: 'calc(100vw * 665 / 750)'
			});
			setTimeout(function () {
				slideInLeft(img2.find('.page_4_3_2 img'));
			}, 1000)
		} else {
			slideOutLeft(img2.find('.page_4_3_2 img'));
			$('.page_4_3_3').css({
				height: '0'
			});
		}

		if (scroTop > top3 - hd && scroTop < top3 + hd - 600) {
			slideInLeft(img3.find('.page_4_4_2 img'));
			slideInRight(img3.find('.page_4_4_1'));

		} else {
			slideOutLeft(img3.find('.page_4_4_2 img'));
			slideOutRight(img3.find('.page_4_4_1'));
		}

		if (scroTop > top4 - hd && scroTop < top4 + hd - 500) {
			slideInRight(img4.find('.page_4_5_2'));
			setTimeout(function () {
				img4.find('.page_4_5_1').css({
					left: 0,
					top: 'calc(100vw * 30 / 750)'
				});
			}, 1000)

		} else {
			slideOutRight(img4.find('.page_4_5_2'));
			img4.find('.page_4_5_1').css({
				left: '5.7%',
				top: '0'
			});
		}

		if (scroTop > top5 - hd && scroTop < top5 + hd) {
			// console.log(1);
			img5.find('.page_4_6_1').css({
				width: wd,
				'margin-left': 0
			}).find('img').css({
				left: '0',
				transform: 'scale(1)'
			});
		} else {
			img5.find('.page_4_6_1').css({
				width: 0,
				'margin-left': wd / 2
			}).find('img').css({
				left: -wd / 2,
				transform: 'scale(1.3)'
			});
		}

		if (scroTop > top5 - hd + 200 && scroTop < top5 + hd) {
			slideInRight(img5.find('.page_4_6_2 img'));
		} else {
			slideOutRight(img5.find('.page_4_6_2 img'));
		}
		sct4 = scroTop;


	}
	if (page == 4) {
		slideInDownToUp($('.page_5_1_2_1 img'));
		slideInUpToDown($('.page_5_1_2_3 img'));
		// $('.page_5_1_3_2,.page_5_1_3_3').addClass('roteWeel')
		// $('.page_5_1_3').css({
		// 	left: 'calc(100vw * 12 / 750)',
		// 	bottom: 'calc(100vw * 440 / 750)'
		// });

		var img1 = $('.page_5_2');
		var top1 = img1.offset().top;
		var img2 = $('.page_5_3');
		var top2 = img2.offset().top;
		var img3 = $('.page_5_4');
		var top3 = img3.offset().top;
		var img4 = $('.page_5_5');
		var top4 = img4.offset().top;
		var img5 = $('.page_5_6');
		var top5 = img5.offset().top;
		var img6 = $('.page_5_7');
		var top6 = img6.offset().top;
		var img7 = $('.page_5_8');
		var top7 = img7.offset().top;
		var img8 = $('.page_5_9');
		var top8 = img8.offset().top;
		var img9 = $('.page_5_10');
		var top9 = img9.offset().top;
		var img10 = $('.page_5_11');
		var top10 = img10.offset().top;

		if (scroTop > 100 && scroTop < top1 + hd - 600) {
			slideInRight(img1.find('.page_5_2_1'));
			slideInRight(img1.find('.page_5_2_3 img'));
			slideInLeft(img1.find('.page_5_2_2 img'));
		} else {
			slideOutRight(img1.find('.page_5_2_1'));
			slideOutRight(img1.find('.page_5_2_3 img'));
			slideOutLeft(img1.find('.page_5_2_2 img'));
		}

		if (scroTop > top2 - hd && scroTop < top2 + hd - 600) {
			slideInRight(img2);
		} else {
			slideOutRight(img2);
		}

		if (scroTop > top3 - hd && scroTop < top3 + hd - 500) {
			zoomInPage(img3);
		} else {
			zoomOutPage(img3);
		}

		if (scroTop > top4 - hd && scroTop < top4 + hd - 650) {
			slideInLeft(img4.find('.page_5_5_1'));
		} else {
			slideOutLeft(img4.find('.page_5_5_1'));
		}

		if (scroTop > top5 - hd && scroTop < top5 + hd - 300) {
			zoomInPage(img5);
		} else {
			zoomOutPage(img5);
		}

		if (scroTop > top6 - hd && scroTop < top6 + hd - 650) {
			slideInRight(img6.find('.page_5_5_1'));
		} else {
			slideOutRight(img6.find('.page_5_5_1'));
		}

		if (scroTop > top7 - hd && scroTop < top7 + hd - 300) {
			zoomInPage(img7);
		} else {
			zoomOutPage(img7);
		}

		if (scroTop > top8 - hd && scroTop < top8 + hd - 650) {
			slideInLeft(img8.find('.page_5_5_1'));
		} else {
			slideOutLeft(img8.find('.page_5_5_1'));
		}

		if (scroTop > top9 - hd && scroTop < top9 + hd - 200) {
			zoomInPage(img9);
		} else {
			zoomOutPage(img9);
		}

		if (scroTop > top10 - hd && scroTop < top10 + hd) {
			fadeIn(img10.find('.page_5_11_1'));
			slideInDownToUp(img10.find('.page_5_11_2'));
		} else {
			fadeOut(img10.find('.page_5_11_1'));
			slideOutDownToUp(img10.find('.page_5_11_2'));
		}
		sct5 = scroTop;

	}



}

//由上向下移动
function slideInUpToDown(img) {
	img.css({
		opacity: 1
	}).addClass('slideInDown').removeClass('slideOutUp');
}

function slideOutUpToDown(img) {
	img.css({
		opacity: 0
	}).addClass('slideOutUp').removeClass('slideInDown');
}

//由下向上移动
function slideInDownToUp(img) {
	img.css({
		opacity: 1
	}).addClass('slideInUp').removeClass('slideOutDown');
}

function slideOutDownToUp(img) {
	img.css({
		opacity: 0
	}).addClass('slideOutDown').removeClass('slideInUp');
}

//标题滑入、滑出
function inTitle(img) {
	img.find('.dec_1_5_1').css({
		opacity: 1
	});
	img.find('.dec_1_5_2').css({
		opacity: 1
	}).removeClass('slideOutLeft').addClass('slideInLeft');
}

function outTitle(img) {
	img.find('.dec_1_5_1').css({
		opacity: 0
	});
	img.find('.dec_1_5_2').css({
		opacity: 0
	}).removeClass('slideInLeft').addClass('slideOutLeft');
}

//内容由上向下进入、消失
function zoomInPage(img) {
	setTimeout(function () {
		img.addClass('zoomUpToDown').css({
			opacity: 1
		}).find('img').addClass('imgUpToDown');
	}, 500);
}

function zoomOutPage(img) {
	img.removeClass('zoomUpToDown').css({
		opacity: 0
	}).find('img').removeClass('imgUpToDown');
}

//左侧进入，左侧出去
function slideInLeft(img) {
	img.css({
		opacity: 1
	}).addClass('slideInLeft').removeClass('slideOutLeft');
}

function slideOutLeft(img) {
	img.addClass('slideOutLeft').removeClass('slideInLeft');
}

//右侧进入，右侧离开
function slideInRight(img) {
	img.addClass('slideInRight').css('opacity', 1).removeClass('slideOutRight')
}

function slideOutRight(img) {
	img.addClass('slideOutRight').removeClass('slideInRight')
}

//淡入淡出
function fadeIn(e) {
	e.removeClass('fadeOut').addClass('fadeIn');
}

function fadeOut(e) {
	e.removeClass('fadeIn').addClass('fadeOut');
}

//图片轮播
function myFadeIn(img) {
	img.css('opacity', 1).removeClass('fadeOut').addClass('fadeIn');
}

function myFadeOut(img) {
	img.css('opacity', 0).addClass('fadeOut').removeClass('fadeIn');
}

function carouselImg(img, n, timer, times) {
	var flag = 0;
	var z_index = 0;
	timer = setInterval(function () {
		flag++;
		z_index++;
		if (flag >= n) {
			flag = 0;
		}

		// 移除上 上张图片class
		if (flag < n - 1) {
			img.find('img').eq(flag + 1).removeClass('slideInRight');
		} else {
			img.find('img').eq(0).removeClass('slideInRight');
		}

		// 更改入场img层级为最高，添加入场动画
		img.find('img').eq(flag).css({
			'opacity': 1,
			'z-index': z_index
		}).addClass('slideInRight');

	}, times);

}
//放大缩小显示
function enlargeImg(img) {
	img.removeClass('narrowImg').css({
		opacity: 1
	}).addClass('enlargeImg');
}

function enLargeAndFadeImg(img) {
	img.removeClass('narrowAndFadeImg').addClass('enLargeAndFadeImg');
}

function enLargeAndFadeOutImg(e) {
	e.removeClass('enLargeAndFadeImg').addClass('narrowAndFadeImg');
}

function scaleSmallToLarge(e) {
	e.addClass('scaleSmallToLarge');
}

function scaleLargeToSmall(e) {
	e.removeClass('scaleSmallToLarge')
}

function narrowImg(img) {
	img.removeClass('enlargeImg').css({
		opacity: 0
	}).addClass('narrowImg');
}

function enImg(img) {
	img.removeClass('naImg').addClass('enImg');
}

function naImg(img) {
	img.removeClass('enImg').addClass('naImg');
}