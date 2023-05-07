var btn =document.querySelector("button");
var defination =document.querySelector(".defination");

btn.addEventListener("click" ,function(){

defination.classList.toggle("active")

});

var close =document.querySelector(".close");
var defination =document.querySelector(".defination");

close.addEventListener("click",function(){
    defination.classList.toggle("active")

});

