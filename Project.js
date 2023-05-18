
window.lastProjectName = '';
window.lastField = '';
window.lastNew = '';
window.lastOld = '';
window.lastReady = '';
window.lastNo = '';
window.testTxt ='testTxt';

function showConfirm() {
  var checkbox = document.getElementById("myCheckbox");
  if (!checkbox.checked) {
    alert("개인정보 취급방침에 동의 해야 합니다.");
  } else if( confirm("제출하시겠습니까?")){
    alert("전송되었습니다")
  } else{}
   
  }
function goSecondPage(){
    lastProjectName = document.getElementById("projectName").value;
    lastField = document.getElementById("field").value
    lastNew = document.getElementById("new").value
    lastOld = document.getElementById("old").value
    lastReady = document.getElementById("ready").value
    lastNo = document.getElementById("no").value
    window.location.href = "./Project2.html"
}

function getValues(){  
    window.localStorage.setItem("lastProjectName",document.getElementById("projectName").value);
    window.localStorage.setItem("lastField",document.getElementById("field").value);
    window.localStorage.setItem("lastNew",document.getElementById("new").value);
    window.localStorage.setItem("lastOld",document.getElementById("old").value);
    window.localStorage.setItem("lastReady",document.getElementById("ready").value);
    window.localStorage.setItem("lastNo",document.getElementById("no").value);
    window.location.href = "./Project2.html";
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
