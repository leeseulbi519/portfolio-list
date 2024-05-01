$(document).ready(function(){
    var breadCrumbsAnchor = $('.breadcrumbs-item button');
    breadCrumbsAnchor.map(function() {
        $(this).click(function() {
            if($(this).parent().hasClass('active')){
                $(this).parent().removeClass('active');
                $(this).parent().find('div:visible').slideUp(300);
            }else{
                breadCrumbsAnchor.not($(this)).parent().removeClass('active');
                $(this).parent().addClass('active');
                $(this).parent().find('div').slideToggle().parent()
                .siblings().find('div:visible').slideUp(300);
            }
        });
    });

    $('.tab-select').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.middle-tab-list').slideUp();
        }else{
            $(this).addClass('active');
            $('.middle-tab-list').slideDown();
        }
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
        var text = $('.active-dot span').text();
        $('.tab-select span').text(text);
    });
  };
  main();

})