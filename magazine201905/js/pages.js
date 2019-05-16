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

		if (page != 0) {
			$('#page_1_video')[0].pause();
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
	speed: 2000,
	autoplay: {
		delay: 2000
	},
	autoplayDisableOnInteraction : false
})

//播放音乐
$('#playMusic').click(function () {
	if ($('#bgMusic').get(0).paused) {
		$('#bgMusic').get(0).play();
		$(this).text("music OFF");
	} else {
		$('#bgMusic').get(0).pause();
		$(this).text("music ON");
	}
})

// 视频
var video = $('#page_1_video')[0];
video.onplaying = function() 
{
	$('#bgMusic')[0].pause();
	$('#playMusic').text("music ON");
};

video.onpause = function() {
    $('#bgMusic')[0].play();
	$('#playMusic').text("music OFF");
};
//清除头部样式
function clearHeadStyle() {
	//清除头部样式
	// page1
	slideOutDownToUp($('.page_1_1_2').find('img'));
	slideOutLeft($('.page_1_1_3').find('img'));
	slideOutUpToDown($('.page_1_1_5').find('img'));
	slideOutRight($('.page_1_1_4').find('img'));

	//page2
	$('.page_2_1_1 img').removeClass('normalToBigToNormal');
	slideOutDownToUp($('.page_2_1_2').find('img'));
	

	//page3
	slideOutDownToUp($('.page_3_1_4').find('img'))
	slideOutUpToDown($('.page_3_1_5').find('img'))
	slideOutDownToUp($('.page_3_1_6').find('img'))

	//page4
	slideOutRight($('.page_4_1_4').find('img').css({
		opacity: 0
	}))
	slideOutRight($('.page_4_1_5').find('img').css({
		'animation-delay': '400ms',
		opacity: 0
	}))
	slideOutRight($('.page_4_1_6').find('img').css({
		'animation-delay': '800ms',
		opacity: 0
	}))
	$('.page_4_1_3').removeClass('twinkle')
			
	//page5
	slideOutLeft($('.page_5_1_2'));
	fadeIn($('.page_5_1_2_1'));
	fadeOut($('.page_5_1_3'));




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


	// catalogShow();
	// swiperContainerShow();
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
			slideInLeft($('.titlePic_1'));
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
		// 暂停音乐
		$('#bgMusic')[0].pause();
		$('#playMusic').text("music ON");
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
		slideInDownToUp($('.page_1_1_2').find('img'));
		slideInLeft($('.page_1_1_3').find('img'));
		slideInUpToDown($('.page_1_1_5').find('img'));
		slideInRight($('.page_1_1_4').find('img'));

		var img1 = $('.page_1_2_2');
		var top1 = img1.offset().top;
		if ((top1 - hd + 150) < scroTop && top1 > scroTop) {
			slideInDownToUp(img1.find('img'));
		} else {
			slideOutDownToUp(img1.find('img'));
		}

		var img2 = $('.page_1_2_3');
		var top2 = img2.offset().top;
		if ((top2 - hd + 150) < scroTop && top2 > scroTop) {
			slideInRight(img2.find('img'));
		} else {
			slideOutRight(img2.find('img'));
		}

		var img3 = $('.page_1_2_4');
		var top3 = img3.offset().top;
		var height3 = img3.height()
		if ((top3 - hd + 150) < scroTop && top3 + height3 / 2 > scroTop) {
			fadeIn(img3.find('img'));
		} else {
			fadeOut(img3.find('img'));
		}

		var img4 = $('.page_1_2_5');
		var top4 = img4.offset().top;
		if ((top4 - hd + 150) < scroTop && top4 > scroTop) {
			slideInRight(img4.find('img'));
		} else {
			slideOutRight(img4.find('img'));
		}

		var img5 = $('.page_1_2_6');
		var top5 = img5.offset().top;
		if ((top5 - hd + 150) < scroTop && top5 > scroTop) {
			slideInDownToUp(img5.find('img'));
		} else {
			slideOutDownToUp(img5.find('img'));
		}

		var img5 = $('.page_1_2_7');
		var top5 = img5.offset().top;
		var height5 = img5.height()
		if ((top5 - hd + 150) < scroTop && top5 + height5 / 2 > scroTop) {
			fadeIn(img5.find('img'));
		} else {
			fadeOut(img5.find('img'));
		}

		var img6 = $('.page_1_2_8');
		var top6 = img6.offset().top;
		if ((top6 - hd + 150) < scroTop && top6 > scroTop) {
			slideInRight(img6.find('img'));
		} else {
			slideOutRight(img6.find('img'));
		}

		var img7 = $('.page_1_2_10');
		var top7 = img7.offset().top;
		if ((top7 - hd + 150) < scroTop && top7 > scroTop) {
			slideInLeft(img7.find('img'));
		} else {
			slideOutLeft(img7.find('img'));
		}

		var img8 = $('.page_1_2_11');
		var top8 = img8.offset().top;
		if ((top8 - hd + 150) < scroTop && top8 > scroTop) {
			fadeIn(img8.find('img'));
		} else {
			fadeOut(img8.find('img'));
		}
		var img9 = $('.page_1_2_12');
		var top9 = img9.offset().top;
		var height9 = img9.height();
		if ((top9 - hd + 150) < scroTop && top9 + height9 / 2 > scroTop) {
			fadeIn(img9.find('img'));
		} else {
			fadeOut(img9.find('img'));
		}

		var img10 = $('.page_1_2_13');
		var top10 = img10.offset().top;
		if ((top10 - hd + 150) < scroTop && top10 > scroTop) {
			slideInRight(img10.find('img'));
		} else {
			slideOutRight(img10.find('img'));
		}
		var img11 = $('.page_1_3_2');
		var top11 = img11.offset().top;
		if ((top11 - hd + 150) < scroTop && top11 > scroTop) {
			slideInLeft(img11.find('img'));
		} else {
			slideOutLeft(img11.find('img'));
		}

		var img12 = $('.page_1_3_5');
		var top12 = img12.offset().top;
		var height12 = img12.height();
		if ((top12 - hd + 150) < scroTop && top12 + height12 / 2 > scroTop) {
			fadeIn(img12.find('img'));
		} else {
			fadeOut(img12.find('img'));
		}

		var img13 = $('.page_1_3_6');
		var top13 = img13.offset().top;
		var height13 = img13.height();
		if ((top13 - hd + 150) < scroTop && top13 + height13 / 2 > scroTop) {
			fadeIn(img13.find('img'));
		} else {
			fadeOut(img13.find('img'));
		}

		var img14 = $('.page_1_4_2');
		var top14 = img14.offset().top;
		if ((top14 - hd + 150) < scroTop && top14 > scroTop) {
			slideInLeft(img14.find('img'));
		} else {
			slideOutLeft(img14.find('img'));
		}

		var img15 = $('.page_1_4_4');
		var top15 = img15.offset().top;
		var height15 = img15.height();
		if ((top15 - hd + 150) < scroTop && top15 + height15 / 2 > scroTop) {
			fadeIn(img15.find('img'));
		} else {
			fadeOut(img15.find('img'));
		}

		var img16 = $('.page_1_4_5');
		var top16 = img16.offset().top;
		if ((top16 - hd + 150) < scroTop && top16 > scroTop) {
			slideInDownToUp(img16.find('img'));
		} else {
			slideOutDownToUp(img16.find('img'));
		}

		var img17 = $('.page_1_5_3');
		var top17 = img17.offset().top;
		if ((top17 - hd + 150) < scroTop && top17 > scroTop) {
			slideInLeft(img17.find('img'));
		} else {
			slideOutLeft(img17.find('img'));
		}

		var img18 = $('.page_1_5_5');
		var top18 = img18.offset().top;
		var height18 = img18.height();
		if ((top18 - hd + 150) < scroTop && top18 + height18 / 2 > scroTop) {
			fadeIn(img18.find('img'));
		} else {
			fadeOut(img18.find('img'));
		}


		var img19 = $('.page_1_5_7');
		var top19 = img19.offset().top;
		var height19 = img19.height();
		if ((top19 - hd + 150) < scroTop && top19 + height19 / 2 > scroTop) {

			img19.addClass('addHeght');
		} else {
			img19.removeClass('addHeght');
		}
		sct1 = scroTop;
	}
	if (page == 1) {
		slideInRight($('.page_4_1_4').find('img').css({
			'animation-delay': '800ms',
			opacity: 1
		}))
		slideInRight($('.page_4_1_5').find('img').css({
			'animation-delay': '1200ms',
			opacity: 1
		}))
		slideInRight($('.page_4_1_6').find('img').css({
			'animation-delay': '1600ms',
			opacity: 1
		}))
		$('.page_4_1_3').addClass('twinkle')

		var img1 = $('.page_4_2_1');
		var top1 = img1.offset().top
		var height1 = img1.height();
		if ((top1 - hd + 70) < scroTop && top1 + height1 / 2 > scroTop) {
			slideInUpToDown(img1.find('img'))
		} else {
			slideOutUpToDown(img1.find('img'))
		}

		var img2 = $('.page_4_2_2');
		var top2 = img2.offset().top
		if ((top2 - hd + 150) < scroTop && top2 > scroTop) {
			fadeIn(img2)
		} else {
			fadeOut(img2)
		}

		var img3 = $('.page_4_2_3');
		var top3 = img3.offset().top
		if ((top3 - hd + 150) < scroTop && top3 > scroTop) {
			slideInRight(img3)
		} else {
			slideOutRight(img3)
		}

		var img4 = $('.page_4_2_5');
		var top4 = img4.offset().top
		if ((top4 - hd + 150) < scroTop && top4 > scroTop) {
			slideInRight(img4.find('img'))
		} else {
			slideOutRight(img4.find('img'))
		}

		var img5 = $('.page_4_2_7');
		var top5 = img5.offset().top
		var height5 = img5.height()
		if ((top5 - hd + 150) < scroTop && top5 + height5 / 2 > scroTop) {
			img5.addClass('moveRight1').css({
				opacity: 1
			})
		} else {
			img5.removeClass('moveRight1').css({
				opacity: 0
			})
		}

		var img6 = $('.page_4_3_1');
		var top6 = img6.offset().top
		var height6 = img6.height()
		if ((top6 - hd + 150) < scroTop && top6 + height6 / 2 > scroTop) {
			img6.addClass('addWidth3').css({
				opacity: 1
			})
		} else {
			img6.removeClass('addWidth3').css({
				opacity: 0
			})
		}

		var img7 = $('.page_4_3_4');
		var top7 = img7.offset().top
		var height7 = img7.height()
		if ((top7 - hd + 150) < scroTop && top7 + height7 / 2 > scroTop) {
			fadeIn(img7)
		} else {
			fadeOut(img7)
		}

		var img8 = $('.page_4_3_6');
		var top8 = img8.offset().top
		var height8 = img8.height()
		if ((top8 - hd + 150) < scroTop && top8 + height8 / 2 > scroTop) {
			img8.addClass('addWidth3').css({
				opacity: 1
			})
		} else {
			img8.removeClass('addWidth3').css({
				opacity: 0
			})
		}

		var img9 = $('.page_4_3_10');
		var top9 = img9.offset().top
		var height9 = img9.height()
		if ((top9 - hd + 150) < scroTop && top9 + height9 / 2 > scroTop) {
			img9.addClass('addWidth3').css({
				opacity: 1
			})
		} else {
			img9.removeClass('addWidth3').css({
				opacity: 0
			})
		}

		var img10 = $('.page_4_3_8');
		var top10 = img10.offset().top
		var height10 = img10.height()
		if ((top10 - hd + 150) < scroTop && top10 + height10 / 2 > scroTop) {
			fadeIn(img10)
		} else {
			fadeOut(img10)
		}

		var img11 = $('.page_4_3_12');
		var top11 = img11.offset().top
		var height11 = img11.height()
		if ((top11 - hd + 150) < scroTop && top11 + height11 / 2 > scroTop) {
			fadeIn(img11)
		} else {
			fadeOut(img11)
		}
		var img12 = $('.page_4_4_3');
		var top12 = img12.offset().top
		var height12 = img12.height()
		if ((top12 - hd + 150) < scroTop && top12 + height12 / 2 > scroTop) {
			slideInLeft(img12)
			setTimeout(() => {
				$('.page_4_4_3_2').css({
					opacity: 0
				})
			}, 1000);
		} else {
			slideOutLeft(img12)
			setTimeout(() => {
				$('.page_4_4_3_2').css({
					opacity: 1
				})
			}, 1000);
		}

		var img13 = $('.page_4_4_4');
		var top13 = img13.offset().top
		var height13 = img13.height()
		if ((top13 - hd + 150) < scroTop && top13 + height13 / 2 > scroTop) {
			fadeIn(img13)
		} else {
			fadeOut(img13)
		}

		var img14 = $('.page_4_4_5');
		var top14 = img14.offset().top
		var height14 = img14.height()
		if ((top14 - hd + 150) < scroTop && top14 + height14 / 2 > scroTop) {
			fadeIn(img14)
		} else {
			fadeOut(img14)
		}
	
		sct2 = scroTop;

	}
	if (page == 2) {
		slideInDownToUp($('.page_3_1_4').find('img'))
		slideInUpToDown($('.page_3_1_5').find('img'))
		slideInDownToUp($('.page_3_1_6').find('img'))
		var img1 = $('.page_3_1_11');
		var top1 = img1.offset().top
		if ((top1 - hd + 150) < scroTop && top1 > scroTop) {
			slideInLeft(img1.find('img'))
		} else {
			slideOutLeft(img1.find('img'))
		}
		var img2 = $('.page_3_1_12');
		var top2 = img2.offset().top
		if ((top2 - hd + 150) < scroTop && top2 > scroTop) {
			slideInLeft(img2.find('img'))
		} else {
			slideOutLeft(img2.find('img'))
		}

		var img3 = $('.page_3_1_14');
		var top3 = img3.offset().top
		if ((top3 - hd + 150) < scroTop && top3 > scroTop) {
			img3.addClass('twinkle')
		} else {
			img3.removeClass('twinkle')
		}

		var img4 = $('.page_3_1_15');
		var top4 = img4.offset().top
		if ((top4 - hd + 150) < scroTop && top4 > scroTop) {
			fadeIn(img4)
		} else {
			fadeOut(img4)
		}

		var img5 = $('.page_3_2_1');
		var top5 = img5.offset().top
		if ((top5 - hd + 150) < scroTop && top5 > scroTop) {
			slideInDownToUp(img5.find('img'))
			slideInUpToDown($('.page_3_2_3').find('img'))
		} else {
			slideOutDownToUp(img5.find('img'))
			slideOutUpToDown($('.page_3_2_3').find('img'))
		}

		var img6 = $('.page_3_2_4');
		var top6 = img6.offset().top
		if ((top6 - hd + 150) < scroTop && top6 > scroTop) {
			slideInRight(img6)
		} else {
			slideOutRight(img6)
		}

		var img7 = $('.page_3_2_6');
		var top7 = img7.offset().top
		if ((top7 - hd + 150) < scroTop && top7 > scroTop) {
			slideInDownToUp(img7.find('img'))
		} else {
			slideOutDownToUp(img7.find('img'))
		}

		var img8 = $('.page_3_2_7');
		var top8 = img8.offset().top
		if ((top8 - hd + 150) < scroTop && top8 > scroTop) {
			slideInLeft(img8)
		} else {
			slideOutLeft(img8)
		}

		var img9 = $('.page_3_2_9');
		var top9 = img9.offset().top
		if ((top9 - hd + 150) < scroTop && top9 > scroTop) {
			slideInDownToUp(img9.find('img'))
		} else {
			slideOutDownToUp(img9.find('img'))
		}

		var img10 = $('.page_3_2_10');
		var top10 = img10.offset().top
		if ((top10 - hd + 150) < scroTop && top10 > scroTop) {
			slideInRight(img10)
		} else {
			slideOutRight(img10)
		}

		var img11 = $('.page_3_2_12');
		var top11 = img11.offset().top
		if ((top11 - hd + 150) < scroTop && top11 > scroTop) {
			slideInDownToUp(img11.find('img'))
		} else {
			slideOutDownToUp(img11.find('img'))
		}

		var img12 = $('.page_3_2_14');
		var top12 = img12.offset().top
		if ((top12 - hd + 150) < scroTop && top12 > scroTop) {
			img12.addClass('show').css({
				'animation-delay': '0s'
			})
			$('.page_3_2_16').addClass('show').css({
				'animation-delay': '300ms'
			})
			$('.page_3_2_17').addClass('show').css({
				'animation-delay': '600ms'
			})
			$('.page_3_2_18').addClass('show').css({
				'animation-delay': '900ms'
			})
			$('.page_3_2_19').addClass('show').css({
				'animation-delay': '1200ms'
			})
			slideInRight($('.page_3_2_15').find('img').css({
				'animation-delay': '1500ms'
			}))

		} else {
			img12.removeClass('show')
			$('.page_3_2_16').removeClass('show')
			$('.page_3_2_17').removeClass('show')
			$('.page_3_2_18').removeClass('show')
			$('.page_3_2_19').removeClass('show')
			slideOutRight($('.page_3_2_15').find('img'))
		}
		sct3 = scroTop;
	}
	if (page == 3) {
		

		slideInLeft($('.page_5_1_2').css({
			'animation-duration': '500ms',
			'animation-timing-function': 'ease-out'
		}))
		fadeOut($('.page_5_1_2_1').css({
			'animation-duration': '500ms',
			'animation-delay': '500ms'
		}))
		fadeIn($('.page_5_1_3'))

		var img1 = $('.page_5_1_4');
		var top1 = img1.offset().top
		var height1 = img1.height();
		if ((top1 - hd + 150) < scroTop && top1 + height1 / 2 > scroTop) {
			img1.addClass('addWH').css({
				opacity: 1
			})
			$('.page_5_1_4_3').addClass('moveLR')
		} else {
			img1.removeClass('addWH').css({
				opacity: 0
			})
			$('.page_5_1_4_3').removeClass('moveLR')
		}

		var img2 = $('.page_5_2_6');
		var top2 = img2.offset().top
		var height2 = img2.height();
		if ((top2 - hd + 200) < scroTop && top2 + height2 / 2 > scroTop) {
			slideOutRight(img2.css({
				'animation-duration': '2000ms'
			}))
		} else {
			slideInRight(img2)
		}

		var img3 = $('.page_5_2_2');
		var top3 = img3.offset().top
		var height3 = img3.height();
		if ((top3 - hd + 300) < scroTop && top3 + height3 / 2 > scroTop) {
			slideInUpToDown(img3.find('div'))
		} else {
			slideOutUpToDown(img3.find('div'))
		}

		var img4 = $('.page_5_2_3');
		var top4 = img4.offset().top
		var height4 = img4.height();
		if ((top4 - hd + 150) < scroTop && top4 + height4 / 2 > scroTop) {
			slideInRight(img4.find('img'))
		} else {
			slideOutRight(img4.find('img'))
		}

		var img5 = $('.page_5_2_5');
		var top5 = img5.offset().top
		var height5 = img5.height();
		if ((top5 - hd + 150) < scroTop && top5 + height5 / 2 > scroTop) {
			$('.page_5_2_5_2').addClass('moveTop1')
		} else {
			$('.page_5_2_5_2').removeClass('moveTop1')
		}

		var img6 = $('.page_5_3_1');
		var top6 = img6.offset().top
		var height6 = img6.height();
		if ((top6 - hd + 150) < scroTop && top6 + height6 / 2 > scroTop) {
			img6.addClass('addHeight2').css({
				opacity: 1
			})
			$('.page_5_3_1_3').addClass('moveTop2')
		} else {
			img6.removeClass('addHeight2').css({
				opacity: 0
			})
			$('.page_5_3_1_3').removeClass('moveTop2')
		}

		
		var img7 = $('.page_5_3_2');
		var top7 = img7.offset().top
		var height7 = img7.height();
		if ((top7 - hd + 150) < scroTop && top7 + height7 / 2 > scroTop) {
			slideInUpToDown(img7.find('img'))
		} else {
			slideOutUpToDown(img7.find('img'))
		}

		var img8 = $('.page_5_3_5');
		var top8 = img8.offset().top
		var height8 = img8.height();
		if ((top8 - hd + 150) < scroTop && top8 + height8 / 2 > scroTop) {
			slideInRight($('.page_5_3_5').find('img').css({
				opacity: 1
			}))
			slideInRight($('.page_5_3_6').find('img').css({
				'animation-delay': '400ms',
				opacity: 1
			}))
			slideInRight($('.page_5_3_7').find('img').css({
				'animation-delay': '800ms',
				opacity: 1
			}))
			slideInRight($('.page_5_3_8').find('img'))

		} else {
			slideOutRight($('.page_5_3_5').find('img').css({
				opacity: 0
			}))
			slideOutRight($('.page_5_3_6').find('img').css({
				'animation-delay': '400ms',
				opacity: 0
			}))
			slideOutRight($('.page_5_3_7').find('img').css({
				'animation-delay': '800ms',
				opacity: 1
			}))
			slideOutRight($('.page_5_3_8').find('img'))
		}

		var img9 = $('.page_5_3_4');
		var top9 = img9.offset().top
		var height9 = img9.height();
		if ((top9 - hd + 150) < scroTop && top9 + height9 / 2 > scroTop) {
			img9.find('img').addClass('BigToNormal')
		} else {
			img9.find('img').removeClass('BigToNormal')
		}

		sct4 = scroTop;

	}
	if (page == 4) {
		
		$('.page_2_1_1 img').addClass('normalToBigToNormal');
		slideInDownToUp($('.page_2_1_2').find('img'));

		var img1 = $('.page_2_2_1');
		var top1 = img1.offset().top;
		if ((top1 - hd + 150) < scroTop && top1 > scroTop) {
			img1.addClass('addWidth');
			$('.page_2_2_1_3').addClass('moveLeft');
		} else {
			img1.removeClass('addWidth');
			$('.page_2_2_1_3').removeClass('moveLeft');
		}


		var img2 = $('.page_2_2_2');
		var top2 = img2.offset().top;
		if ((top2 - hd + 150) < scroTop && top2 > scroTop) {
			fadeIn(img2);
		} else {
			fadeOut(img2);
		}

		var img3 = $('.page_2_2_4');
		var top3 = img3.offset().top;
		var height3 = img3.height();
		if ((top3 - hd + 150) < scroTop && top3 + height3 / 2 > scroTop) {
			slideInUpToDown($('.page_2_2_5').find('img'));
			slideInDownToUp($('.page_2_2_6').find('img'));
			slideInUpToDown($('.page_2_2_7').find('img'));
		} else {
			slideOutUpToDown($('.page_2_2_5').find('img'));
			slideOutDownToUp($('.page_2_2_6').find('img'));
			slideOutUpToDown($('.page_2_2_7').find('img'));
		}

		var img4 = $('.page_2_2_9');
		var top4 = img4.offset().top;
		if ((top4 - hd + 150) < scroTop && top4 > scroTop) {
			fadeIn(img4);
		} else {
			fadeOut(img4);
		}

		var img5 = $('.page_2_3_2');
		var top5 = img5.offset().top;
		if ((top5 - hd + 150) < scroTop && top5 > scroTop) {
			img5.addClass('addWidth1');
			$('.page_2_3_2_3').addClass('moveLeft1');
		} else {
			img5.removeClass('addWidth1');
			$('.page_2_3_2_3').removeClass('moveLeft1');
		}

		var img6 = $('.page_2_3_3');
		var top6 = img6.offset().top;
		if ((top6 - hd + 150) < scroTop && top6 > scroTop) {
			slideInLeft(img6);
			$('.page_2_3_3 div').addClass('rotateHalo');
		} else {
			slideOutLeft(img6);
			$('.page_2_3_3 div').removeClass('rotateHalo');
		}

		var img7 = $('.page_2_3_4');
		var top7 = img7.offset().top;
		if ((top7 - hd + 150) < scroTop && top7 > scroTop) {
			fadeIn(img7)
		} else {
			fadeOut(img7)
		}

		var img8 = $('.page_2_4_1');
		var top8 = img8.offset().top;
		if ((top8 - hd + 150) < scroTop && top8 > scroTop) {
			img8.addClass('addWidth2');
			$('.page_2_4_1_3').addClass('moveLeft2');
		} else {
			img8.removeClass('addWidth2');
			$('.page_2_4_1_3').removeClass('moveLeft2');
		}
		
		var img9 = $('.page_2_4_3');
		var top9 = img9.offset().top;
		if ((top9 - hd + 150) < scroTop && top9 > scroTop) {
			slideInLeft(img9)
		} else {
			slideOutLeft(img9)
		}

		var img10 = $('.page_2_4_4');
		var top10 = img10.offset().top;
		var height10 = img10.height();
		if ((top10 - hd + 150) < scroTop && top10 + height10 / 2 > scroTop) {
			slideInRight(img10);
		} else {
			slideOutRight(img10);
		}

		var img11 = $('.page_2_4_5');
		var top11 = img11.offset().top;
		var height11 = img11.height();
		if ((top11 - hd + 150) < scroTop && top11 + height11 / 2 > scroTop) {
			slideInDownToUp(img11.find('img'));
		} else {
			slideOutDownToUp(img11.find('img'));
		}

		var img12 = $('.page_2_4_6');
		var top12 = img12.offset().top;
		var height12 = img12.height();
		if ((top12 - hd + 150) < scroTop && top12 + height12 / 2 > scroTop) {
			fadeIn(img12);
		} else {
			fadeOut(img12);
		}

		var img13 = $('.page_2_4_8');
		var top13 = img13.offset().top;
		if ((top13 - hd + 150) < scroTop && top13 > scroTop) {
			img13.addClass('addHeght1');
			$('.page_2_4_8_3').addClass('moveTop');
		} else {
			img13.removeClass('addHeght1');
			$('.page_2_4_8_3').removeClass('moveTop');
		}

		var img14 = $('.page_2_4_9');
		var top14 = img14.offset().top;
		if ((top14 - hd + 150) < scroTop && top14 > scroTop) {
			fadeIn(img14)
		} else {
			fadeOut(img14)
		}

		var img15 = $('.page_2_4_10');
		var top15 = img15.offset().top;
		if ((top15 - hd + 150) < scroTop && top15 > scroTop) {
			fadeIn(img15)
		} else {
			fadeOut(img15)
		}
		sct5 = scroTop;
	}
}

