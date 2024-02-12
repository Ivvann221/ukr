let slider = $(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});


// header

$(".menu-collapsed").click(function() {
  $(".header").toggleClass("header-fixed");
});
// form-registr
$(".login").click(function() {
  $("#visible").toggleClass("container");
});
$(".login").click(function() {
  $("#aq").toggleClass("formBox level-login");
});
$(".regis").click(function() {
  $("#visible").toggleClass("container");
});
$(".regis").click(function() {
  $("#aq").toggleClass("formBox level-reg");
});
$("#close").click(function() {
  $("#visible").toggleClass("container");
});
$("#close").click(function() {
  $("#aq").toggleClass("formBox level-login");
});

// burger


var inP     =   $('.input-field');

inP.on('blur', function () {
    if (!this.value) {
        $(this).parent('.f_row').removeClass('focus');
    } else {
        $(this).parent('.f_row').addClass('focus');
    }
}).on('focus', function () {
    $(this).parent('.f_row').addClass('focus');
    $('.btn').removeClass('active');
    $('.f_row').removeClass('shake');
});


$('.resetTag').click(function(e){
    e.preventDefault();
    $('.formBox').addClass('level-forget').removeClass('level-reg');
});

$('.back').click(function(e){
    e.preventDefault();
    $('.formBox').removeClass('level-forget').addClass('level-login');
});


$('.regTag').click(function(e){
    e.preventDefault();
    $('.formBox').removeClass('level-reg-revers');
    $('.formBox').toggleClass('level-login').toggleClass('level-reg');
    if(!$('.formBox').hasClass('level-reg')) {
        $('.formBox').addClass('level-reg-revers');
    }
});
$('.btn').each(function() {
     $(this).on('click', function(e){
        e.preventDefault();
        
        var finp =  $(this).parent('form').find('input');
       
       console.log(finp.html());
       
        if (!finp.val() == 0) {
            $(this).addClass('active');
        }
        
        setTimeout(function () {
            
            inP.val('');
            
            $('.f_row').removeClass('shake focus');
            $('.btn').removeClass('active');
            
        }, 2000);
         
        if(inP.val() == 0) {
            inP.parent('.f_row').addClass('shake');
        }
         
        //inP.val('');
        //$('.f_row').removeClass('focus');
        
    });
});

document.querySelector(".menu-collapsed").addEventListener("click", function() {
  this.classList.toggle("menu-expanded");
});