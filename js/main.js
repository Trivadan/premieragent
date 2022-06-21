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

    /*----------------------------------------------------*/
    /*  Accordions
    /*----------------------------------------------------*/
    var $accor = $('.accordion');

     $accor.each(function() {
         $(this).toggleClass('ui-accordion ui-widget ui-helper-reset');
         $(this).find('h3').addClass('ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all');
         $(this).find('div').addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom');
         $(this).find("div").hide();
    });

    var $trigger = $accor.find('h3');

    $trigger.on('click', function(e) {
         var location = $(this).parent();

         if( $(this).next().is(':hidden') ) {
              var $triggerloc = $('h3',location);
              $triggerloc.removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
              $triggerloc.find('span').removeClass('ui-accordion-icon-active');
              $(this).find('span').addClass('ui-accordion-icon-active');
              $(this).addClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideDown(300);
         }
         else if( $(this).is(':visible') ) {
              var $triggerloc = $('h3',location);
              $triggerloc.removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
              $triggerloc.find('span').removeClass('ui-accordion-icon-active');
         }
          e.preventDefault();
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


})(window.jQuery);


//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function(){
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function(){
  $(".popup-overlay, .popup-content").removeClass("active");
});





