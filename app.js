document.querySelector(".open-btn").addEventListener("click", function(){
   document.querySelector(".mobileMenu").classList.toggle("show")
   // console.log("hi");
});
document.querySelector(".menu-close").addEventListener("click", function () {
   document.querySelector(".mobileMenu").classList.toggle("show")
   // console.log("hi");
});
// openBtn()

// var height = $('.fixed-navbar').height();

// $(window).scroll(function () {
//    if ($(this).scrollTop() > height) {
//       $('.wpo-site-header').addClass('fixed')
//    } else {
//       $('.wpo-site-header').removeClass('fixed')
//    }
// })