$(document).ready(function(){
  $('.lang-btn').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
      $('.lang-list').slideUp(500);
    }else{
      $(this).parent().siblings('.search-wrap').find('form:visible').slideUp(500);
      $(this).addClass('active');
      $('.lang-list').slideDown(500);
    }
  })

  $('.lang-item').click(function(){
    const lang = $(this).text();
    $('.lang-btn span').text(lang);
    $('.lang-list').slideUp(500);
  })

  $('.search-btn').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
      $('.search-box').slideUp(500);
    }else{
      $(this).parent().siblings('.lang-wrap').find('ul:visible').slideUp(500);
      $(this).addClass('active');
      $('.search-box').slideDown(500);
    }
  })

  $('.mo-nav-btn').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
    }else{
      $(this).addClass('active');
    }
  })

  $(window).resize(function(){
    var wWidth = $(window).width();
    if(wWidth > 767){
      $(".mo-nav-btn").removeClass("active");
    }
  });



})