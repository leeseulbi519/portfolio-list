$(document).ready(function(){
    var nav = $("#nav ul li");
    var cont = $("#contents > div");
    var contain = $('#contents>div>div');

    //section 하단버튼으로 슬라이드///
    $('.container>a').on('click', function(e){
        var target = $($(this).attr('href'));
        if(target.length){
            e.preventDefault();
            $('html, body').animate({scrollTop:target.offset().top}, 500);
        }
    });

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        var section2 = (wScroll - $("#section2").offset().top);
        
        //nav active 추가하기//
        for(i=0; i<=4; i++){
            if(wScroll >= cont.eq(i).offset().top){
                nav.removeClass("active");
                nav.eq(i).addClass("active");
            }
        }
        //1. 네비게이션 section1에선 가리기 //
        if(section2 < 0){
            $('.menu').css('left',section2 + 'px');
        }else{
            $('.menu').css('left', '0px');
        }
        
    });
    

    // navigation 메뉴로 슬라이드
    nav.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        var section = cont.eq(index);
        var offset = section.offset().top;
        var wWidth = $(window).width();
        if(wWidth > 767){
            $("html,body").animate({ scrollTop:offset },800,"easeInSine");
        }else{
            $("html,body").animate({ scrollTop:offset },800,"easeInSine",function(){
                target.parent().slideUp();
            });
        }
    });

    $(".mNav").click(function(){
        nav.parent().slideToggle();
    });

    // 화면 크기가 767 이상일 때 style="display:none" 삭제
    $(window).resize(function(){
        var wWidth = $(window).width();
        if(wWidth > 767 && $(".menu").is(":hidden") ){
            $(".menu").removeAttr("style");
        }
    });


    var uxuiBoxWrap=$('#section4>.container>div');
    uxuiBoxWrap.each(function(i){
        $(this).children(i).click(function(){
            $(this).removeClass('UXUI-unclick').addClass('UXUI-click').prependTo(uxuiBoxWrap)
            $('.UXUI-back').show(400);
            $('.UXUI-img').addClass('UXUI-img-active')
            uxuiBoxWrap.children().not($(this)).removeClass('UXUI-click').addClass('UXUI-unclick');
            uxuiBoxWrap.children().not($(this)).find('UXUI-img').removeClass('UXUI-img-active');
        });
    });

    $('.UXUI-back').click(function(){
        $('.UXUI-img').removeClass('UXUI-img-active');
        uxuiBoxWrap.children().removeClass('UXUI-click UXUI-unclick');
        $(this).hide(400);
    });



    //화면사이즈
    $('body').css({
         'width':$(window).width(),
         'height':$(window).height()
    });

    if($(window).width()>=1009){
        contain.css({
            'width':$(window).width(),
            'height':$(window).width()*0.41
        })
    }else if($(window).width()>585 && $(window).width()<1009){
        contain.css({
            'width':$(window).width(),
            'height':$(window).width()*.78
        })
    }
    else if($(window).width()<=585){
        contain.css({
            'width':$(window).width(),
            'height':$(window).width()*1.28
        })
    }

    $(window).resize(function(){
        $('body').css({
            'width':$(window).width(),
            'height':$(window).height()
       });
       $('#roller1').css('left',0);
       $('#roller1-1').css('left',$('.roller-list1').width());
       $('#roller2').css('left',0);
       $('#roller2-1').css('left',-$('.roller-list2').width()); 
       $('#roller3').css('left',0);
       $('#roller3-1').css('left',$('.roller-list3').width());
       
       if($(window).width()>=1009){
        contain.css({
            'width':$(window).width(),
            'height':$(window).width()*0.41
            })
        }else if($(window).width()>585 && $(window).width()<1009){
            contain.css({
                'width':$(window).width(),
                'height':$(window).width()*.78
            })
        }else if($(window).width()<=585){
            contain.css({
                'width':$(window).width(),
                'height':$(window).width()*1.28
            })
        }
    })


    //롤링 배너 복제본 생성
    let roller1 = $('.roller-list1');
    roller1.attr('id','roller1');

    let roller2 = $('.roller-list2');
    roller2.attr('id','roller2');

    let roller3 = $('.roller-list3');
    roller3.attr('id','roller3');

    //부착, 원본, 복제본 배너 위치 지정
    let clone1 = roller1.clone();
    clone1.attr('id','roller1-1');
    $('.roller-inner1').append(clone1);

    let clone2 = roller2.clone();
    clone2.attr('id','roller2-1');
    $('.roller-inner2').append(clone2);

    let clone3 = roller3.clone();
    clone3.attr('id','roller3-1');
    $('.roller-inner3').append(clone3);

    //회전 배너 너비값
    $('#roller1').css('left',0);
    $('#roller1-1').css('left',$('.roller-list1').width());

    $('#roller2').css('left',0);
    $('#roller2-1').css('left',-$('.roller-list2').width());

    $('#roller3').css('left',0);
    $('#roller3-1').css('left',$('.roller-list3').width());

    //클래스 할당
    roller1.addClass('original1');
    roller2.addClass('original2');
    roller3.addClass('original3');
    clone1.addClass('clone1');
    clone2.addClass('clone2');
    clone3.addClass('clone3');

    //sec2-이미지 auto slide
    function fadeOut(){
        var showImg=$('.sec2-profile-img img:eq(0)');
        var nextImg=$('.sec2-profile-img img:eq(1)');
        nextImg.addClass('actImg');
        nextImg.css('opacity',0).animate({'opacity':1},1300,function(){
            showImg.appendTo('.sec2-profile-img').removeClass('actImg');
        });
   }
   
    Time=setInterval(fadeOut,4000);
    $('.sec2-profile-img img').hover(function(){
            clearInterval(Time);
        },function(){
            Time=setInterval(fadeOut,4000);
        });
});
