$("#search-btn").click(function(){
  $(".search-input").toggleClass("collapsed");
})
$(".menu-toggle").click(function(){
  $(".overlay-menu").toggleClass("show");
  $(".overlay-menu .menu-toggle").toggleClass("on");
  $("body").toggleClass("overlay-show");
});
function addToFavorites(element){
  element.classList.toggle("icon-heart-empty");
  element.classList.toggle("icon-heart");
}
function toggleMobileStyles(x) {
  if (x.matches) { // If media query matches

    $("main.container").removeClass("container").addClass("container-fluid");
    $("footer").removeClass("container").addClass("container-fluid");
    $("main .navbar").addClass("is-mobile");
    $(".overlay-menu > div").removeClass("container").addClass("container-fluid");
    $(".overlay-menu .navbar").addClass("is-mobile");
  }else{
    $("main.container").addClass("container").removeClass("container-fluid");
    $("footer").addClass("container").removeClass("container-fluid");
    $("main .navbar").removeClass("is-mobile");
    $(".overlay-menu > div").addClass("container").removeClass("container-fluid");
    $(".overlay-menu .navbar").removeClass("is-mobile");
  }
}
$(document).ready(function(){
    var x = window.matchMedia("(max-width:992px)")
    x.addListener(toggleMobileStyles);
    $(window).resize(function(e){
      console.log(e);
      toggleMobileStyles(x) // Call listener function at run time
    })
    $(".main-slider").slick({
      autoplay:true,
      autoplaySpeed:10000,
      speed:900,
      slidesToShow:1,
      slidesToScroll:1,
      pauseOnHover:false,
      cssEase:'linear',
      fade:true, // Disable This And Watch
      draggable:false,
      prevArrow:'<button class="controls PrevArrow"></button>',
      nextArrow:'<button class="controls NextArrow"></button>', 
    });
    
    $('.product-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow:'<button class="controls PrevArrow"></button>',
        nextArrow:'<button class="controls NextArrow"></button>', 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  })