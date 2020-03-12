var winHeight;
var footerHeight;
var sectionId;
var sectionPosition;
var fromTop;
var mainHeader = $('.main-header');

//Visina sekcija
function sectionHeight() {
  winHeight = $(window).height();
  console.log(winHeight);
  footerHeight = $('.main-footer').outerHeight();
  console.log("footer: "+footerHeight);
  $('#home, #about, #gallery').css('min-height',winHeight);
  $('#contact2').css('min-height',winHeight-footerHeight);
}
sectionHeight();
$(window).on('resize',function () {
  sectionHeight();
});

//Navigacija
$('nav, .nav-button').on('click',function () {
  $('nav').fadeToggle();
  $('.nav-button').toggleClass('white');
})

//Smooth scroll
$('nav a').on('click',function (e) {
  e.preventDefault();
  sectionId = $(this).attr('href');
  sectionPosition = $(sectionId).offset().top;
  $('html, body').animate({
    scrollTop : sectionPosition
  },1000);
})

//Smanjivanje header-a
$(window).on('scroll',function () {
  fromTop = $(window).scrollTop();
  if (fromTop > 100) {
    mainHeader.addClass('change-header');
  }else {
    mainHeader.removeClass('change-header');
  }
})

//Validacija
$('#contact-form').validate();

//Galerija
$('#gallery .img-holder a').magnificPopup({
  type : 'image',
  gallery : {
    enabled : true
  }
});
