$(function () {
    AOS.init();
    $(".scroll-down").click(function () {
      $("html, body").animate(
        { scrollTop: $(".section--about").offset().top },
        "fast"
      );
      return false;
    });
    
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
        
      // },
    });
    AOS.refresh();
  });
 