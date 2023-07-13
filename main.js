
AOS.init();



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
  function quickGo(){
    window.location.href = "./contact.html";
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


//swiper

// // swiper 객체 생성
// const mySwiper = new Swiper(".swiper-container", {
//   // 옵션 설정
//   loop: true,
//   autoplay: {
//     delay: 0,
//   },
//   speed: 2000, //add
//   slidesPerView: 1, //add
// });

// const mainSwiper = document.getElementById("main-swiper");
// const tabletSwiper = document.getElementById("tablet-swiper");
// const mobileSwiper = document.getElementById("mobile-swiper");

// const resizeSwiperHandler = () => {
//   if (window.innerWidth < 400) {
//     mainSwiper.style.display = "none";
//     mobileSwiper.style.display = "block";
//     tabletSwiper.style.display = "none";
//   }

//   if (window.innerWidth < 768 && window.innerWidth > 400) {
//     mainSwiper.style.display = "none";
//     mobileSwiper.style.display = "none";
//     tabletSwiper.style.display = "block";
//   }

//   if (window.innerWidth > 768) {
//     mainSwiper.style.display = "block";
//     mobileSwiper.style.display = "none";
//     tabletSwiper.style.display = "none";
//   }
// };

// window.addEventListener("resize", resizeSwiperHandler);

// resizeSwiperHandler();