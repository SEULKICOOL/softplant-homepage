


//Portfolio Swiper

const contents = document.querySelectorAll(".swiper");
let num = 0;
var swiper = new Swiper(".mySwiper", { 
    loop : true,
    slidesPerView:getSlidesPerView(),
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

//Mobile Size Swiper
function getSlidesPerView() {
  const isMobile = window.innerWidth <= 800;
  return isMobile ? 1 : 1.5;
}

getSlidesPerView();



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

  const closeIcon = document.getElementById("mobile");

  closeIcon.addEventListener('click',function() {
    menu.style.display = 'none';
  })

  function projectGo(){
    window.location.href = "./Project1.html";
  }
  function DownloadPDF(){
  window.location.href = "./소프트플랜트회사소개서.pdf"
  }
//  //MENU SCROLL EVENT

//   const service = document.querySelector(".p-service").pageYOffset
//   const  portfolio= document.querySelector(".p-portfolio")
//   // const Teams = document.querySelector(".").offsetTop;
 

//   service.forEach((span, index)=>{
//     span.addEventListener("click",()=>{
//         if(index===0){
//             scrollTo({top:0,behavior:"smooth"});
//         }else if(index===1){
//             scrollTo({top:service,behavior:"smooth"});
//         }else if(index===2){
//             scrollTo({top:portfolio,behavior:"smooth"});
//         }else{
//             scrollTo({top:Teams,behavior:"smooth"});
//         }
//     });
// });


