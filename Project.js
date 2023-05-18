

function showConfirm() {
  var checkbox = document.getElementById("myCheckbox");
  if (!checkbox.checked) {
    alert("개인정보 취급방침에 동의 해야 합니다.");
  } else if( confirm("제출하시겠습니까?")){
    alert("전송되었습니다")
  } else{}
   
  }

var basic = []
function saveBasic(){
    var basic = document.getElementById()***************
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
