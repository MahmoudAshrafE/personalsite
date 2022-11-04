$(document).ready(function () {
    $(".list-dis").click(function () {
        $(".nav-list").slideDown(1000)
        $("body").css({
            overflowY: "hidden",
        })
    });
    $(".fa-close").click(function () {
        $(".nav-list").slideUp(1000, function () {
            $("body").css({
                overflowY: "scroll",
            });
        });
    });
    'use strict';
    $('.fa-arrow-circle-up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.fa-arrow-circle-up').fadeIn();
        } else {
            $('.fa-arrow-circle-up').fadeOut();
        }
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.Navbar-header').css("background-color","rgb(37, 34, 34)")
        }
        else{
            $('.Navbar-header').css("background-color","rgba(0, 0, 0, 0.4)")
        }
    });
    $('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
//*************************************** */
$(".li-hover").click(function () {
    $(".nav-list").slideUp(1000, function () {
        $("body").css({
            overflowY: "scroll",
        });
    });
});
$('.portfolio-btn1').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".portfolio-sec").offset().top
    }, 800);
});
$('.btn-poritfolio').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".portfolio-sec").offset().top
    }, 800);
});
$('.contact-btn1').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".contact-sec").offset().top
    }, 800);
});

$('.aboutme-btn1').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".about-me-sec").offset().top
    }, 800);
});
/*************************************** */





    $('.fa-moon-o').on('click', function () {
        $('.fa-moon-o').toggleClass("fa-moon-dark-mode");

        
        $('section.img-hed').toggleClass("img-hed-dark-mode");

        $('section.about-me-sec').toggleClass("about-me-sec-dark-mode");

        $('section.portfolio-sec').toggleClass("portfolio-sec-dark-mode");

        $('section.nav-list').toggleClass("nav-list-dark-mode");

        
        $('section.social-media-sec').toggleClass("social-media-sec-dark-mode");
        
        $('section.contact-sec').toggleClass("contact-sec-dark-mode");

        $('footer.footer-web').toggleClass("footer-web-dark-mode");
        
    });
    
    
});
$(window).on("load",function(){      //when load this website
    $("html, body").animate({ scrollTop: 0 });
    $(".lds-hourglass").fadeOut(3000,function(){
        $(this).parent().fadeOut(100,function(){
            $(this).remove();
        })
    });
});
