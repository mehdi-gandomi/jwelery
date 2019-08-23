$(document).ready(function(){
    $('.product-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:'<button class="controls PrevArrow "></button>',
        nextArrow:'<button class="controls NextArrow " style="right:-28px"></button>', 
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
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
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
      $(".product-details__counter .plus").click(function(){
        var counterElement=$(".product-details__counter .counter-value");
        console.log(counterElement);
        counterElement.text(parseInt(counterElement.text())+1);
      })
      $(".product-details__counter .minus").click(function(){
        var counterElement=$(".product-details__counter .counter-value");
        const newValue=parseInt(counterElement.text())-1;
        counterElement.text(newValue > 0 ? newValue:0);
      })
});