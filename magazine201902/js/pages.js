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

//清除头部样式
function clearHeadStyle() {
	//清除头部样式
	$('.page_1_1_1 img').css({
		'transform': 'scale(1.3)'
	});
	slideOutDownToUp($('.page_1_1_2_1 img'));
	slideOutUpToDown($('.page_1_1_2_2 img'));
	slideOutUpToDown($('.page_1_1_2_3 img'));

	$('.page_2_1_1').removeClass('twinkle');
	slideOutLeft($('.page_2_1_3').find('img').eq(0));
	slideOutRight($('.page_2_1_3').find('img').eq(1));
	$('.page_2_1_1').css({
		opacity: 0
	});

	zoomOutPage($('.page_3_1_1'));
	slideOutRight($('.page_3_1_2'));

	$('.page_4_1_1').removeClass('elastic');
	slideOutUpToDown($('.page_4_1_2').find('img'));

	slideOutLeft($('.page_5_1_1'));
	slideOutRight($('.page_5_1_2'));

}

function swiperContainerHide() {
	$('.swiperContainer').css({
		opacity: 0,
		height: hd
	});
}

// 刷新滚动到顶部
window.onbeforeunload = function() {
	window.scrollTo(0, 0);
}

// 图片加载
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
			//swiperContainerShow();
		}
	}
}

