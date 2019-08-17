$(document).ready(function(){
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
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow:'<button class="controls PrevArrow"></button>',
      nextArrow:'<button class="controls NextArrow"></button>', 
      
    });
});