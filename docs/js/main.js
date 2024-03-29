var mouseIsOverSearch=false;
$(".search-input .input-group-prepend").on("click",function(e){
  // setTimeout(function(){
    $(".search-input").toggleClass("collapsed");
  // },0);
  // $(".search-input input").focus();
  // mouseIsOverSearch=true;
})
// $(".search-input").on("mouseleave",function(e){
//   if($(this).find("input").is(":focus"))return;
//   $(this).addClass("collapsed");
//   mouseIsOverSearch=false;

// })
// $(".search-input input").on("blur",function(e){
//   console.log(e);
//   // if(!mouseIsOverSearch){
//     $(".search-input").addClass("collapsed");
//   // }
// });
$(document).click(function(event){
  console.log(event);
  if(!$('.search-input').hasClass('collapsed') && $(event.target).closest(".right-nav").length == 0) {
    $(".search-input").addClass("collapsed");
  }
});

$(".menu-toggle").click(function(){
  $(".overlay-menu").toggleClass("show");
  $(".overlay-menu .menu-toggle").toggleClass("on");
  $("body").toggleClass("overlay-show");
});
function addToFavorites(element,type="toggle"){
  var icon=element.querySelector("img");
  if(type=="add"){
    icon.setAttribute("src","img/icons/favorite-colored.svg");
    return;
  }else if(type == "remove"){
    icon.setAttribute("src","img/icons/favorite-outline.svg");
    return;
  }else{
    var svg=icon.getAttribute("src");
    if(svg.includes("favorite-outline.svg")){
      svg=svg.replace("favorite-outline.svg","favorite-colored.svg");
    }else{
      svg=svg.replace("favorite-colored.svg","favorite-outline.svg");
    }
    icon.setAttribute("src",svg);
  }
  
  // element.classList.toggle("active")
}
$(".add-to-fav").click(function(e){
  if($(this).hasClass("added")){
    $(this).removeClass("added");
    addToFavorites(e.currentTarget,"remove");
  }else{
    $(this).addClass("added");
    addToFavorites(e.currentTarget,"add");
  }
  
  
})
$(".add-to-fav").mouseenter(function(e){
  if(!e.currentTarget.classList.contains("added")){
    addToFavorites(e.currentTarget,"add");
  }
})
$(".add-to-fav").mouseleave(function(e){
  if(!e.currentTarget.classList.contains("added")){
    addToFavorites(e.currentTarget,"remove");
  }
})
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
    // var x = window.matchMedia("(max-width:992px)")
    // x.addListener(toggleMobileStyles);
    // $(window).resize(function(e){
    //   console.log(e);
    //   toggleMobileStyles(x) // Call listener function at run time
    // })
    $('.category-slider').slick({
      // infinite: true,
      speed: 300,
      slidesToShow: 8,
      slidesToScroll: 8,
      prevArrow:'<button class="controls PrevArrow"></button>',
      nextArrow:'<button class="controls NextArrow"></button>', 
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $(".categories-wrap .nav-item").click(function(){
      $(".categories-wrap .nav-item").removeClass("active");
      $(this).addClass("active");
    })
  })