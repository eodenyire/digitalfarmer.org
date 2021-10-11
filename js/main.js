$(document).ready(function ($) {

    $('.full-page').css('height', 'value');

    $(function () {

        $('#Projects_datefilter').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });

        $('#Projects_datefilter').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        });

        $('#Projects_datefilter').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });
        $('.page-excerpt').each(function() {
            if ($(this).html()=="") {
                console.log($(this).html());
                $(this).hide();
            }
        });
    });

    $('.user-name').click(function() {
        $(this).toggleClass('open');
        $('.option-list').slideToggle();
    });

    $('#splash-trigger').click(function() {
        $('body').removeClass('splash');
        $('.splash-wrap').fadeOut(function () {
           $('.splash-page').fadeOut();
        });
        
    });

    // Custom select on the homepage starts
    $("select").change(function () {
        var str = "";
        str = $(this).find("option:selected").text();
        $(this).parent().find(".out").text(str);
    });

    $("select").each(function (index, el) {
        var str = "";
        str = $(this).find("option").first().text();
        var this_id = ((this).id);
        var selected_text = ( $("#" + this_id + " :selected").text());
        //$(this).parent().find(".out").text(str);
        $(this).parent().find(".out").text(selected_text);
    });
    // Custom select on the homepage ends

    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        pause: 6500
    });

    // Home Items Slider starts

    $('.focus-group').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 8,
      slidesToScroll: 8,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 6,
            slidesToScroll:6,
            dots: false
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
             dots: false
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
             dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
             dots: false
          }
        },
        {
          breakpoint:500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

      // Home Items Slider ends

    // Faq accordion starts
        var allPanels = $('.accordion > dd').hide();   
        $('.accordion > dt > a').click(function() {
          $('.accordion > dt > a').removeClass('active');
          $(this).addClass('active');
          allPanels.slideUp();
          $(this).parent().next().slideDown();
          return false;
        });
        $(".accordion > dt > a").first().trigger('click');
    // Faq accordion ends

    $('.lightbox-trigger, .user_profile_avatar').click(function () {
        //populate the ligntbox before open
        var profile_id = ($(this).data("id"));
        var container_id = "user_" + profile_id;
        var container_selector = "#user_" + profile_id;
        var user_profile_name = $(container_selector).find('.user_profile_name');
        var user_profile_avatar = $(container_selector).find('.user_profile_avatar');
        console.log(user_profile_name.text());
        $('#team_member_popup_container').find('.team_member_image').attr("src", user_profile_avatar.attr('src'));
        $('#team_member_popup_container').find('.team_member_name').text(user_profile_name.text());
        $('#team_member_popup_container').find('.team_member_title').text($(container_selector).find('.user_profile_title').text());
        $('#team_member_popup_container').find('.team_member_details').html($(container_selector).find('.user_profile_details').text());


        $('body').addClass('lightbox-open')
    });

    $('.help-trigger').click(function () {
        $('body').addClass('lightbox-open')
    });

    $('.clickable-trans, .close-modal').click(function () {
        $('body').removeClass('lightbox-open')
    });


    $('.tooltip-icon').click(function () {
        $('.tooltip-text').slideUp();
        $('.tooltip-icon').removeClass('active');
        $(this).toggleClass('active');
        $(this).parent().find('.tooltip-text').slideToggle();
    });

    



    $('.menu-trigger').click(function () {
        $('body').toggleClass('nav-open');
    });

    $('.menu-open-over').click(function () {
        $('body').removeClass('nav-open');
    });

    // $('.single-partner').click(function() {
    //    $('.single-partner').removeClass('visible');
    //    $(this).addClass('visible');
    // });

    $('.sub-trigger').click(function () {
        $('.sub-menu').slideToggle();
        // $(this).parent().find('.sub-menu').slideToggle();
    });


    $(".fancyGallery")
        //.attr('rel', 'galleryqq')
        .fancybox({
            padding: 0
        });

    $('.fancybox').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',

        helpers: {
            title: {
                type: 'inside'
            }
        }
    });

    /*
     *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
     */
    $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            prevEffect: 'none',
            nextEffect: 'none',

            arrows: false,
            helpers: {
                media: {},
                buttons: {}
            }
        });

    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize < 1100) {

            // console.log("screen width is less than 960");
        }
        else {
            // console.log("screen width is more than 960");
            
            (function ($) {
                "use strict";

                // Detecting IE
                var oldIE;
                if ($('html').is('.ie7, .ie8, .ie9')) {
                    oldIE = true;
                }

                if (oldIE) {

                } else {
                    $(".project-left, .project-right").stick_in_parent({offset_top:100});//sticky sidebar
                    
                    var inputs = document.querySelectorAll('.inputfile');
                    Array.prototype.forEach.call(inputs, function (input) {
                        var label = input.nextElementSibling,
                            labelVal = label.innerHTML;

                        input.addEventListener('change', function (e) {
                            var fileName = '';
                            if (this.files && this.files.length > 1)
                                fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);
                            else
                                fileName = e.target.value.split('\\').pop();

                            if (fileName)
                                label.querySelector('span').innerHTML = fileName;
                            else
                                label.innerHTML = labelVal;
                        });
                    });
                }

            }(jQuery));
        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

        //IE8 placeholder
       if(!Modernizr.input.placeholder){
     
          $('[placeholder]').focus(function() {
              var input = $(this);
              if (input.val() == input.attr('placeholder')) {
              input.val('');
              input.removeClass('placeholder');
              }
            }).blur(function() {
              var input = $(this);
              if (input.val() == '' || input.val() == input.attr('placeholder')) {
              input.addClass('placeholder');
              input.val(input.attr('placeholder'));
              }
            }).blur();
            $('[placeholder]').parents('form').submit(function() {
              $(this).find('[placeholder]').each(function() {
              var input = $(this);
              if (input.val() == input.attr('placeholder')) {
                input.val('');
              }
              });
            });
         
          }


}); // Document.Ready ends


$(window).ready(function ($) {
    var windowHeight = $(window).height();

    var bodyHeight = $('body').height();


    windowHeight = parseInt(windowHeight) > parseInt(bodyHeight) ? windowHeight : bodyHeight;

    var bannerHeight = windowHeight - 210;
    var sectionHeight = windowHeight - 45;
    
    if ($(window).width() < 1367) {
            bannerHeight = windowHeight - 160;
        }
        else {
            bannerHeight = windowHeight - 210;
    }
    $('.homepage-banner .bx-viewport, .homepage-banner .bxslider li, .homepage-banner .full-bg').css('height', bannerHeight);
    $('.section').css('height', sectionHeight);

    $('.common-col, .single-focus, .footer-column, .team-details, .single-team, .divisional-container, .each-division, .photo-warp, .press-release-excerpt, .event-inner, .single-project-main.know .project-left, .single-project-main.know .project-right, .single-logo, .single-funding, .single-project, .image-area, .form-area, .login-right, .login-left').matchHeight();

    $('.pie-cta').click(function() {
       $('.pie-overlay').fadeIn();
    });

    $('.pie-overlay, .close').click(function() {
       $('.pie-overlay').fadeOut();
    });

    $('.datagrid').click(function(event) {
      event.stopPropagation();
    });
    
});//window.load ends

$(window).resize(function () {
    
});//window.resize ends


$(window).scroll(function () {
    if ($(document).scrollTop() > 84) {
        $("#header-home").addClass("header-fixed").animate({"top": 0});
    } else {
        $("#header-home").removeClass("header-fixed").stop(true, false).removeAttr("style");
    }
});//window.scroll ends;