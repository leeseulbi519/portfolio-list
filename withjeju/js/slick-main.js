$(document).ready(function(){
    $('.trip1').slick({
      slide: 'div',        //슬라이드될 태그
      infinite : false,     //무한 반복 옵션 기본값 true  
      slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)모션 시간 (얼마나 빠른속도로 넘어가는지)(1000ms = 1초) 곧, 슬라이드 사이에 넘어가는 속도
      dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부, 슬라이더 아래에 도트 네비게이션 버튼 표시 여부(true or false) ▶기본값 false
      prevArrow : $('#trip-wrap1 .trip-prev'), //이전 화살표만 변경
      nextArrow : $('#trip-wrap1 .trip-next'), //다음 화살표만 변경
      draggable : true,     //드래그 가능 여부 
      touchMove : true,
      swipe : true,	
      variableWidth: true,        //사진마다 width의 크기가 다른가?(true or false) ▶기본값 false
      rows: 1,                    //이미지를 몇 줄로 표시할지 개수
      slidesPerRow: 1,            //보여질 행의 수 (한 줄, 두 줄 ... )
      customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title');
      }
    })

    $('.trip2').slick({
      slide: 'div',        //슬라이드될 태그
      infinite : false,     //무한 반복 옵션 기본값 true  
      slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)모션 시간 (얼마나 빠른속도로 넘어가는지)(1000ms = 1초) 곧, 슬라이드 사이에 넘어가는 속도
      dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부, 슬라이더 아래에 도트 네비게이션 버튼 표시 여부(true or false) ▶기본값 false
      prevArrow : $('#trip-wrap2 .trip-prev'), //이전 화살표만 변경
      nextArrow : $('#trip-wrap2 .trip-next'), //다음 화살표만 변경
      draggable : true,     //드래그 가능 여부 
      touchMove : true,
      swipe : true,	
      variableWidth: true,        //사진마다 width의 크기가 다른가?(true or false) ▶기본값 false
      rows: 1,                    //이미지를 몇 줄로 표시할지 개수
      slidesPerRow: 1,            //보여질 행의 수 (한 줄, 두 줄 ... )
      customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title');
      }
    })

    $('.trip3').slick({
      slide: 'div',        //슬라이드될 태그
      infinite : false,     //무한 반복 옵션 기본값 true  
      slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)모션 시간 (얼마나 빠른속도로 넘어가는지)(1000ms = 1초) 곧, 슬라이드 사이에 넘어가는 속도
      dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부, 슬라이더 아래에 도트 네비게이션 버튼 표시 여부(true or false) ▶기본값 false
      prevArrow : $('#trip-wrap3 .trip-prev'), //이전 화살표만 변경
      nextArrow : $('#trip-wrap3 .trip-next'), //다음 화살표만 변경
      draggable : true,     //드래그 가능 여부 
      touchMove : true,
      swipe : true,	
      variableWidth: true,        //사진마다 width의 크기가 다른가?(true or false) ▶기본값 false
      rows: 1,                    //이미지를 몇 줄로 표시할지 개수
      slidesPerRow: 1,            //보여질 행의 수 (한 줄, 두 줄 ... )
      customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title');
      }
    })

    $('.trip4').slick({
      slide: 'div',        //슬라이드될 태그
      infinite : false,     //무한 반복 옵션 기본값 true  
      slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)모션 시간 (얼마나 빠른속도로 넘어가는지)(1000ms = 1초) 곧, 슬라이드 사이에 넘어가는 속도
      dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부, 슬라이더 아래에 도트 네비게이션 버튼 표시 여부(true or false) ▶기본값 false
      prevArrow : $('#trip-wrap4 .trip-prev'), //이전 화살표만 변경
      nextArrow : $('#trip-wrap4 .trip-next'), //다음 화살표만 변경
      draggable : true,     //드래그 가능 여부 
      touchMove : true,
      swipe : true,	
      variableWidth: true,        //사진마다 width의 크기가 다른가?(true or false) ▶기본값 false
      rows: 1,                    //이미지를 몇 줄로 표시할지 개수
      slidesPerRow: 1,            //보여질 행의 수 (한 줄, 두 줄 ... )
      customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title');
      }
    })

    $('.info-slide-area').slick({
      slide: 'div',        //슬라이드될 태그
      infinite : false,     //무한 반복 옵션 기본값 true  
      slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)모션 시간 (얼마나 빠른속도로 넘어가는지)(1000ms = 1초) 곧, 슬라이드 사이에 넘어가는 속도
      prevArrow : $('.info-banner-arrow .info-banner-prev'), //이전 화살표만 변경
      nextArrow : $('.info-banner-arrow .info-banner-next'), //다음 화살표만 변경
      draggable : true,     //드래그 가능 여부 
      touchMove : true,
      swipe : true,	
      rows: 1,                    //이미지를 몇 줄로 표시할지 개수
      slidesPerRow: 1,            //보여질 행의 수 (한 줄, 두 줄 ... )
    })



    $('.info-message-area').slick({
      slide : 'div',
      slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)모션 시간 (얼마나 빠른속도로 넘어가는지)(1000ms = 1초) 곧, 슬라이드 사이에 넘어가는 속도
      prevArrow : $('.info-message-arrow .message-prev'), //이전 화살표만 변경
      nextArrow : $('.info-message-arrow .message-next'), //다음 화살표만 변경
      rows: 1,                    //이미지를 몇 줄로 표시할지 개수
      slidesPerRow: 1,            //보여질 행의 수 (한 줄, 두 줄 ... )
      vertical : true        // 세로 방향 슬라이드 옵션 세로 방향 여부(true or false) ▶기본값 false
    })

    $('.subNav').slick({
      slide : 'div',
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: false,
      draggable : false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            dots : true,
            slidesToScroll :3,
            draggable : true,     //드래그 가능 여부 
            touchMove : true,
            swipe : true
          }
        }
      ]
    })

    $('.drive-slide').slick({
      slide: 'div',        //슬라이드될 태그
      infinite : false,     //무한 반복 옵션 기본값 true  
      slidesToShow : 5,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)모션 시간 (얼마나 빠른속도로 넘어가는지)(1000ms = 1초) 곧, 슬라이드 사이에 넘어가는 속도
      prevArrow : $('.drive-arrow .drive-arrow-prev'), //이전 화살표만 변경
      nextArrow : $('.drive-arrow .drive-arrow-next'), //다음 화살표만 변경
      draggable : true,     //드래그 가능 여부 
      touchMove : true,
      swipe : true,	
      rows: 1,                    //이미지를 몇 줄로 표시할지 개수
      slidesPerRow: 1,            //보여질 행의 수 (한 줄, 두 줄 ... )
      responsive : [
        {
          breakpoint : 1640,
          settings : {
            slidesToShow : 3
          }
        },
        {
          breakpoint : 1000,
          settings : {
            slidesToShow : 2
          }
        },
        {
          breakpoint : 767,
          settings : {
            slidesToShow : 1
          }
        }
      ]
    })
    $('.slide1').slick({
      slide: 'div',        //슬라이드될 태그
      infinite : true,     //무한 반복 옵션 기본값 true  
      slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)모션 시간 (얼마나 빠른속도로 넘어가는지)(1000ms = 1초) 곧, 슬라이드 사이에 넘어가는 속도
      prevArrow : $('.accomodation-arrow-prev1'), //이전 화살표만 변경
      nextArrow : $('.accomodation-arrow-next1'), //다음 화살표만 변경
      rows: 1,                    //이미지를 몇 줄로 표시할지 개수
      slidesPerRow: 1,            //보여질 행의 수 (한 줄, 두 줄 ... )
      responsive : [
        {
          breakpoint : 1000,
          settings : {
            slidesToShow : 1,
            draggable : true,     //드래그 가능 여부 
            touchMove : true,
            swipe : true,	            
          }
        }
      ]
    })
    $('.slide2').slick({
      slide: 'div',        //슬라이드될 태그
      infinite : true,     //무한 반복 옵션 기본값 true  
      slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)모션 시간 (얼마나 빠른속도로 넘어가는지)(1000ms = 1초) 곧, 슬라이드 사이에 넘어가는 속도
      prevArrow : $('.accomodation-arrow-prev2'), //이전 화살표만 변경
      nextArrow : $('.accomodation-arrow-next2'), //다음 화살표만 변경
      rows: 1,                    //이미지를 몇 줄로 표시할지 개수
      slidesPerRow: 1,            //보여질 행의 수 (한 줄, 두 줄 ... )
      responsive : [
        {
          breakpoint : 1000,
          settings : {
            slidesToShow : 1,
            draggable : true,     //드래그 가능 여부 
            touchMove : true,
            swipe : true,	            
          }
        }
      ]
    })
    $('.slide3').slick({
      slide: 'div',        //슬라이드될 태그
      infinite : true,     //무한 반복 옵션 기본값 true  
      slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)모션 시간 (얼마나 빠른속도로 넘어가는지)(1000ms = 1초) 곧, 슬라이드 사이에 넘어가는 속도
      prevArrow : $('.accomodation-arrow-prev3'), //이전 화살표만 변경
      nextArrow : $('.accomodation-arrow-next3'), //다음 화살표만 변경
      rows: 1,                    //이미지를 몇 줄로 표시할지 개수
      slidesPerRow: 1,            //보여질 행의 수 (한 줄, 두 줄 ... )
      responsive : [
        {
          breakpoint : 1000,
          settings : {
            slidesToShow : 1,
            draggable : true,     //드래그 가능 여부 
            touchMove : true,
            swipe : true,	            
          }
        }
      ]
    })
    
    var clickDot = function(dot) {
      var activeSlide = $('.active-slide');
      var i = $(dot).index() + 1;
      var nextSlide = $('.slide-wrap>div:nth-child('+i+')');
      activeSlide.removeClass("active-slide");
      nextSlide.addClass("active-slide");
      $('.middle-tab-list>li').first().addClass("active-dot");
      $('.active-dot').removeClass("active-dot");
      $(dot).addClass("active-dot");
    };
    
    var main = function() {
      $('.middle-tab-list>li').click(function() {
        clickDot(this);
      });
    };
    main();

    $('.slide1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.accomodation-arrow1').removeClass('active1');
    });
    $('.slide1').on('afterChange', function(event, slick, currentSlide){
      $('.current1').text(currentSlide +1);
      $('.accomodation-arrow1').addClass('active1');
    });
    $('.slide2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.accomodation-arrow2').removeClass('active2');
    });
    $('.slide2').on('afterChange', function(event, slick, currentSlide){
      $('.current2').text(currentSlide +1);
      $('.accomodation-arrow2').addClass('active2');
    });
    $('.slide3').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.accomodation-arrow3').removeClass('active3');
    });
    $('.slide3').on('afterChange', function(event, slick, currentSlide){
      $('.current3').text(currentSlide +1);
      $('.accomodation-arrow3').addClass('active3');
    });



    $('.trip1').on('afterChange', function(event, slick, currentSlide){
        var path = `image/trip1-${currentSlide}.jpeg`;
        $('.trip1 .trip-bg').attr('src',path).css('opacity','0').stop().animate({'opacity':1},1000);
    });
    $('.trip2').on('afterChange', function(event, slick, currentSlide){
      var path = `image/trip2-${currentSlide}.jpeg`;
      $('.trip2 .trip-bg').attr('src',path).css('opacity','0').stop().animate({'opacity':1},1000);
    });
    $('.trip3').on('afterChange', function(event, slick, currentSlide){
      var path = `image/trip3-${currentSlide}.jpeg`;
      $('.trip3 .trip-bg').attr('src',path).css('opacity','0').stop().animate({'opacity':1},1000);
    });
    $('.trip4').on('afterChange', function(event, slick, currentSlide){
      var path = `image/trip4-${currentSlide}.jpeg`;
      $('.trip4 .trip-bg').attr('src',path).css('opacity','0').stop().animate({'opacity':1},1000);
    });




})
