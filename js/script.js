$(document).ready(function () {
  $(".carousel__slider").slick({
    speed: 1000,
    responsive: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/red1.png" alt="" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/red.png" alt="" /></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
  $("ul.catalog__tabs").on("click", "li:not(catalog__tab_active)", function () {
    $(this)
      .addClass("catalog__tab_active")
      .siblings()
      .removeClass("catalog__tab_active")
      .closest("div.container")
      .find("div.catalog__contents")
      .removeClass("catalog__contents_active")
      .eq($(this).index())
      .addClass("catalog__contents_active");
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog__item_one").eq(i).toggleClass("catalog__item_one_active");
        $(".catalog__item_second")
          .eq(i)
          .toggleClass("catalog__item_second_active");
      });
    });
  }
  toggleSlide(".catalog__link");
  toggleSlide(".catalog__link_back");
});
