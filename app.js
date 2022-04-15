let btn = document.getElementById("btn");
let nav = document.getElementById("nav");

btn.addEventListener("click",function(e){
    btn.classList.toggle("active");
    nav.classList.toggle("active");
})