
/* PARALLAX CONFIG  ----------- */

		var headerParallax = jQuery('header');
		var smallHighlight1 = jQuery('.bg1');
		var smallHighlight2 = jQuery('.bg2');
		var singleHighlight = jQuery('.single');

/* END PARALLAX CONFIG  ----------- */


/* DOCUMENT READY  ----------- */
jQuery(document).ready(function() {

		/* navigation local scroll  ----------- */
		jQuery("ul.nav").localScroll({ 
				event:'click', 
				hash:true,
				easing:'easeInQuad', 
				duration:1000,
				offset:-45
		});

		/* active links on navigation bar  ----------- */
		jQuery('body').scrollspy({ offset: 300,target: 'nav' })

		/* activate bootstrap carousel  ----------- */
		jQuery(".carousel").carousel({
				interval: 5000,
				pause: "none"
		});

		/* enable swiping on mobile devices  ----------- */
		jQuery(".carousel-inner").swipe( {
				swipeLeft:function(event, direction, distance, duration, fingerCount) {
						jQuery(this).parent().carousel('prev');
				},
				swipeRight: function() {
						jQuery(this).parent().carousel('next');
				},
				threshold:0
		});

		/* fitVids init - responsive videos  ----------- */
		jQuery("body").fitVids();

		/* prettyPhoto init - image lightbox  ----------- */
		jQuery("a[rel^='prettyPhoto']").prettyPhoto({
				animation_speed: 'fast',			/* fast/slow/normal */
				slideshow: 5000,					/* false OR interval time in ms */
				autoplay_slideshow: false,			/* true/false */
				opacity: 0.80,					/* Value between 0 and 1 */
				show_title: true,					/* true/false */
				allow_resize: true,				/* Resize the photos bigger than viewport. true/false */
				default_width: 500,
				default_height: 344,
				theme: 'pp_default',				/* light_rounded / dark_rounded / light_square / dark_square / facebook */
				horizontal_padding: 20,				/* The padding on each side of the picture */
				autoplay: false,					/* Automatically start videos: True/False */
		});    

		/* CSS3 animations  ----------- */
		jQuery(".animate").waypoint(function(direction) {
				var animation = jQuery(this).attr("data-animate");
				
				if (direction == 'down') {
						jQuery(this).addClass(animation);
						jQuery(this).addClass('animated');
				}
				else {
						jQuery(this).removeClass(animation);
						jQuery(this).removeClass('animated');
				}
		}, { offset: '100%' });
				
		var ww = jQuery(window).width();
		if(ww < 992) {
				jQuery.waypoints('disable');
		};

}); /* END DOCUMENT READY  ----------- */


/* FUNCTIONS  ----------- */

		/* scroll down navigation  ----------- */
		jQuery(function() {
				var bar = jQuery('nav');
				var top = bar.css('top');
				var ww = jQuery(window).width();
				var navigationHeight = -jQuery('.collapse').height();
				var mobileTop = Math.floor(navigationHeight - 60);
				
				jQuery(window).scroll(function() {
						if(jQuery(this).scrollTop() > 310) {
								bar.stop().animate({top : '0'}, 300);
						} else {
								if(ww < 768) {
										bar.stop().animate({top : mobileTop}, 600);
								} else {
										bar.stop().animate({top : top}, 300);
								}
						}  
				});
		});

		/* parallax init  ----------- */		
		jQuery(function() {
				'use strict';
				$(document).ready(function(){
						$(window).bind('load', function () {
								parallaxInit();						  
						});
						function parallaxInit() {
								testMobile = isMobile.any();
								if (testMobile == null){
										headerParallax.parallax("50%", 1);
										smallHighlight1.parallax("50%", 0.1);
										smallHighlight2.parallax("50%", 0.1);
										singleHighlight.parallax("100%", 0.1);
								}
						}	
						parallaxInit();	 
				});	

				/* mobile detect  ----------- */
				var testMobile;
				var isMobile = {
						Android: function() {
								return navigator.userAgent.match(/Android/i);
						},
						BlackBerry: function() {
								return navigator.userAgent.match(/BlackBerry/i);
						},
						iOS: function() {
								return navigator.userAgent.match(/iPhone|iPad|iPod/i);
						},
						Opera: function() {
								return navigator.userAgent.match(/Opera Mini/i);
						},
						Windows: function() {
								return navigator.userAgent.match(/IEMobile/i);
						},
						any: function() {
								return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
						}
				};
		});
		
		/* send email  ----------- */
		jQuery(function() {
				jQuery('.error').hide();
				jQuery("#send-mail").click(function() {
						jQuery('.error').hide();
						var name = jQuery("input#name").val();
						if (name == '' ) {
								jQuery("span#name_error").show();
								return false;
						}
						var email = jQuery("input#email").val();
						if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
								jQuery("span#email_error").show();
								return false;
						}
						var user_subject = jQuery("input#user_subject").val();
						if (user_subject == '') {
								jQuery("span#user_subject_error").show();
								return false;
						}
						var message = jQuery("textarea#message").val();
						if (message == '') {
								jQuery("span#message_error").show();
								return false;
						}
						else {
								var dataString = 'name='+ name + '&email=' + email + '&user_subject=' + user_subject + '&message=' + message;
								jQuery("#response-box").css("display", "block");
								jQuery("#response-box").html("Sending...");
								jQuery("#response-box").fadeIn("slow");
								setTimeout("send('"+dataString+"')",2000);
						}
				
						var dataString = 'name='+ name + '&email=' + email + '&user_subject=' + user_subject + '&message=' + message;
						jQuery.ajax({
								type: "POST",
								url: "send-mail.php",
								data: dataString,
								cache: false,
								success: function() {
										jQuery("#response-box").fadeIn("slow");
										jQuery('#response-box').html("<p>Your message has been sent and we will be in touch soon!</p>");
										setTimeout('jQuery("#response-box").fadeOut("slow")',2000);
										jQuery('.contact-form').find("input[type=text], input[type=email], textarea").val('')
								}
						});
						return false;
				});
		});