$(function () {
	

	//catalogShow();

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
		$('.page_1_1_1 img').css({
			'transform': 'scale(1)'
		});
		slideInDownToUp($('.page_1_1_2_1 img'));
		slideInUpToDown($('.page_1_1_2_2 img'));
		slideInUpToDown($('.page_1_1_2_3 img'));

		var img1 = $('.page_1_2');
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
		var img7 = $('.page_1_8');
		var top7 = img7.offset().top;
		var img9 = $('.page_1_9');
		var top9 = img9.offset().top;
		var img10 = $('.page_1_10');
		var top10 = img10.offset().top;
		var img11 = $('.page_1_11');
		var top11 = img11.offset().top;
		var img12 = $('.page_1_12');
		var top12 = img12.offset().top;
		var img13 = $('.page_1_13');
		var top13 = img13.offset().top;
		var img14 = $('.page_1_14');
		var top14 = img14.offset().top;
		var img15 = $('.page_1_15');
		var top15 = img15.offset().top;
		var img16 = $('.page_1_16');
		var top16 = img16.offset().top;
		var img17 = $('.page_1_17');
		var top17 = img17.offset().top;
		var img18 = $('.page_1_18');
		var top18 = img18.offset().top;
		var img19 = $('.page_1_19');
		var top19 = img19.offset().top;
		if (scroTop > 50 && scroTop < top1 + hd-600) {			
			$('.page_1_2_1').css({
				width: 'calc(100vw * 539 / 750)',
				height: 'calc(100vw * 173 / 750)',
				'margin-top': 0
			})
			$('.page_1_2_2').css({
				left: 'calc(100vw * 40 / 750)',
				top: 'calc(100vw * 32 / 750)'
			})
		} else {
			$('.page_1_2_2').css({
				left: 'calc(-100vw * 207 / 750)',
				top: 'calc(-100vw * 64 / 750)'
			})
			$('.page_1_2_1').css({
				width: 'calc(100vw * 46 / 750)',
				height: 'calc(100vw * 46 / 750)',
				'margin-top': 'calc(100vw * 63 / 750)'
			})
		}

		if (scroTop > top2 - hd && scroTop < top2 + hd - 700) {
			slideInDownToUp(img2.find('img').eq(0));
			slideInUpToDown(img2.find('img').eq(1));
		} else {
			slideOutDownToUp(img2.find('img').eq(0));
			slideOutUpToDown(img2.find('img').eq(1));
		}
		if (scroTop > top3 - hd + 50 && scroTop < top3 + hd - 300) {
			zoomInPage(img3);
		} else {
			zoomOutPage(img3);
		}

		if (scroTop > top4 - hd && scroTop < top4 + hd - 600) {
			slideInLeft(img4.find('.page_1_5_1'));
			slideInRight(img4.find('.page_1_5_2'));
		} else {
			slideOutLeft(img4.find('.page_1_5_1'));
			slideOutRight(img4.find('.page_1_5_2'));
		}

		if (scroTop > top5 - hd && scroTop < top5 + hd - 600) {
			slideInDownToUp(img5.find('img').eq(0));
			slideInUpToDown(img5.find('img').eq(1));
		} else {
			slideOutDownToUp(img5.find('img').eq(0));
			slideOutUpToDown(img5.find('img').eq(1));
		}

		if (scroTop > top6 - hd + 50 && scroTop < top6 + hd - 500) {
			zoomInPage(img6);
		} else {
			zoomOutPage(img6);
		}

		if (scroTop > top7 - hd && scroTop < top7 + hd - 600) {
			slideInLeft(img7.find('.page_1_5_1'));
			slideInRight(img7.find('.page_1_5_2'));
		} else {
			slideOutLeft(img7.find('.page_1_5_1'));
			slideOutRight(img7.find('.page_1_5_2'));
		}

		if (scroTop > top9 - hd && scroTop < top9 + hd - 600) {
			slideInDownToUp(img9.find('img').eq(0));
			slideInUpToDown(img9.find('img').eq(1));
		} else {
			slideOutDownToUp(img9.find('img').eq(0));
			slideOutUpToDown(img9.find('img').eq(1));
		}

		if (scroTop > top10 - hd + 50 && scroTop < top10 + hd - 650) {
			zoomInPage(img10);
		} else {
			zoomOutPage(img10);
		}

		if (scroTop > top11 - hd && scroTop < top11 + hd - 600) {
			slideInLeft(img11.find('.page_1_5_1'));
			slideInRight(img11.find('.page_1_5_2'));
		} else {
			slideOutLeft(img11.find('.page_1_5_1'));
			slideOutRight(img11.find('.page_1_5_2'));
		}

		if (scroTop > top12 - hd && scroTop < top12 + hd - 600) {
			slideInLeft(img12.find('.page_1_5_2'));
			slideInRight(img12.find('.page_1_5_1'));
		} else {
			slideOutLeft(img12.find('.page_1_5_2'));
			slideOutRight(img12.find('.page_1_5_1'));
		}

		if (scroTop > top13 - hd && scroTop < top13 + hd - 700) {
			slideInDownToUp(img13.find('img').eq(0));
			slideInUpToDown(img13.find('img').eq(1));
		} else {
			slideOutDownToUp(img13.find('img').eq(0));
			slideOutUpToDown(img13.find('img').eq(1));
		}

		if (scroTop > top14 - hd && scroTop < top14 + hd - 500) {
			zoomInPage(img14);
		} else {
			zoomOutPage(img14);
		}

		if (scroTop > top15 - hd && scroTop < top15 + hd - 600) {
			slideInDownToUp(img15.find('img'));
		} else {
			slideOutDownToUp(img15.find('img'));
		}

		if (scroTop > top16 - hd && scroTop < top16 + hd - 600) {
			slideInDownToUp(img16.find('img').eq(0));
			slideInUpToDown(img16.find('img').eq(1));
		} else {
			slideOutDownToUp(img16.find('img').eq(0));
			slideOutUpToDown(img16.find('img').eq(1));
		}

		if (scroTop > top17 - hd + 50 && scroTop < top17 + hd - 600) {
			zoomInPage(img17);
		} else {
			zoomOutPage(img17);
		}

		if (scroTop > top18 - hd && scroTop < top18 + hd - 600) {
			slideInLeft(img18.find('.page_1_5_1'));
			slideInRight(img18.find('.page_1_5_2'));
		} else {
			slideOutLeft(img18.find('.page_1_5_1'));
			slideOutRight(img18.find('.page_1_5_2'));
		}

		if (scroTop > top19 - hd + 50 && scroTop < top19 + hd) {
			slideInDownToUp(img19.find('img.page_1_19_3'));
			fadeOut(img19.find('img.page_1_19_1'));
		} else {
			slideOutDownToUp(img19.find('img.page_1_19_3'));
			fadeIn(img19.find('img.page_1_19_1'));
		}

		sct1=scroTop;

	}
	if (page == 1) {
		$('.page_2_1_1').addClass('twinkle');
		slideInLeft($('.page_2_1_3').find('img').eq(0));
		slideInRight($('.page_2_1_3').find('img').eq(1));
		setTimeout(function () {
			$('.page_2_1_1').css({
				opacity: 1
			});
		}, 1000);

		var img2 = $('.page_2_2');
		var top2 = img2.offset().top;
		var img3 = $('.page_2_3');
		var top3 = img3.offset().top;
		var img4 = $('.page_2_4');
		var top4 = img4.offset().top;
		var img5 = $('.page_2_5');
		var top5 = img5.offset().top;
		var img6 = $('.page_2_6');
		var top6 = img6.offset().top;
		var img7 = $('.page_2_7');
		var top7 = img7.offset().top;
		var img8 = $('.page_2_8');
		var top8 = img8.offset().top;
		var img9 = $('.page_2_9');
		var top9 = img9.offset().top;
		var img10 = $('.page_2_10');
		var top10 = img10.offset().top;

		if (scroTop > 50 && scroTop < top2 + hd-700) {
			img2.find('.page_2_2_1').css({
				width: 'calc(100vw * 556 / 750)',
				'margin-left': '0'
			});
			img2.find('.page_2_2_2').css({
				transform: 'scale(1)'
			});
		} else {
			img2.find('.page_2_2_1').css({
				width: 'calc(100vw * 76 / 750)',
				'margin-left': 'calc(100vw * 266 / 750)'
			});
			img2.find('.page_2_2_2').css({
				transform: 'scale(0.1)'
			});
		}

		if (scroTop > top3 - hd + 50 && scroTop < top3 + hd-400) {
			fadeIn(img3);
		} else {
			fadeOut(img3);
		}

		if (scroTop > top4 - hd + 50 && scroTop < top4 + hd-500) {
			img4.css({
				width: wd
			});
			//$('.page_2_4_1').css({width:'calc(100vw * 740/ 750)'});
			setTimeout(function () {
				fadeOut(img4.find('.page_2_4_1').find('img').eq(1));
			}, 2000)
		} else {
			img4.css({
				width: 'calc(100vw * 80/ 750)'
			});
			//$('.page_2_4_1').css({width:'calc(100vw * 80/ 750)'});
			fadeIn(img4.find('.page_2_4_1').find('img').eq(1));
		}

		if (scroTop > top5 - hd + 50 && scroTop < top5 + hd-600) {
			img5.find('.page_2_2_1').css({
				width: 'calc(100vw * 556 / 750)',
				'margin-left': '0'
			});
			img5.find('.page_2_2_2').css({
				transform: 'scale(1)'
			});
		} else {
			img5.find('.page_2_2_1').css({
				width: 'calc(100vw * 76 / 750)',
				'margin-left': 'calc(100vw * 266 / 750)'
			});
			img5.find('.page_2_2_2').css({
				transform: 'scale(0.1)'
			});
		}

		if (scroTop > top6 - hd + 50 && scroTop < top6 + hd-500) {
			fadeIn(img6);
		} else {
			fadeOut(img6);
		}

		if (scroTop > top7 - hd + 50 && scroTop < top7 + hd-600) {
			img7.css({
				width: wd
			});
			//$('.page_2_4_1').css({width:'calc(100vw * 740/ 750)'});
			setTimeout(function () {
				fadeOut(img7.find('.page_2_4_1').find('img').eq(1));
			}, 2000)
		} else {
			img7.css({
				width: 'calc(100vw * 80/ 750)'
			});
			//$('.page_2_4_1').css({width:'calc(100vw * 80/ 750)'});
			fadeIn(img7.find('.page_2_4_1').find('img').eq(1));
		}

		if (scroTop > top8 - hd + 50 && scroTop < top8 + hd-600) {
			img8.find('.page_2_2_1').css({
				width: 'calc(100vw * 639 / 750)',
				'margin-left': '0'
			});
			img8.find('.page_2_2_2').css({
				transform: 'scale(1)'
			});
		} else {
			img8.find('.page_2_2_1').css({
				width: 'calc(100vw * 76 / 750)',
				'margin-left': 'calc(100vw * 266 / 750)'
			});
			img8.find('.page_2_2_2').css({
				transform: 'scale(0.1)'
			});
		}

		if (scroTop > top9 - hd + 50 && scroTop < top9 + hd-100) {
			fadeIn(img9);
		} else {
			fadeOut(img9);
		}

		if (scroTop > top10 - hd + 50 && scroTop < top10 + hd-600) {
			img10.find('img').css({
				right: 'calc(-100vw * 436/ 750)'
			});
		} else {
			img10.find('img').css({
				right: 0
			});
		}

		sct2=scroTop;

	}
	if (page == 2) {
		zoomInPage($('.page_3_1_1'));
		setTimeout(function () {
			slideInRight($('.page_3_1_2'));
		}, 2000)

		var img2 = $('.page_3_2');
		var top2 = img2.offset().top;
		var img3 = $('.page_3_3');
		var top3 = img3.offset().top;
		var img4 = $('.page_3_4');
		var top4 = img4.offset().top;
		var img5 = $('.page_3_5');
		var top5 = img5.offset().top;
		var img6 = $('.page_3_6');
		var top6 = img6.offset().top;
		var img7 = $('.page_3_7');
		var top7 = img7.offset().top;
		var img8 = $('.page_3_8');
		var top8 = img8.offset().top;
		var img9 = $('.page_3_9');
		var top9 = img9.offset().top;
		var img10 = $('.page_3_10');
		var top10 = img10.offset().top;
		var img11 = $('.page_3_11');
		var top11 = img11.offset().top;
		var img12 = $('.page_3_12');
		var top12 = img12.offset().top;
		var img13 = $('.page_3_13');
		var top13 = img13.offset().top;
		var img14 = $('.page_3_14');
		var top14 = img14.offset().top;
		var img15 = $('.page_3_15');
		var top15 = img15.offset().top;
		var img16 = $('.page_3_16');
		var top16 = img16.offset().top;


		if (scroTop > 0 && scroTop < top2 + hd-660) {
			img2.find('div').css({
				opacity: 1
			});
			slideInLeft(img2.find('img'));
		} else {
			img2.find('div').css({
				opacity: 0
			});
			slideOutLeft(img2.find('img'));
		}

		if (scroTop > top3 - hd && scroTop < top3 + hd-300) {
			zoomInPage(img3.find('.page_3_3_1'));
		} else {
			zoomOutPage(img3.find('.page_3_3_1'));
		}

		if (scroTop > top3 - hd + 300 && scroTop < top3 + hd-350) {
			slideInRight(img3.find('.page_3_3_2'));
		} else {
			slideOutRight(img3.find('.page_3_3_2'));
		}

		if (scroTop > top4 - hd && scroTop < top4 + hd-400) {
			zoomInPage(img4);
		} else {
			zoomOutPage(img4);
		}

		if (scroTop > top5 - hd && scroTop < top5 + hd-400) {
			slideInRight(img5.find('.page_3_5_1'));
			setTimeout(function () {
				slideInLeft($('.page_3_5_2').find('img').eq(0));
			}, 300);
			setTimeout(function () {
				slideInLeft($('.page_3_5_2').find('img').eq(1));
			}, 600);
			setTimeout(function () {
				slideInLeft($('.page_3_5_2').find('img').eq(2));
			}, 900);

		} else {
			slideOutRight(img5.find('.page_3_5_1'));
			slideOutLeft($('.page_3_5_2').find('img').eq(0));
			slideOutLeft($('.page_3_5_2').find('img').eq(1));
			slideOutLeft($('.page_3_5_2').find('img').eq(2));
		}

		if (scroTop > top6 - hd && scroTop < top6 + hd-700) {
			fadeIn(img6);
		} else {
			fadeOut(img6);
		}

		if (scroTop > top7 - hd && scroTop < top7 + hd-500) {
			slideInLeft(img7);
		} else {
			slideOutLeft(img7);
		}

		if (scroTop > top8 - hd && scroTop < top8 + hd-600) {
			slideInLeft(img8);
		} else {
			slideOutLeft(img8);
		}

		if (scroTop > top9 - hd && scroTop < top9 + hd-600) {
			slideInLeft(img9);
		} else {
			slideOutLeft(img9);
		}

		if (scroTop > top10 - hd && scroTop < top10 + hd-600) {
			slideInDownToUp(img10.find('.page_3_10_1'));
		} else {
			slideOutDownToUp(img10.find('.page_3_10_1'));
		}

		if (scroTop > top11 - hd && scroTop < top11 + hd-700) {
			slideInRight(img11);
		} else {
			slideOutRight(img11);
		}

		if (scroTop > top12 - hd && scroTop < top12 + hd-600) {
			slideInRight(img12);
		} else {
			slideOutRight(img12);
		}

		if (scroTop > top13 - hd && scroTop < top13 + hd-650) {
			slideInRight(img13);
		} else {
			slideOutRight(img13);
		}

		if (scroTop > top14 - hd && scroTop < top14 + hd-650) {
			slideInRight(img14);
		} else {
			slideOutRight(img14);
		}

		if (scroTop > top15 - hd && scroTop < top15 + hd-650) {
			slideInRight(img15);
		} else {
			slideOutRight(img15);
		}

		if (scroTop > top16 - hd && scroTop < top16 + hd) {
			slideInDownToUp(img16.find('img'));
		} else {
			slideOutDownToUp(img16.find('img'));
		}

		sct3=scroTop;

	}
	if (page == 3) {
		$('.page_4_1_1').addClass('elastic');
		setTimeout(function () {
			slideInUpToDown($('.page_4_1_2').find('img'));
		}, 2000)

		var img1 = $('.page_4_2_1');
		var top1 = img1.offset().top;
		var img2 = $('.page_4_2_2');
		var top2 = img2.offset().top;
		var img3 = $('.page_4_3_1');
		var top3 = img3.offset().top;
		var img4 = $('.page_4_3_2');
		var top4 = img4.offset().top;
		var img5 = $('.page_4_4_1');
		var top5 = img5.offset().top;
		var img6 = $('.page_4_4_2');
		var top6 = img6.offset().top;
		var img7 = $('.page_4_5_1');
		var top7 = img7.offset().top;
		var img8 = $('.page_4_5_2');
		var top8 = img8.offset().top;
		var img9 = $('.page_4_6');
		var top9 = img9.offset().top;

		if (scroTop > 50 && scroTop < top1 + hd) {
			fadeIn(img1.find('img'));
		} else {
			fadeOut(img1.find('img'));
		}

		if (scroTop > top2 - hd + 300 && scroTop < top2 + hd- 200) {
			img1.parent().find('.page_4_2_1').css({
				height: 0
			});
			slideInDownToUp(img2.find('img'));
		} else {
			img1.parent().find('.page_4_2_1').css({
				height: 'calc(100vw * 534/ 750)'
			});
			slideOutDownToUp(img2.find('img'));
		}

		if (scroTop > top3 - hd && scroTop < top3 + hd) {
			fadeIn(img3.find('img'));
		} else {
			fadeOut(img3.find('img'));
		}

		if (scroTop > top4 - hd + 300 && scroTop < top4 + hd - 200) {
			img4.parent().find('.page_4_3_1').css({
				height: 0
			});
			slideInDownToUp(img4.find('img'));
		} else {
			img4.parent().find('.page_4_3_1').css({
				height: 'calc(100vw * 529/ 750)'
			});
			slideOutDownToUp(img4.find('img'));
		}

		if (scroTop > top5 - hd && scroTop < top5 + hd) {
			fadeIn(img5.find('img'));
		} else {
			fadeOut(img5.find('img'));
		}

		if (scroTop > top6 - hd + 300 && scroTop < top6 + hd- 200) {
			img6.parent().find('.page_4_4_1').css({
				height: 0
			});
			slideInDownToUp(img6.find('img'));
		} else {
			img6.parent().find('.page_4_4_1').css({
				height: 'calc(100vw * 526/ 750)'
			});
			slideOutDownToUp(img6.find('img'));
		}

		if (scroTop > top7 - hd && scroTop < top7 + hd) {
			fadeIn(img7.find('img'));
		} else {
			fadeOut(img7.find('img'));
		}

		if (scroTop > top8 - hd + 300 && scroTop < top8 + hd- 250) {
			img8.parent().find('.page_4_5_1').css({
				height: 0
			});
			slideInDownToUp(img8.find('img'));
		} else {
			img8.parent().find('.page_4_5_1').css({
				height: 'calc(100vw * 500/ 750)'
			});
			slideOutDownToUp(img8.find('img'));
		}

		if (scroTop > top9 - hd+250 && scroTop < top9 + hd) {
			// setTimeout(function(){
				fadeIn(img9.find('img').eq(1));
			// },300);
			
		} else {
			fadeOut(img9.find('img').eq(1));
		}

		sct4=scroTop;

	}
	if (page == 4) {
		slideInLeft($('.page_5_1_1'));
		slideInRight($('.page_5_1_2'));

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

		if (scroTop > 100 && scroTop < top1 + hd-550) {
			img1.children().css({
				height: 'calc(100vw * 343 / 750)'
			}).children('.page_5_2_1').css({
				top: 'calc(100vw * 62/ 750)'
			});
		} else {
			img1.children().css({
				height: 2
			}).children('.page_5_2_1').css({
				top: 'calc(-100vw * 109/ 750)'
			});
		}

		if (scroTop > top2 - hd && scroTop < top2 + hd-400) {
			fadeIn(img2);
		} else {
			fadeOut(img2);
		}

		if (scroTop > top3 - hd && scroTop < top3 + hd-400) {
			zoomInPage(img3);
		} else {
			zoomOutPage(img3);
		}

		if (scroTop > top4 - hd && scroTop < top4 + hd-400) {
			slideInLeft(img4.find('img').eq(0));
			slideInRight(img4.find('img').eq(1));
		} else {
			slideOutLeft(img4.find('img').eq(0));
			slideOutRight(img4.find('img').eq(1));
		}

		if (scroTop > top5 - hd && scroTop < top5 + hd-400) {
			fadeIn(img5);
		} else {
			fadeOut(img5);
		}

		if (scroTop > top6 - hd && scroTop < top6 + hd-400) {
			zoomInPage(img6);
		} else {
			zoomOutPage(img6);
		}

		if (scroTop > top7 - hd + 200 && scroTop < top7 + hd-400) {
			slideInLeft($('.page_5_8_1').find('img').eq(1));
		} else {
			slideOutLeft($('.page_5_8_1').find('img').eq(1));
		}

		sct5=scroTop;


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