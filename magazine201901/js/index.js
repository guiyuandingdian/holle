var wd = window.screen.width,
	count = 0,
	magLeft = 0,
	style = 0,
	search = window.location.search;
if(search) {
	var text = search.substring(1, search.length);
	var content = text.replace(/=/g, ':').split('&').join(',');
	var json = eval('(' + '{' + content + '}' + ')');
	style = json.style;
	
}
var img = [],
	len = imgArr.length,
	flag = 0;
for(var i = 0; i < len; i++) {
	img[i] = new Image();
	img[i].src = imgArr[i];
	img[i].onload = function() {
		flag++;
		if(flag==len){
		$('.containerVolvo').show();
		if(style == 1) {
			magLeft = magLeft - 0.68 * wd;
			$('.coverImg').css({
				width: wd * 1.68,
				height: 815 / 750 * wd,
				'margin-left': magLeft
			});
			count = 1;
			inCatalog();
			inListCover();
		} else {
			$('.coverImg').css({
				width: wd * 1.68,
				height: 815 / 750 * wd,
				'margin-left': magLeft
			});
			inCatalog();
		}
		}

	}
}
$(window).scroll(function() {
	scroTop = $(window).scrollTop();
	pages();
})
window.onbeforeunload = function() {
	window.scrollTo(0, 0);
}
$(function() {

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

	var startX, startY, moveEndX, moveEndY, X, Y;
	$('.coverImg').on('touchstart', function(e) {
		//					console.log('1');
		startX = e.originalEvent.changedTouches[0].pageX,
			startY = e.originalEvent.changedTouches[0].pageY;
	})
	$('.coverImg').on('touchend', function(e) {
		moveEndX = e.originalEvent.changedTouches[0].pageX,
			moveEndY = e.originalEvent.changedTouches[0].pageY,
			X = moveEndX - startX,
			Y = moveEndY - startY;
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
			$('.titlePic img').attr('src', 'images/content.png');
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
			$('.titlePic img').attr('src', 'images/title_1.png');
			outListCover();
		}
	});

})
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
	slideOutRight($('.listCover_1'));
	slideOutRight($('.listCover_2'));
	slideOutRight($('.listCover_3'));
	slideOutRight($('.listCover_4'));
	slideOutRight($('.listCover_5'));
	fadeOut($('.coverFont'));

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