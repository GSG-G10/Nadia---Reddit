document.querySelector("#login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
  });
  document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
  });
document.querySelector("#signup").addEventListener("click",function(){
    document.querySelector(".popup2").classList.add("active");
  });
  document.querySelector(".popup2 .close-btn2").addEventListener("click",function(){
    document.querySelector(".popup2").classList.remove("active");
  });
  