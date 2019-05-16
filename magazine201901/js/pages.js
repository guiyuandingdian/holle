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
	onTransitionEnd: function(swiper) {
		page = swiper.activeIndex;
		clearHeadStyle();

		if(page == 0) {
			window.scrollTo(100, sct1);
		} else if(page == 1) {
			window.scrollTo(100, sct2);
		} else if(page == 2) {
			window.scrollTo(100, sct3);
		} else if(page == 3) {
			window.scrollTo(100, sct4);
		} else if(page == 4) {
			window.scrollTo(100, sct5);
		}

		pages();

	}
})

//清除头部样式
function clearHeadStyle() {
	//清除头部样式
	//page1
	$('.page_1_0_scale').css({
		opacity: 0
	});
	narrowImg($('.page_1_1_scale'));
	slideOutDownToUp($('.page_1_1_2'));
	slideOutUpToDown($('.page_1_1_4'))
	fadeOut($('.page_1_1_3'));
	//page2
	slideOutRight($('.page_2_1_2'));
	slideOutUpToDown($('.page_2_1_3').find('img'));

	//page3
	slideOutLeft($('.page_3_1_3 img'));
	fadeIn($('.page_3_1_2').find('.page_3_1_2_1'));

	//page4
	fadeOut($('.page_4_1_1_1'));
	fadeOut($('.page_4_1_1_2'));
	fadeOut($('.page_4_1_1_3'));
	slideOutLeft($('.page_4_1_2_2'));
	slideOutLeft($('.page_4_1_3_3 img'));
	slideOutRight($('.page_4_1_3_1 img'));
	slideOutUpToDown($('.page_4_1_2_1'));
	slideOutDownToUp($('.page_4_1_3_2'));

	//page5
	slideOutLeft($('.page_5_1_3_1'));
	slideOutDownToUp($('.page_5_1_3_2'));
}

var img = [],
	len = imgArr.length,
	flag = 0;
var startX, startY, moveEndX, moveEndY, X, Y;
for(var i = 0; i < len; i++) {
	img[i] = new Image();
	img[i].src = imgArr[i];
	img[i].onload = function() {
		flag++;
		var text=parseInt((flag/len).toFixed(2)*100);
		$('.loadingContent section').text(text+'%')
		if(flag == len) {
			$('.loading').hide();
			catalogShow();
		}
	}
}

