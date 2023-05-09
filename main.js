
AOS.init();



//portfolio swiper

var swiper = new Swiper(".mySwiper", {

  autoplay: true,  
  loop: true  


});



  window.addEventListener('scroll', function() {
    const element = document.getElementById('topButton'); 
    //iuyiuy

    // const elementPosition = element.getBoundingClientRect().top;
// ㅅㄷㄴㅅ
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