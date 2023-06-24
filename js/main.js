(function($) {
    "use strict";

    /*=============================================
    =       Menu sticky & Scroll to top          =
    =============================================*/
    var windows = $(window);
    var screenSize = windows.width();
    var sticky = $('.search-home');
    var $html = $('html');
    var $body = $('body');

    windows.on('scroll', function () {
        var scroll = windows.scrollTop();
        var headerHeight = sticky.height();

        if (screenSize >= 320) {
            if (scroll < headerHeight) {
                sticky.removeClass('is-sticky');
            } else {
                sticky.addClass('is-sticky');
            }
        }
    });

    $(".mobile-menu-active").vsmobilemenu({ menuContainer: ".vs-mobile-menu", expandScreenWidth: 992, menuToggleBtn: ".vs-menu-toggle" });
    var t, a, n, s, i, o, l = "";
    function r() {
        let t = e(".main-menu > .menu-item-has-children > ul"),
            a = e(".main-menu .menu-item-has-children > ul > ul");
        t.each(function () {
            $(window).width() > 991 && (e(this).offset().left + e(this).width() > e(window).width() ? e(this).css({ left: "auto", right: "100%" }) : e(this).css({ left: "0", right: "auto" }));
        }),
            a.each(function () {
                $(window).width() > 991 && e(this).offset().left + e(this).width() > e(window).width() && (e(this).css({ left: "auto", right: "100%" }), e(this).find(".sub-menu").css({ left: "auto", right: "100%" }));
            });
    }

    /*  Team-Slider-Owl-carousel  */
    if($('.feature_property_home3_slider').length){
        $('.feature_property_home3_slider').owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            center:false,
            navText: [
              '<i class="icofont-simple-left"></i>',
              '<i class="icofont-simple-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                520:{
                    items:2,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1366: {
                    items: 4
                },
                1400: {
                    items: 4,
                }
            }
        })
    }

    /*  Team-Slider-Owl-carousel  */
    if($('.blog_home_slider').length){
        $('.blog_home_slider').owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="icofont-simple-left"></i>',
              '<i class="icofont-simple-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                520:{
                    items:2,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1366: {
                    items: 4
                },
                1400: {
                    items: 4
                }
            }
        })
    }

    $('.sidebar_feature_property_slider').owlCarousel({
            animateIn: 'fadeIn',
            loop:true,
            margin:15,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            smartSpeed: 2000,
            singleItem: true,
            navText: [
              '<i class="flaticon-left-arrow-1"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                320:{
                    items: 1,
                    center: false
                },
                480:{
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })

    $('.listing-carousel').owlCarousel({
        loop:false,
        margin:15,
        dots:false,
        nav:true,
        rtl:false,
        autoplayHoverPause:false,
        autoplay: false,
        smartSpeed: 2000,
        singleItem: true,
        items:1,
        navText: [
          '<i class="icofont-simple-left"></i>',
          '<i class="icofont-simple-right"></i>'
        ],
        itemsDesktop : [1239,1],
        itemsTablet : [991,1],
        itemsMobile : [767,1]
    });

    $(function(){
      $('.hide-show').show();
      $('.hide-show span').addClass('show')
      
      $('.hide-show span').click(function(){
        if( $(this).hasClass('show') ) {
          $(this).text('Hide');
          $('input[name="login[password]"]').attr('type','text');
          $(this).removeClass('show');
        } else {
           $(this).text('Show');
           $('input[name="login[password]"]').attr('type','password');
           $(this).addClass('show');
        }
      });
        
        $('form button[type="submit"]').on('click', function(){
            $('.hide-show span').text('Show').addClass('show');
            $('.hide-show').parent().find('input[name="login[password]"]').attr('type','password');
        }); 
    });

    /* --------------------------------------------------------
        Nice Select
    --------------------------------------------------------- */
    $('select').niceSelect();

    /*----------------------------------------------------*/
    /*  Show More Button
    /*----------------------------------------------------*/
    $('.show-more-button').on('click', function(e){
        e.preventDefault();
        $('.show-more').toggleClass('visible');
    });

    $('.listing-carousel').owlCarousel({
        loop:false,
        margin:15,
        dots:false,
        nav:true,
        rtl:false,
        autoplayHoverPause:false,
        autoplay: false,
        smartSpeed: 2000,
        singleItem: true,
        items:1,
        navText: [
          '<i class="icofont-simple-left"></i>',
          '<i class="icofont-simple-right"></i>'
        ],
        itemsDesktop : [1239,1],
        itemsTablet : [991,1],
        itemsMobile : [767,1]
    });

    //LightBox / Fancybox
    $('.lightbox-image').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        helpers : {
            media : {}
        }
    });

    /*-------------------------------------
      Swiper Js
    -------------------------------------*/
    var featureBoxSlider = new Swiper(".featured-thum-slider2", {
    spaceBetween: 5,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 5,
      },
    },
    });
    var featuredBoxThumbs = new Swiper(".feature-box3", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    thumbs: {
      swiper: featureBoxSlider,
    },
    });

   /*-------------------------------------
      Product Image Zoom Js
   -------------------------------------*/
   $('.zoom-image-hover').zoom();

     /*=====================
      Image to background js
      ==========================*/

    $(".bg-top").parent().addClass('b-top'); // background postion top
    $(".bg-bottom").parent().addClass('b-bottom'); // background postion bottom
    $(".bg-center").parent().addClass('b-center'); // background postion center
    $(".bg-left").parent().addClass('b-left'); // background postion left
    $(".bg-right").parent().addClass('b-right'); // background postion right
    $(".bg_size_content").parent().addClass('b_size_content'); // background size content
    $(".bg-img").parent().addClass('bg-size');
    $(".bg-img.blur-up").parent().addClass('blur-up lazyload');
    $('.bg-img').each(function() {

        var el = $(this),
            src = el.attr('src'),
            parent = el.parent();


        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'display': 'block'
        });

        el.hide();
    });

    /*=====================
     Favourite add js
    ==========================*/

    $(".favourite-btn").on("click", function() {
        $(this).toggleClass("active");
    });

    /*========================
    Create post js
    ==========================*/

    $(".create-post").on("click", function() {
        $(this).addClass("active");
    });


    $("#create-overlay").on("click", function() {
        $("body").addClass("create-overlay");
    });

    $(".close-btn").on("click", function() {
        $("body").removeClass("create-overlay");
        $(".create-post ").removeClass("active");
    });


    var myValue;

    function clickGradient(val) {
        myValue = val;
    }
    $(".gradient-bg li").on("click", function() {
        $(".static-section").addClass("d-none");
        $("#bg-post").removeClass();
        $("#bg-post").addClass("bg-post d-block  " + myValue)
    });

    $("#bg-post .close-icon").on("click", function() {
        $(".static-section").removeClass("d-none");
        $("#bg-post").removeClass();
        $("#bg-post").addClass("bg-post");
        $('.Disable').prop("disabled", true);
    });


    $(".modal .gradient-bg li").on("click", function() {
        $(".modal .static-section").addClass("d-none");
        $("#bg-post1").removeClass();
        $("#bg-post1").addClass("bg-post d-block  " + myValue)
    });

    $("#bg-post1 .close-icon").on("click", function() {
        $(".modal .static-section").removeClass("d-none");
        $("#bg-post1").removeClass();
        $("#bg-post1").addClass("bg-post");
        $('.Disable').prop("disabled", true);
    });

    $(".enable").click(function(event) {
        event.preventDefault();
        $('.Disable').prop("disabled", false);
        $('.post-btn').addClass("d-block")
    });

    var content_width = jQuery(window).width();
    if ((content_width) <= '576') {
        $(".create-post").on("click", function() {
            $(".overlay-bg").addClass("show");
            $('body').css({
                'overflow': 'hidden',
            });
        });
        $(".overlay-bg").on("click", function() {
            $(".overlay-bg").removeClass("show");
            $("#bg-post").removeClass();
            $("#bg-post").addClass("bg-post");
            $('body').css({
                'overflow': 'auto',
            });
        });

    }

    // additional input 
    $("#feeling-btn").on("click", function(){
        $("#additional-input").addClass("feeling");
        $("#additional-input").removeClass("place");
        $("#additional-input").removeClass("friends");
        var feeling_activity = $( "#additional-input .feeling-input .form-control").val()
    })
    $("#checkin-btn").on("click", function(){
        $("#additional-input").addClass("place");
        $("#additional-input").removeClass("feeling");
        $("#additional-input").removeClass("friends");
    })
    $("#friends-btn").on("click", function(){
        $("#additional-input").addClass("friends");
        $("#additional-input").removeClass("feeling");
        $("#additional-input").removeClass("place");
    })
    $("#icon-close").on("click", function(){
        $("#additional-input").removeClass("friends");
        $("#additional-input").removeClass("feeling");
        $("#additional-input").removeClass("place");
    })


    /*========================
     App Btn js
    ==========================*/
    $(".app-btn a").on("click", function() {
        $(".app-btn .app-box").addClass("show");
        $(".app-overlay").addClass("show");
        $('body').css({
            'overflow': 'hidden',
        });
    });
    $(".app-overlay").on("click", function() {
        $(".app-btn .app-box").removeClass("show");
        $(".app-overlay").removeClass("show");
        $('body').css({
            'overflow': 'auto',
        });
    });


    /*========================
    React panel js
    ==========================*/

    $(".react-click").on("click", function() {
        $(this).parents(".react-btn").find(".react-box").toggleClass("show");
    });


    /*========================
    Comment js
    ==========================*/
    $(".comment-click").on("click", function() {
        $('.ldr-comments').show();
        $('.comment-section .main-comment').hide();
        setTimeout(function() {
            $('.ldr-comments').hide();
            $('.comment-section .main-comment').show();
        }, 2000);
        $(this).parents(".post-details").find(".comment-section .comments").toggleClass("d-block");
    });

    /*========================
    Mouseup js
    ==========================*/

    $(document).mouseup(function(e) {

        // create post
        var post = $(".create-post");
        if (!post.is(e.target) &&
            post.has(e.target).length === 0) {
            $(".create-post").removeClass("active");
            $("#post-btn").removeClass();
            $("#post-btn").addClass("post-btn d-none");
            $("#post-btn1").removeClass();
            $("#post-btn1").addClass("post-btn d-none");
            $("overlay-bg").removeClass("active");
        }

        // react panel
        var react = $(".react-btn");
        if (!react.is(e.target) &&
            react.has(e.target).length === 0) {
            $(".react-box").removeClass("show");
        }

        // sidebar 
        var sidebar = $(".fixed-sidebar");
        if (!sidebar.is(e.target) &&
            sidebar.has(e.target).length === 0) {
            $(".fixed-sidebar").removeClass("show");
            $("body").removeClass("sidebar-overlay");
        }

        // searchbar 
        var searchbar = $(".search-box");
        if (!searchbar.is(e.target) &&
            searchbar.has(e.target).length === 0) {
            $(".search-box").removeClass("show");
        }

    });

    /*=====================
    Show more/infinite js
    ==========================*/
    $(function() {
        $(".infinite-loader-sec .col-grid-box").slice(0, 5).show();
        var window_width = jQuery(window).width();
        if ((window_width) > '1199') {
            $("#load-more").on('click', function(e) {
                e.preventDefault();
                $(".infinite-loader-sec .col-grid-box:hidden").slice(0, 1).slideDown();
                if ($(".infinite-loader-sec .col-grid-box:hidden").length === 0) {
                    $("#load-more").addClass('no-more');
                }
            });
        }
    });

     //canvas menu
    var navexpander = $('#nav-expander');
    if(navexpander.length){
        $('#nav-expander').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
    }
    var navclose = $('#nav-close');
    if(navclose.length){
        $('#nav-close').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    }

})(window.jQuery);


//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function(){
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function(){
  $(".popup-overlay, .popup-content").removeClass("active");
});

// Based on Israel Eisenberg's variable stroke width articles
// http://owl3d.com/svg/vsw/articles/

// Path simplification based on Simplify.js
// https://mourner.github.io/simplify-js/
$(function(){
var slider = document.getElementById("mortgageType");
var output = document.getElementById("mortgageValue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
});
$(function(){
var slider = document.getElementById("loanType");
var output = document.getElementById("loanvalue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
});

$(function(){
  var $ppc = $('.progress-pie-chart'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents span').html(percent+'%');
});