function catalogShow() {
	$('.containerVolvo').show();
	magLeft = 0;
	if(style == 1) {
		console.log(111);
		magLeft = magLeft - 0.68 * wd;
		$('.coverImg').css({
			width: wd * 1.68,
			height: 815 / 750 * wd,
			'margin-left': magLeft
		});
		count = 1;

		setTimeout(function() {
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
	setTimeout(function() {
		swiperContainerShow();
	}, 300)

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

$(function() {
	console.log(12, '1');
	$('.coverImg,.titlePic').on('touchstart', function(e) {

		startX = e.originalEvent.changedTouches[0].pageX,
			startY = e.originalEvent.changedTouches[0].pageY;
	})
	$('.coverImg,.titlePic').on('touchend', function(e) {
		moveEndX = e.originalEvent.changedTouches[0].pageX,
			moveEndY = e.originalEvent.changedTouches[0].pageY,
			X = moveEndX - startX,
			Y = moveEndY - startY;
		//console.log(123,X);
		if(X < 0 && Math.abs(X) > Math.abs(Y)) {

			if(count == 1) {
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
		if(X > 0 && Math.abs(X) > Math.abs(Y)) {
			if(count == 0) {
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

	$('.coverPic').click(function() {
		if(count == 1) {
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
	$('.page_3_7 .page_3_7_2_3').click(function() {
		clickBtn($(this), 'left');
	});
	$('.page_3_8 .page_3_7_2_3').click(function() {
		clickBtn($(this), 'right');
	});
	//	点击加好切换图片
	//	$('.par_2').click(function() {
	//		changeImg($(this))
	//	});
	//	$('.par_1').click(function(){
	//		changeImg($(this));
	//	})
	$('.page_3_9_1_1').click(function() {
		$(this).fadeOut().parent().find('.page_3_9_1_2').fadeIn();
	});
	$('.page_3_9_1_2').click(function() {
		$(this).fadeOut().parent().find('.page_3_9_1_1').fadeIn();
	})

	function changeImg(self) {
		var imgAdd = 'images/page_3_20.png',
			imgReduce = 'images/page_3_16_1.png';
		var imgSrc = self.attr('src');
		if(imgSrc == imgAdd) {
			self.parent().fadeOut().parent().find('.page_3_9_1_2').fadeIn();
		} else {
			self.parent().fadeOut().parent().find('.page_3_9_1_1').fadeIn();
		}
	}

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

	$('.listCover section').click(function() {
		index = $(this).index();
		catalogHide();
	})

	//回目录

	$('.returnCatalog').click(function() {
		style = 1;
		swiperContainerHide();
		slideOutRight($('.coverMonth'));
		$('.volvo_title,.coverPic,.footerImg img').css({
			opacity: 0
		});
		catalogShow();
	});

});

//目录载入
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
		slideInRight($('.coverMonth'));
	}, 900);
	setTimeout(function() {
		fadeIn($('.footerImg'));
	}, 1200);
}
//列表载入
function inListCover() {
	$('.listCover').css({
		opacity: 1
	});
	setTimeout(function() {
		slideInRight($('.listCover_1'));
	}, 300);
	setTimeout(function() {
		slideInRight($('.listCover_2'));
	}, 500);
	setTimeout(function() {
		slideInRight($('.listCover_3'));
	}, 700);
	setTimeout(function() {
		slideInRight($('.listCover_4'));
	}, 900);
	setTimeout(function() {
		slideInRight($('.listCover_5'));
	}, 1100);
	setTimeout(function() {
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

//点击事件
function clickBtn(self, position) {
	var imgsrc = self.parent().find('.page_3_7_2_3').attr('src');
	var imgAdd = "images/page_3_12.png",
		imgReduce = "images/page_3_16.png";
	//console.log(imgsrc, imgsrc == imgAdd);
	if(imgsrc == imgAdd) {
		self.parent().css({
			width: wd * 443 / 750
		});
		self.parent().find('.page_3_7_2_3').attr('src', imgReduce);
		if(position == 'left') {
			self.parent().parent().find('.page_3_7_1 img').css({
				left: wd * 80 / 750
			});

			setTimeout(function() {
				slideInLeft(self.parent().find('.page_3_7_2_1'));
			}, 300);
		} else {
			self.parent().parent().find('.page_3_7_1 img').css({
				left: -wd * 80 / 750
			});
			setTimeout(function() {
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
		if(position == 'left') {
			slideOutLeft(self.parent().find('.page_3_7_2_1'));
		} else {
			slideOutRight(self.parent().find('.page_3_7_2_1'));
		}

	}
}
$(window).scroll(function() {
	scroTop = $(window).scrollTop();
	pages();
})

function pages() {
	if(page == 0) {
		//头图
		enlargeImg($('.page_1_1_scale'));
		setTimeout(function() {
			$('.page_1_0_scale').css({
				opacity: 1
			});
		}, 1000);
		setTimeout(function() {
			fadeIn($('.page_1_1_3'))
		}, 200);
		setTimeout(function() {
			slideInDownToUp($('.page_1_1_2'))
		}, 400);
		setTimeout(function() {
			slideInUpToDown($('.page_1_1_4'))
		}, 600);

		var img1 = $('.page_1_2_1');
		var top1 = img1.offset().top;
		var img2 = $('.page_1_3');
		var top2 = img2.offset().top;
		var img3 = $('.page_1_4');
		var top3 = img3.offset().top;
		var img4 = $('.page_1_5');
		var top4 = img4.offset().top;
		var img5 = $('.page_1_6');
		var top5 = img5.offset().top;
		var img6 = $('.page_1_7');
		var top6 = img6.offset().top;

		if(scroTop > 50 && scroTop < top1 + hd - 450) {
			slideInUpToDown(img1);
		} else {
			slideOutUpToDown(img1);
		}

		if(scroTop > top2 - hd && scroTop < top2 + hd - 600) {
			scaleSmallToLarge(img2);
		} else {
			scaleLargeToSmall(img2);
		}

		if(scroTop > top3 - hd && scroTop < top3 + hd - 400) {
			zoomInPage(img3);
		} else {
			zoomOutPage(img3);
		}

		if(scroTop > top4 - hd && scroTop < top4 + hd - 550) {
			scaleSmallToLarge(img4);
		} else {
			scaleLargeToSmall(img4);
		}

		if(scroTop > top5 - hd && scroTop < top5 + hd - 450) {
			zoomInPage(img5);
		} else {
			zoomOutPage(img5);
		}

		if(scroTop > top6 - hd + 100 && scroTop < top6 + hd - 450) {
			img6.find('.car_wheel_1,.car_wheel_2').addClass('roteWeel');
			slideInLeft(img6.find('.page_1_car'));
		} else {
			img6.find('.car_wheel_1,.car_wheel_2').removeClass('roteWeel');
			slideOutLeft(img6.find('.page_1_car'));
		}
		sct1 = scroTop;
	}
	if(page == 1) {
		//头图
		slideInRight($('.page_2_1_2'));
		slideInUpToDown($('.page_2_1_3').find('img'));

		var img1 = $('.page_2_2');
		var top1 = img1.offset().top;
		var img2 = $('.page_2_3');
		var top2 = img2.offset().top;
		var img3 = $('.page_2_4');
		var top3 = img3.offset().top;
		var img4 = $('.page_2_5');
		var top4 = img4.offset().top;
		var img5 = $('.page_2_6');
		var top5 = img5.offset().top;
		var img6 = $('.page_2_7');
		var top6 = img6.offset().top;
		var img7 = $('.page_2_8');
		var top7 = img7.offset().top;
		var img8 = $('.page_2_9');
		var top8 = img8.offset().top;

		if(scroTop > 50 && scroTop < top1 + hd - 500) {
			fadeIn(img1);
		} else {
			fadeOut(img1);
		}

		if(scroTop > top2 - hd && scroTop < top2 + hd - 500) {
			slideInLeft(img2.find('.page_2_3_1'));
			slideInRight(img2.find('.page_2_3_2'));
		} else {
			slideOutLeft(img2.find('.page_2_3_1'));
			slideOutRight(img2.find('.page_2_3_2'));
		}

		if(scroTop > top3 - hd && scroTop < top3 + hd - 600) {
			slideInRight(img3);
		} else {
			slideOutRight(img3);
		}

		if(scroTop > top4 - hd && scroTop < top4 + hd - 500) {
			slideInRight(img4.find('.page_2_3_1'));
			slideInLeft(img4.find('.page_2_3_2'));
		} else {
			slideOutRight(img4.find('.page_2_3_1'));
			slideOutLeft(img4.find('.page_2_3_2'));
		}

		if(scroTop > top5 - hd && scroTop < top5 + hd - 500) {
			slideInLeft(img5);
		} else {
			slideOutLeft(img5);
		}

		if(scroTop > top6 - hd && scroTop < top6 + hd - 500) {
			slideInLeft(img6.find('.page_2_3_1'));
			slideInRight(img6.find('.page_2_3_2'));
		} else {
			slideOutLeft(img6.find('.page_2_3_1'));
			slideOutRight(img6.find('.page_2_3_2'));
		}

		if(scroTop > top7 - hd && scroTop < top7 + hd - 500) {
			slideInRight(img7);
		} else {
			slideOutRight(img7);
		}
		if(scroTop > top8 - hd && scroTop < top8 + hd - 500) {
			fadeIn(img8.find('.page_2_9_0'));
		} else {
			fadeOut(img8.find('.page_2_9_0'));
		}

		if(scroTop > top8 - hd + 450 && scroTop < top8 + hd - 500) {
			fadeOut(img8.find('.page_2_9_1'));
		} else {
			fadeIn(img8.find('.page_2_9_1'));
		}
		sct2 = scroTop;
	}
	if(page == 2) {
		slideInLeft($('.page_3_1_3 img'));
		fadeOut($('.page_3_1_2').find('.page_3_1_2_1'));

//		var img1 = $('.page_3_2');
//		var top1 = img1.offset().top;
//		var img2 = $('.page_3_3');
//		var top2 = img2.offset().top;
//		var img3 = $('.page_3_4');
//		var top3 = img3.offset().top;
//		var img4 = $('.page_3_5');
//		var top4 = img4.offset().top;
		var img5 = $('.page_3_6');
		var top5 = img5.offset().top;
		var img6 = $('.page_3_7');
		var top6 = img6.offset().top;
		var img7 = $('.page_3_8');
		var top7 = img7.offset().top;
		var img8 = $('.page_3_9');
		var top8 = img8.offset().top;
		var img9 = $('.page_3_10');
		var top9 = img9.offset().top;
		var img10 = $('.page_3_11');
		var top10 = img10.offset().top;
		var img11 = $('.page_3_12');
		var top11 = img11.offset().top;
		var img12 = $('.page_3_13');
		var top12 = img12.offset().top;
		var img13 = $('.page_3_14');
		var top13 = img13.offset().top;
		var img14 = $('.page_3_15');
		var top14 = img14.offset().top;

//		if(scroTop > 50 && scroTop < top1 + hd - 600) {
//			$('.page_3_2').css({
//				opacity: 1
//			});
//			slideInLeft(img1.find('.page_3_2_1 img'));
//			setTimeout(function() {
//				slideInLeft(img1.find('.page_3_2_2 img'));
//			}, 500);
//		} else {
//			$('.page_3_2').css({
//				opacity: 0
//			});
//			slideOutLeft(img1.find('.page_3_2_1 img'));
//			slideOutLeft(img1.find('.page_3_2_2 img'));
//		}
//
//		if(scroTop > top2 - hd && scroTop < top2 + hd - 300) {
//			fadeIn(img2);
//		} else {
//			fadeOut(img2);
//		}
//
//		if(scroTop > top3 - hd && scroTop < top3 + hd - 300) {
//			fadeIn(img3);
//		} else {
//			fadeOut(img3);
//		}
//
//		if(scroTop > top3 - hd + 400 && scroTop < top3 + hd - 300) {
//			$('.page_3_4_1_2').addClass('rotateHalo');
//			$('.page_3_4_1_3').addClass('opacityImg').css({
//				opacity: 1
//			});
//			setTimeout(function() {
//
//			}, 2500);
//		} else {
//			$('.page_3_4_1_2').removeClass('rotateHalo');
//			$('.page_3_4_1_3').removeClass('opacityImg').css({
//				opacity: 0
//			});
//		}
//
//		if(scroTop > top4 - hd && scroTop < top4 + hd - 500) {
//			slideInLeft(img4.find('.page_3_5_1 img'));
//		} else {
//			slideOutLeft(img4.find('.page_3_5_1 img'));
//		}

		if(scroTop > top5 - hd+200 && scroTop < top5 + hd - 500) {
			slideInLeft(img5);
		} else {
			slideOutLeft(img5);
		}

		if(scroTop > top6 - hd && scroTop < top6 + hd - 600) {
			slideInLeft(img6);
		} else {
			slideOutLeft(img6);
		}

		if(scroTop > top7 - hd && scroTop < top7 + hd - 600) {
			slideInRight(img7);
		} else {
			slideOutRight(img7);
		}

		if(scroTop > top8 - hd && scroTop < top8 + hd - 600) {
			slideInLeft(img8.find('.page_3_9_1'));
			slideInLeft(img8.find('.page_3_9_2_1_2'));
			slideInRight(img8.find('.page_3_9_2_2'));
		} else {
			slideOutLeft(img8.find('.page_3_9_1'));
			slideOutLeft(img8.find('.page_3_9_2_1_2'));
			slideOutRight(img8.find('.page_3_9_2_2'));
		}

		if(scroTop > top9 - hd && scroTop < top9 + hd - 600) {
			slideInDownToUp(img9.find('.page_3_10_1'));
			slideInRight(img9.find('.page_3_10_2'));
		} else {
			slideOutDownToUp(img9.find('.page_3_10_1'));
			slideOutRight(img9.find('.page_3_10_2'));
		}

		if(scroTop > top10 - hd + 100 && scroTop < top10 + hd - 600) {
			fadeIn(img10.find('.page_3_11_1'));
			slideInUpToDown(img10.find('.page_3_11_2_2'));
		} else {
			fadeOut(img10.find('.page_3_11_1'));
			slideOutUpToDown(img10.find('.page_3_11_2_2'));
		}

		if(scroTop > top11 - hd + 100 && scroTop < top11 + hd - 600) {
			fadeIn(img11.find('.page_3_11_1'));
			slideInUpToDown(img11.find('.page_3_11_2_2'));
		} else {
			fadeOut(img11.find('.page_3_11_1'));
			slideOutUpToDown(img11.find('.page_3_11_2_2'));
		}

		if(scroTop > top12 - hd + 100 && scroTop < top12 + hd - 600) {
			fadeIn(img12.find('.page_3_11_1'));
			slideInUpToDown(img12.find('.page_3_11_2_2'));
		} else {
			fadeOut(img12.find('.page_3_11_1'));
			slideOutUpToDown(img12.find('.page_3_11_2_2'));
		}

		//		if(scroTop > top13 - hd + 100 && scroTop < top13 + hd - 300) {
		//			
		//		} else {
		//			
		//		}
		if(scroTop > top14 - hd + 100 && scroTop < top14 + hd - 300) {
			$('.page_3_15_1').addClass('moveLarge');
			setTimeout(function() {
				fadeIn(img13.find('img'));
			}, 1500);
		} else {
			$('.page_3_15_1').removeClass('moveLarge');
			fadeOut(img13.find('img'));
		}
		sct3 = scroTop;
	}
	if(page == 3) {
		//头图
		setTimeout(function() {
			fadeIn($('.page_4_1_1_1'));
		}, 500);
		setTimeout(function() {
			fadeIn($('.page_4_1_1_2'));
		}, 900);
		setTimeout(function() {
			fadeIn($('.page_4_1_1_3'));
		}, 1300);
		setTimeout(function() {
			slideInLeft($('.page_4_1_2_2'));
			slideInLeft($('.page_4_1_3_3 img'));
			slideInRight($('.page_4_1_3_1 img'));
		}, 800)

		setTimeout(function() {
			slideInUpToDown($('.page_4_1_2_1'));
			slideInDownToUp($('.page_4_1_3_2'));
		}, 500);

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
		var img6 = $('.page_4_7');
		var top6 = img6.offset().top;
		var img7 = $('.page_4_8');
		var top7 = img7.offset().top;

		if(scroTop > 50 && scroTop < top1 + hd - 600) {
			slideInLeft(img1.find('.page_4_2_1'));
		} else {
			slideOutLeft(img1.find('.page_4_2_1'));
		}
		if(scroTop > 50 && scroTop < top1 + hd - 300) {
			fadeIn(img1.find('.page_4_2_2'));
		} else {
			fadeOut(img1.find('.page_4_2_2'));
		}

		if(scroTop > top2 - hd && scroTop < top2 + hd - 560) {
			fadeIn(img2);
		} else {
			fadeOut(img2);
		}

		if(scroTop > top3 - hd && scroTop < top3 + hd - 700) {
			slideInLeft(img3.find('.page_4_2_1'));
		} else {
			slideOutLeft(img3.find('.page_4_2_1'));
		}

		if(scroTop > top3 - hd && scroTop < top3 + hd - 400) {
			fadeIn(img3.find('.page_4_2_2'));
		} else {
			fadeOut(img3.find('.page_4_2_2'));
		}

		if(scroTop > top4 - hd && scroTop < top4 + hd - 500) {
			slideInLeft(img4);
		} else {
			slideOutLeft(img4);
		}

		if(scroTop > top5 - hd && scroTop < top5 + hd - 700) {
			slideInLeft(img5.find('.page_4_2_1'));
		} else {
			slideOutLeft(img5.find('.page_4_2_1'));
		}

		if(scroTop > top5 - hd && scroTop < top5 + hd - 300) {
			fadeIn(img5.find('.page_4_2_2'));
		} else {
			fadeOut(img5.find('.page_4_2_2'));
		}

		if(scroTop > top6 - hd && scroTop < top6 + hd - 300) {
			slideInUpToDown(img6.find('img'));
		} else {
			slideOutUpToDown(img6.find('img'));
		}

		if(scroTop > top7 - hd + 100 && scroTop < top7 + hd - 300) {
			img7.find('.page_4_8_2').addClass('moveFadeOut');
		} else {
			img7.find('.page_4_8_2').removeClass('moveFadeOut');
		}
		sct4 = scroTop;
	}
	if(page == 4) {
		slideInLeft($('.page_5_1_3_1'));
		slideInDownToUp($('.page_5_1_3_2'));

		var img1 = $('.page_5_2');
		var top1 = img1.offset().top;
		var img2 = $('.page_5_4');
		var top2 = img2.offset().top;

		if(scroTop > 50 && scroTop < top1 + hd - 600) {
			slideInLeft(img1.find('.page_5_2_3'));
		} else {
			slideOutLeft(img1.find('.page_5_2_3'));
		}

		if(scroTop > top2 - hd && scroTop < top2 + hd - 300) {
			fadeIn(img2.find('img'));
		} else {
			fadeOut(img2.find('img'));
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
	setTimeout(function() {
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
	timer = setInterval(function() {
		flag++;
		z_index++;
		if(flag >= n) {
			flag = 0;
		}

		// 移除上 上张图片class
		if(flag < n - 1) {
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
	e.removeClass('scaleLargeToSmall').addClass('scaleSmallToLarge');
}

function scaleLargeToSmall(e) {
	e.removeClass('scaleSmallToLarge').addClass('scaleLargeToSmall');
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