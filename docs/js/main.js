$("#search-btn").click(function(){
    var searchInput=$(".search-input");
    if(searchInput.hasClass("collapsed")){
        searchInput.toggleClass("collapsed");
    }
})
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
              dots: true
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