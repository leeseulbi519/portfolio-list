$(document).ready(function(){
   
    //네비메뉴
    var skewWrap=$('.skew-box-wrap');
    var skew=$('.skew-box');
    var skewClose=$('.skew-box-close');
    var page=$('.menu');
    
    skew.click(function(){
        $(this).addClass('open');
        skewWrap.addClass('open');
        $('.menu').css('display','block');
        $('html').css('overflow-y','hidden');
        $('.skew-box-close').css('display','block');
    })
    skewClose.click(function(e){
        e.stopPropagation();
        $(this).css('display','none');
        skew.removeClass('open');
        $('.menu').css('display','none');
        skewWrap.removeClass('open');
        $('html').css('overflow-y','scroll');
    })

    //페이지이동
    page.eq(0).click(function(){
        $(location).attr('href','page1.html');
        skewWrap.css('display','none');
    });
    page.eq(1).click(function(){
        $(location).attr('href','page2.html');
        skewWrap.css('display','none');
    });
    page.eq(2).click(function(){
        $(location).attr('href','portfolio.html');
        skewWrap.css('display','none');
    });
    
    //화면사이즈
    $('body').css({
        'width':$(window).width(),
        'height':$(window).height()
    });
    if($(window).width()>=999){
        $('.container').css({
            'width':$(window).width(),
            'height':$(window).width()*0.55
        });

    }else if($(window).width()<999 && $(window).width()>=450){
        $('.container').css({
            'width':$(window).width(),
            'height':$(window).width()*0.8545
        });

    }else if($(window).width()<450){
        $('.container').css({
            'width':$(window).width(),
            'height':$(window).width()*1.85
        });
        $('.fadeImg>img').click(function(){
            $('.section').addClass('view-sec2-middle');
            $('.sec2-middle').addClass('open');
        });
        $('.desc-close').click(function(e){
            e.stopPropagation();
            $('.sec2-middle').removeClass('open');
            $('.section').removeClass('view-sec2-middle');
            // $('html').css('overflow-y','scroll');
        });
    }
        

    $(window).resize(function(){
        $('body').css({
            'width':$(window).width(),
            'height':$(window).height()
        });
        if($(window).width()>=999){
            $('.container').css({
                'width':$(window).width(),
                'height':$(window).width()*0.55
            });
    
        }else if($(window).width()<999 && $(window).width()>=450){
            $('.container').css({
                'width':$(window).width(),
                'height':$(window).width()*0.8545
            });
    
        }else if($(window).width()<450){
            $('.container').css({
                'width':$(window).width(),
                'height':$(window).width()*1.85
            });
            $('.fadeImg>img').click(function(){
                $('.section').addClass('view-sec2-middle');
                $('.sec2-middle').addClass('open');
                // $('html').css('overflow-y','hidden');
            });
            $('.desc-close').click(function(e){
                e.stopPropagation();
                $('.sec2-middle').removeClass('open');
                $('.section').removeClass('view-sec2-middle');
                // $('html').css('overflow-y','scroll');
            });
        }
    });

    $('.shadow').click(function(){
        $('.shadow').css('display','none');
    })

    

    

    //스크롤 자동이동//
        const elm = document.querySelectorAll('.section');
        const elmCount = elm.length;
        elm.forEach(function(item, index){
        item.addEventListener('mousewheel', function(event){
            event.preventDefault();
            let delta = 0;

            //이벤트 객체가 존재하지 않으면 window.event를 사용
            if (!event) event = window.event;
            // 마우스 휠은 120이 1회 0,-1,1 세가지 값으로 만드려고 쓰는구문
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) {delta = -delta;}
            } 
            // 다른 브라우저(ex.firefox)에서 마우스 휠 이벤트를 처리하기 위해 씀 3은 wheelDelta와 detail 사이의 값 차이를 조정하기 위한 대략적인 비율
            else if (event.detail){
                delta = -event.detail / 3;
            }

            let moveTop = window.scrollY;
            let elmSelector = elm[index];

            // wheel down : move to next section
            if (delta < 0){
                if (elmSelector !== elmCount-1){//마지막섹션이 아니라면 이라는 뜻
                    try{//현재 스크롤 위치에서 다음 섹션 요소의 상단 위치를 더하여, 스크롤된 다음 섹션의 절대적인 상단 위치를 계산
                    moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
                    //e는 예외객체{}는 아무것도 안하겠다
                    }catch(e){}
                }
            }
            // wheel up : move to previous section
            else{
                if (elmSelector !== 0){
                    try{
                    moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
                    }catch(e){}
                }
            }
            window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
        });
    });
    
});







  