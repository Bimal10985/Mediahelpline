$(function () {
    AOS.init();
    $(".scroll-down").click(function () {
      $("html, body").animate(
        { scrollTop: $(".section--about").offset().top },
        "fast"
      );
      return false;
    });
    AOS.refresh();
  });