//由上向下移动
function slideInUpToDown(img) {
	img.css({
		opacity: 1
	}).addClass('animated slideInDown').removeClass('slideOutUp');
}

function slideOutUpToDown(img) {
	img.css({
		// opacity: 0
	}).addClass('animated slideOutUp').removeClass('slideInDown');
}

//由下向上移动
function slideInDownToUp(img) {
	img.css({
		opacity: 1
	}).addClass('animated slideInUp').removeClass('slideOutDown');
}

function slideOutDownToUp(img) {
	img.css({
		// opacity: 0
	}).addClass('animated slideOutDown').removeClass('slideInUp');
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
	}).addClass('animated slideInLeft').removeClass('slideOutLeft');
}

function slideOutLeft(img) {
	img.addClass('animated slideOutLeft').removeClass('slideInLeft');
}

//右侧进入，右侧离开
function slideInRight(img) {
	img.css({
		opacity: 1
	}).addClass('animated slideInRight').removeClass('slideOutRight');
}

function slideOutRight(img) {
	img.addClass('animated slideOutRight').removeClass('slideInRight');
}

//淡入淡出
function fadeIn(e) {
	e.removeClass('animated fadeOut').addClass('animated fadeIn');
}

function fadeOut(e) {
	e.removeClass('animated fadeIn').addClass('animated fadeOut');
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
	}).addClass('animated enlargeImg');
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