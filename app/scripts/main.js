
$(function(){
  	'use strict';
  	layout();
  	$('.text').hide();
});
// youtube video thing
var tag = document.createElement('script');

tag.src = '//www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onPlayerReady() {
  	'use strict';
    player.playVideo();
    // Mute!
    player.mute();
    player.setPlaybackRate(0.5);
}

function onYouTubeIframeAPIReady() {
  	'use strict';
    player = new YT.Player('ytplayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}


$( window ).resize(function() {
	layout();
});

$('.btn').click(function(){
    var id = $(this).attr('id');
	if($( '#' + id + '_t').is(':visible')){
		resizeContent('standard');
	} else {
		resizeContent(id);
	}
	// alert('yeah');
});


function layout(){
	var bg_top = $(window).height() * 0.333;
	var bg_left = $(window).width() * 0.333;
	$('#background').outerHeight($(window).height()+bg_top*2);
	$('#background').outerWidth($(window).width()+bg_left*2);
	$('#background').offset({ top: -1 * bg_top, left: -1 * bg_left});
	resizeContent('standard');
	$('#logo').outerHeight($(window).height());
	$('#logo').outerWidth($(window).width());
	// $('#logo').offset({ top: $(window).height()*0.5 - $('#logo').height()*0.5, left: $(window).width()*0.5 - $('#logo').width()*0.5});
}

function resizeContent(situation){
	if(situation === 'standard'){
		$('.text').hide(100);
		$("#content").animate({
	        height: 90 + 'px'
	    }, 100);
		$("#content").animate({
	        width: 280 + 'px'
	    }, 100);
	} else {
		$('.text').hide(100);
		$('#' + situation + '_t').delay(200).fadeIn( 100 );
		$("#content").animate({
	        height: ($('#' + situation + '_t').height() + 90) + 'px'
	    }, 100);

	    // if( $('#' + situation + '_t').outerWidth() != $('#content').outerWidth() ){
			$("#content").animate({
		        width: $('#' + situation + '_t').outerWidth() + 40 + 'px'
		    }, 100);
	    // }
	}
}


$( window ).mousemove(function( event ) {
	var midX = $(window).width()*0.5;
	var midY = $(window).height()*0.5;
	$('#content').offset({ left:  midX - (event.clientX-midX), top: midY - (event.clientY-midY) });
});
// function handleMouseMove(event) {
//     var dot, eventDoc, doc, body, pageX, pageY;

//     event = event || window.event; // IE-ism

// 	document.getElementById('content').style.left = -event.clientX*2 + document.getElementById('body').offsetWidth;	
// 	document.getElementById('content').style.top = -event.clientY*2 + document.getElementById('body').offsetHeight;	


//     // Use event.pageX / event.pageY here
// }