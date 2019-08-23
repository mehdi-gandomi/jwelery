$(".search-input").on("mouseenter mouseleave",function(){
  if($(this).find("input").eq(0).is(":focus")) return;
  $(this).toggleClass("collapsed");
})
$(".search-input input").on("blur",function(e){
  $(".search-input").addClass("collapsed");
});
$(".menu-toggle").click(function(){
  $(".overlay-menu").toggleClass("show");
  $(".overlay-menu .menu-toggle").toggleClass("on");
  $("body").toggleClass("overlay-show");
});
function addToFavorites(element){
  var icon=element.querySelector("img");
  var svg=icon.getAttribute("src");
  if(svg.includes("favorite-outline.svg")){
    svg=svg.replace("favorite-outline.svg","favorite-colored.svg");
  }else{
    svg=svg.replace("favorite-colored.svg","favorite-outline.svg");
  }
  icon.setAttribute("src",svg);
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
      
    });
    $(".categories-wrap .nav-item").click(function(){
      $(".categories-wrap .nav-item").removeClass("active");
      $(this).addClass("active");
    })
  })