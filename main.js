
AOS.init();



//portfolio swiper

const contents = document.querySelectorAll(".swiper");
let num = 0;
var swiper = new Swiper(".mySwiper", { 
    loop : true,
    slidesPerView: 1.5,
    spaceBetween: 100,
    centeredSlides: true,
    autoplay: {    
    delay: 2500, 
    disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    pagination : {
      el : ".pagination-span",
      clickable: true
    }
})


//Topbutton scroll Event

  window.addEventListener('scroll', function() {
    const element = document.getElementById('topButton'); 
    const windowHeight = window.pageYOffset;
      if (400< windowHeight) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none'; 
      }
  });

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // Mobile


  const menuIcon = document.querySelector('.mobile-icon');
  const menu = document.querySelector('.mobile-menu');

  
  menuIcon.addEventListener('click', function() {
    menu.style.display = 'block';
  });


