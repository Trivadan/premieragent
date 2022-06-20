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
    /*  Listing Layout Switcher
    /*----------------------------------------------------*/
    function gridLayoutSwitcher() {

        var listingsContainer = $('.listings-container');

        // switcher buttons / anchors
        if ( $(listingsContainer).is(".list-layout") ) {
            owlReload();
            $('.layout-switcher a.grid, .layout-switcher a.grid-three').removeClass("active");
            $('.layout-switcher a.list').addClass("active");
        }

        if ( $(listingsContainer).is(".grid-layout") ) {
            owlReload();
            $('.layout-switcher a.grid').addClass("active");
            $('.layout-switcher a.grid-three, .layout-switcher a.list').removeClass("active");
            gridClear(2);
        }

        if ( $(listingsContainer).is(".grid-layout-three") ) {
            owlReload();
            $('.layout-switcher a.grid, .layout-switcher a.list').removeClass("active");
            $('.layout-switcher a.grid-three').addClass("active");
            gridClear(3);
        }


        // grid cleaning
        function gridClear(gridColumns) {
            $(listingsContainer).find(".clearfix").remove();
            $(".listings-container > .listing-item:nth-child("+gridColumns+"n)").after("<div class='clearfix'></div>");
        }


        // objects that need to resized
        var resizeObjects =  $('.listings-container .listing-img-container img, .listings-container .listing-img-container');

        // if list layout is active
        function listLayout() {
            if ( $('.layout-switcher a').is(".list.active") ) {

                $(listingsContainer).each(function(){
                    $(this).removeClass("grid-layout grid-layout-three");
                    $(this).addClass("list-layout");
                });

                $('.listing-item').each(function(){
                    var listingContent = $(this).find('.listing-content').height();
                    $(this).find(resizeObjects).css('height', ''+listingContent+'');
                });
            }
        } listLayout();

        $(window).on('load resize', function() {
            listLayout();
        });


        // if grid layout is active
        $('.layout-switcher a.grid').on('click', function(e) { gridClear(2); });

        function gridLayout() {
            if ( $('.layout-switcher a').is(".grid.active") ) {

                $(listingsContainer).each(function(){
                    $(this).removeClass("list-layout grid-layout-three");
                    $(this).addClass("grid-layout");
                });

                $('.listing-item').each(function(){
                    $(this).find(resizeObjects).css('height', 'auto');
                });

            }
        } gridLayout();


        // if grid layout is active
        $('.layout-switcher a.grid-three').on('click', function(e) { gridClear(3); });

        function gridThreeLayout() {
            if ( $('.layout-switcher a').is(".grid-three.active") ) {

                $(listingsContainer).each(function(){
                    $(this).removeClass("list-layout grid-layout");
                    $(this).addClass("grid-layout-three");
                });

                $('.listing-item').each(function(){
                    $(this).find(resizeObjects).css('height', 'auto');
                });

            }
        } gridThreeLayout();


        // Mobile fixes
        $(window).on('resize', function() {
            $(resizeObjects).css('height', '0');
            listLayout();
            gridLayout();
            gridThreeLayout();
        });

        $(window).on('load resize', function() {
            var winWidth = $(window).width();

            if(winWidth < 992) {
                owlReload();

                // reset to two columns grid
                gridClear(2);
            }

            if(winWidth > 992) {
                if ( $(listingsContainer).is(".grid-layout-three") ) {
                    gridClear(3);
                }
                if ( $(listingsContainer).is(".grid-layout") ) {
                    gridClear(2);
                }
            }

            if(winWidth < 768) {
                if ( $(listingsContainer).is(".list-layout") ) {
                    $('.listing-item').each(function(){
                        $(this).find(resizeObjects).css('height', 'auto');
                    });
                }
            }

            if(winWidth < 1366) {
                if ( $(".fs-listings").is(".list-layout") ) {
                    $('.listing-item').each(function(){
                        $(this).find(resizeObjects).css('height', 'auto');
                    });
                }
            }
        });


        // owlCarousel reload
        function owlReload() {
            $('.listing-carousel').each(function(){
                $(this).data('owlCarousel').reload();
            });
        }


        // switcher buttons
        $('.layout-switcher a').on('click', function(e) {
            e.preventDefault();

            var switcherButton = $(this);
            switcherButton.addClass("active").siblings().removeClass('active');

            // reset images height
            $(resizeObjects).css('height', '0');

            // carousel reload
            owlReload();

            // if grid layout is active
            gridLayout();

            // if three columns grid layout is active
            gridThreeLayout();

            // if list layout is active
            listLayout();

        });

    } gridLayoutSwitcher();


})(window.jQuery);


//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function(){
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function(){
  $(".popup-overlay, .popup-content").removeClass("active");
});





