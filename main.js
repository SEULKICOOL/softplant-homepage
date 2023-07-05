
AOS.init();

//Portfolio Swiper

const contents = document.querySelectorAll(".swiper");
let num = 0;
var swiper = new Swiper(".mySwiper", { 
    loop : true,
    spaceBetween:0,
    slidesPerView: getSlidesPerView(),
    // loopAdditionalSlides : 5,
    // noSwiping : true,
    // observer:true, 
    // observeParents:true,
    speed:8000,
    freeMode:true,
    autoplay: {    
    delay:0
    // disableOnInteraction: false // false-스와이프 후 자동 재생
    }
   
});
// 이미지의 너비 설정
const slideWidth = document.querySelector(".swiper").offsetWidth;
const slideContainer = document.querySelector(".swiper-wrapper");
// slideContainer.style.width = `${slideWidth * contents.length}px`;

swiper.on("reachEnd", function () {
  swiper.slideTo(5, 0, false);
});

swiper.on("reachBeginning", function () {
  swiper.slideTo(contents.length - 5, 0, false);
});

//Mobile Size Swiper
function getSlidesPerView() {
  const isMobile = window.innerWidth <= 800;
  return isMobile ? 2 : 4;
}

getSlidesPerView();


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

  //Click Event 

  function projectGo(){
    window.location.href = "./Project1.html";
  }
  function DownloadPDF(){
  window.location.href = "./소프트플랜트회사소개서.pdf"
  }

//MENU SCROLL EVENT

const Service1 = document.querySelectorAll(".ClkService");
const PORTFOLIO1 = document.querySelectorAll(".ClkPortforio");
const Teams = document.querySelectorAll(".ClkTeams");
const sec1 = document.querySelector(".know-how").offsetTop;
const sec2 = document.querySelector(".Teams").offsetTop;
const sec3 = document.querySelector(".projects").offsetTop;


Service1.forEach((span, index) => {
  span.addEventListener("click", () => {
    window.scrollTo({ top: sec1, behavior: "smooth" });ㅡ
  });
});
Teams.forEach((span, index) => {
  span.addEventListener("click", () => {
    window.scrollTo({ top: sec2, behavior: "smooth" });
  });
});

PORTFOLIO1.forEach((span, index) => {
  span.addEventListener("click", () => {
    window.scrollTo({ top: sec3, behavior: "smooth" });
  });
});

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
