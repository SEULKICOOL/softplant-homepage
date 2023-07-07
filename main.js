
AOS.init();

// Swiper

var images = [
  "./logoimage/ac.png",
  "./logoimage/samsung.png",
  "./logoimage/kefico.png",
  "./logoimage/kyungdong.png",
  "./logoimage/sabbun.png",
  "./logoimage/lg.png",
  "./logoimage/tino.png",
  "./logoimage/beiersdorf.png",
  "./logoimage/hanyang.png",
  "./logoimage/ac.png",
  "./logoimage/samsung.png",
  "./logoimage/kefico.png",
  "./logoimage/kyungdong.png",
  "./logoimage/sabbun.png",
  "./logoimage/lg.png",
  "./logoimage/tino.png",
  "./logoimage/beiersdorf.png",
  "./logoimage/hanyang.png",
  "./logoimage/ac.png",
  "./logoimage/samsung.png",
  "./logoimage/kefico.png",
  "./logoimage/kyungdong.png",
  "./logoimage/sabbun.png",
  "./logoimage/lg.png",
  "./logoimage/tino.png",
  "./logoimage/beiersdorf.png",
  "./logoimage/hanyang.png",
];


var str = "<div class='marquee-container'><div class='marquee'>";
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < images.length; j++) {
        str += "<span><img src='" + images[j] + "'></span>";
    }
}
str += "</div></div>";

window.onload = function () {
    document.getElementById("console").innerHTML = str;
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
