
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
  window.location.href = "./소프트플랜트_회사소개서.pdf"
  }
  function quickGo(){
    window.location.href = "./contact.html";
  }

//MENU SCROLL EVENT


const Service1 = document.querySelectorAll(".ClkService");
// const PORTFOLIO1 = document.querySelectorAll(".ClkPortforio");
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

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// 'value' 매개변수의 값을 가져옴
const value = urlParams.get('value');

// 가져온 값을 화면에 표시
if (value !== null) {
    
    if(value == 'know-how'){

      const subSec1 = document.querySelector(".know-how").offsetTop;
      window.scrollTo({ top: subSec1, behavior: "smooth" });

    }else if(value == 'project'){

      const subSec1 = document.querySelector(".projects").offsetTop;
      window.scrollTo({ top: subSec1, behavior: "smooth" });

    }else if(value == 'teams'){

      const subSec1 = document.querySelector(".Teams").offsetTop;
      window.scrollTo({ top: subSec1, behavior: "smooth" });
      
    }
  }


  function getUniqueId() {
    let uniqueId = localStorage.getItem('uniqueId');
    if (!uniqueId) {
      uniqueId = Math.random().toString(36).substr(2, 9);
      localStorage.setItem('uniqueId', uniqueId);
    }
  
    return uniqueId;

    
  }
  
  function sendMenuInfo(menu) {
  
    const uniqueId = getUniqueId(); // localStorage에서 uniqueId를 가져오거나 새로 생성합니다.

    fetch('https://softplant.shop/api/v1/softplant/click/menu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ in_menu: menu, in_reg_id: uniqueId }),
    }).then(response => response.json()).then(data => {

    
      // 서버 응답이 성공적인지 확인하고 페이지 이동
      if (data.success === true) {
        const href = getMenuHref(menu);
        window.location.href = href;
        // alert('성공: ' + JSON.stringify(data));
      } else {
        // alert('에러가 발생했습니다: ' + data.message);
      }
    }).catch((error) => {
      console.error('Error:', error);
      // alert('에러가 발생했습니다: ' + error.message);
    });
  }

  function getMenuHref(menu) {
    switch (menu) {
      case 'excel1':
        return './excel1.html';
      case 'excel2':
        return './excel2.html';
      case 'excel3':
        return './excel3.html';
      case 'erp':
        return './kyungdong.html';
      case 'ballet':
          return './ballet.html';
      case 'sabbun':
        return './sabbun.html';
      case 'bio':
        return './bio.html';
      case 'swing':
        return './swing.html';
      case 'tino':
        return './tino5.html';
      case 'wedding':
        return './wedding.html';
      case 'carebom':
        return './carebom.html';
     
      default:
        return '/';
    }
  }
  
  
  // 각각의 a 태그에 대하여 클릭 이벤트 리스너를 추가하는 함수
  function setupClickListeners() {
    // 'item' 클래스를 가진 모든 a 태그를 선택합니다.
    const items = document.querySelectorAll('.item');
  
    // 각 a 태그에 클릭 이벤트 리스너를 추가합니다.
    items.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 이벤트를 중단합니다.
        const menu = this.getAttribute('data-menu'); 
        
        if (menu) {
          sendMenuInfo(menu);
        } else {
          // alert(menu)
        
        }

     
      });
    });
  }
  
  // 문서 로딩이 완료되면 클릭 리스너를 설정합니다.
  document.addEventListener('DOMContentLoaded', setupClickListeners);
  

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

//구글 애널리틱스
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BVZ7B4QJF9');

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11263531305');

  

//코드앤 버터 

(function (co,de,n,but,t,e,r){!n[co]&&(n[co]=function(){
(n[co].q=n[co].q||[]).push(arguments);});e=t.createElement(but);
e.async=true;e.src=de;r=t.getElementsByTagName(but)[0];
r.parentNode.insertBefore(e, r);
})("CodenButter", "https://buttr.dev/butter.js", window, "script", document);
window.CodenButter("boot", { siteId: "tthgejhamm", auto: true });




