$(document).ready(function(){
// home-page

// product-slider
var swiper = new Swiper(".slider", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

// cat_slider
var swiper = new Swiper(".cat_slider", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".cat-next",
    prevEl: ".cat-prev",
  },
});

//   review slider
var swiper = new Swiper(".review_slider", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".cr-next",
    prevEl: ".cr-prev",
  },
});

//   comapny qualities
var swiper = new Swiper(".cq_slider", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".cq-next",
    prevEl: ".cq-prev",
  },
 
});

// ------------------------------------------------------------------------------------------------------
// collection slider
var swiper = new Swiper(".coll_services_slider", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".coll_services-next",
    prevEl: ".coll_services-prev",
  },
});

//-------------------------------------------------------------------------------------------------------- 
// production-page

$('.id_slider_top').slick({
  slide:".p_slide",
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.id_slider_bottom'
});

$('.id_slider_bottom').slick({
  slide:".bottom-slides",
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.id_slider_top',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
  ]
});

$(".qa_right_list li > a").click(function () {
  if ($(this).hasClass("is-qa")) {
    $(this).removeClass("is-qa").find(".qa_answer").slideUp();
  }
  else {
    $(this).parents(".qa_right_list").find("li > a").removeClass("is-qa").find(".qa_answer").slideUp();
    $(this).addClass("is-qa").find(".qa_answer").slideDown();
  }

})  

$(".play").click(function(){
  $(".pq_right figure img").css('visibility', 'hidden');
  
  })


// --------------------------------------------------------------------------------------------------------------------------
// cart-drawer

$(".cart").click(function(){
  $("body").toggleClass("cart-open").slideDown('.cart-drawer');
  if($('body').hasClass("cart-open")){
    $('body').css('overflow', 'hidden');
  }
  else{
    $('body').css('overflow', 'auto');
  }
  
  })

$(".close_cart").click(function(){
  $("body").removeClass("cart-open");
  $('body').css('overflow', 'auto');
  })

  
  // add product slider
  var swiper = new Swiper(".ap_slider", {
    navigation: {
      nextEl: ".ap-next",
      prevEl: ".ap-prev",
    },
  });

// --------------------------------------------------------------------------------------------------------
//landing-page 

var swiper = new Swiper(".logo-slider", {
  slidesPerView: "auto",
  slidesToScroll: 1,
  navigation: {
    prevEl: ".la-prev",
    nextEl: ".la-next",
  },
});

// ------------------------------------------------------------------------------------------------------
// blog-page
var swiper = new Swiper(".blog-slider", {
  slidesPerView: 1,
  navigation: {
    prevEl: ".bp-prev",
    nextEl: ".bp-next",
  },
});




// ===========================================================================================================================

// dropdown-click
$(".dropdown").click(function () {
  $("body").toggleClass("is-open").slideDown(".h_center");
  if($('body').hasClass("is-open")){
    $('body').css('overflow', 'hidden');
  }
  else{
    $('body').css('overflow', 'auto');
  }
})


// submenu-1
$(".menu > a").click(function () {
  if ($(this).hasClass("is-dd1")) {
    $(this).removeClass("is-dd1").find(".submenu").slideUp();
  }
  else {
    $(this).parents(".h_center").find("li > a").removeClass("is-dd1").find(".submenu").slideUp();
    $(this).addClass("is-dd1").find(".submenu").slideDown();
  }

})  
// sunbmenu-2

$(".double_menu").click(function () {
  if ($(this).hasClass("is-dd2")) {
    $(this).removeClass("is-dd2").find(".submenu_sec").slideUp();
  }
  else {
    $(this).parents(".mo_main ,.ms_main").find("h6").removeClass("is-dd2").find(".submenu_sec").slideUp();
    $(this).addClass("is-dd2").find(".submenu_sec").slideDown();
  }

}) 

// serachbar
$(".serchbar").click(function(){
$("body").toggleClass("sb");

})

$(".close_sb").click(function(){
$("body").removeClass("sb");
$("body").removeClass("is-open").css('overflow', 'auto');

})

// filter
$(".fp_left").click(function(){
  $("body").toggleClass("fl-open");
  
  })

})

