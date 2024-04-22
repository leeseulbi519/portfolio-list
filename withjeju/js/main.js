$(document).ready(function(){
    //
  var next = function() {
    var activeSlide = $('.active-slide');
    var nextSlide = activeSlide.next('.mainBannerList li');
    if(nextSlide.length == 0) {
      nextSlide = $('.mainBannerList li').first();
    }
    activeSlide.removeClass("active-slide");
    nextSlide.addClass("active-slide");
  
  };
  var prev = function() {
    var activeSlide = $('.active-slide');
    var prevSlide = activeSlide.prev('.mainBannerList li');
    if(prevSlide.length == 0) {
      prevSlide = $('.mainBannerList li').last();
    }
     activeSlide.removeClass("active-slide");
     prevSlide.addClass("active-slide");
  
  };
  var clickDot = function(dot) {
    var activeSlide = $('.active-slide');
    var i = $(dot).index() + 1;
    var nextSlide = $('.mainBannerList li:nth-child('+i+')');
    activeSlide.removeClass("active-slide");
    nextSlide.addClass("active-slide");
    // $('.mBN').first().addClass("active-dot");
    $('.active-dot').removeClass("active-dot");
    $(dot).addClass("active-dot");
  };
  
  var main = function() {
    $('.mainBannerArrow-next').click(next);
    $('.mainBannerArrow-prev').click(prev);
    $('.mBN').click(function() {
      clickDot(this);
    });
  };

  main();

  //
    var tripNav = $('.trip-nav>li');
    var tripWrap = $('#trip-area>div');
    var tripBtn = document.querySelector('.mo-trip-nav-btn');
    var tripList = document.querySelector('.trip-nav-wrap');
    var sliderTarget;

    $(tripNav).first().addClass('trip-nav-active');
    $(tripWrap).hide().first().show();

    tripBtn.addEventListener('click',function(){
        tripList.classList.add('active');
    })

    function sliderResponse(sliderTarget) {
      $(tripWrap).fadeOut(100).removeClass('active').eq(sliderTarget).fadeIn().addClass('active');
      $(tripNav).removeClass('trip-nav-active').eq(sliderTarget).addClass('trip-nav-active');
      $(tripList).removeClass('active');
    }
  
  // pager controls
  $(tripNav).on('click', function() {
      if ( !$(this).hasClass('trip-nav-active') ) {
          sliderTarget = $(this).index();
          sliderResponse(sliderTarget);
        }
    });








    /**/
    $('body').css({width:$(window).width()})

    if($(window).width()>=1400){
        $('.info-left').css('width',$(window).width() - 660 )
        $('.info-right').css({
            'width' : '600px',
            'padding-left' : '60px',
            'padding-right' : '60px'
        })
    }else if($(window).width()>985 && $(window).width()<1400){
        $('.info-left').css('width',$(window).width() - 560 )
        $('.info-right').css({
            'width' : '500px',
            'padding-left' : '30px',
            'padding-right' : '30px'
        })
    }else if($(window).width()<=985){
        $('.info-left').css('width','100%')
        $('.info-right').css({
            'width' : '100%',
            'padding-left' : '0px',
            'padding-right' : '0px'
        })
    }    

    
    if($(window).width()>=1200){ 
        $('.info-icon>li>a').css('font-size','20px');
        $('.info-banner p').css('font-size','20px');
        $('.info-banner h4').css('font-size','38px');
    }else if($(window).width()<1200 && $(window).width()>1000){
        $('.info-icon>li>a').css('font-size','17px');
        $('.info-banner p').css('font-size','14px');
        $('.info-banner h4').css('font-size','eopx');
    }else if($(window).width()<=1000 && $(window).width()>767){
        $('.info-icon>li>a').css('font-size','15px');
        $('.info-banner p').css('font-size','14px');
        $('.info-banner h4').css('font-size','28px');
    }else if($(window).width()<=767){
        $('.info-icon>li>a').css('font-size','13px');
        $('.info-banner p').css('font-size','12px');
        $('.info-banner h4').css('font-size','15px');
    }

    // var bg = $('.trip-wrap.active .trip-bg');
    // var bgCurrent = $('.trip-wrap.active .slick-current img');
    // var slideWrap = $('.trip-wrap.active');
    // var slideBg = slideWrap.find('.slick-track');
    // $(slideBg).each(function(){
    //     if (slideWrap.find('.slick-active')){
    //         var path = bgCurrent.attr('src');
    //         bg.attr('src',path).css('opacity','0').stop().animate({'opacity':1},1000);
    //     }
    // })


    $(window).resize(function(){
        $('body').css({width:$(window).width()})

        if($(window).width()>=1400){
            $('.info-left').css('width',$(window).width() - 660 )
            $('.info-right').css({
                'width' : '600px',
                'padding-left' : '60px',
                'padding-right' : '60px'
            })
        }else if($(window).width()>985 && $(window).width()<1400){
            $('.info-left').css('width',$(window).width() - 560 )
            $('.info-right').css({
                'width' : '500px',
                'padding-left' : '30px',
                'padding-right' : '30px'
            })
        }else if($(window).width()<=985){
            $('.info-left').css('width','100%')
            $('.info-right').css({
                'width' : '100%',
                'padding-left' : '0px',
                'padding-right' : '0px'
            })
        }

        if($(window).width()>=1200){ 
            $('.info-icon>li>a').css('font-size','20px');
            $('.info-banner p').css('font-size','20px');
            $('.info-banner h4').css('font-size','38px');
        }else if($(window).width()<1200 && $(window).width()>1000){
            $('.info-icon>li>a').css('font-size','17px');
            $('.info-banner p').css('font-size','14px');
            $('.info-banner h4').css('font-size','30px');
        }else if($(window).width()<=1000 && $(window).width()>767){
            $('.info-icon>li>a').css('font-size','15px');
            $('.info-banner p').css('font-size','14px');
            $('.info-banner h4').css('font-size','28px');
        }else if($(window).width()<=767){
            $('.info-icon>li>a').css('font-size','13px');
            $('.info-banner p').css('font-size','12px');
            $('.info-banner h4').css('font-size','15px');
        }
    })


})
