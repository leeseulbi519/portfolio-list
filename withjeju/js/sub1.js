$(document).ready(function(){
//     var tripNav = $('.trip-nav>li');
//     var tripWrap = $('#trip-area>div');
//     var tripBtn = document.querySelector('.mo-trip-nav-btn');
//     var tripList = document.querySelector('.trip-nav-wrap');
//     var sliderTarget;

//     $(tripNav).first().addClass('trip-nav-active');
//     $(tripWrap).hide().first().show();

//     tripBtn.addEventListener('click',function(){
//         tripList.classList.add('active');
//     })

//     function sliderResponse(sliderTarget) {
//       $(tripWrap).fadeOut(100).removeClass('active').eq(sliderTarget).fadeIn().addClass('active');
//       $(tripNav).removeClass('trip-nav-active').eq(sliderTarget).addClass('trip-nav-active');
//       $(tripList).removeClass('active');
//     }
  
//   // pager controls
//   $(tripNav).on('click', function() {
//       if ( !$(this).hasClass('trip-nav-active') ) {
//           sliderTarget = $(this).index();
//           sliderResponse(sliderTarget);
//         }
//     });


    // var driveList = $('.breadcrumbs-list li div');

    //     drive.find('.breadcrumbs-item').click(function(){
    //         $(this).addClass('active')            
    //         $(this).find('div').slideDown();
    //         $(this).removeClass('active')
    //     })


    // var driveItem = $('.breadcrumbs-item')
    // driveItem.map(function(){
    //     $(this).click(function(){
    //         $(this).addClass('active');
    //         $(this).find('div').slideToggle().parent()
    //         .siblings().find('div:visible').slideUp();
    //     });
    // });
    

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


        

})