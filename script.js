var container = document.querySelector("#post");
var i = document.querySelector("i")
// var heart = document.querySelector("post-info");
container.addEventListener("dblclick",function(){
    i.style.transform= "translate(-50%,-50%) scale(5)";
    i.style.opacity="0.9";
    setTimeout(function(){
        i.style.transform= "translate(-50%,-50%) scale(4)";
        i.style.opacity="0.9"
    },150)
    setTimeout(function(){
        i.style.transform= "translate(-50%,-50%) scale(5)";
        i.style.opacity="0.9"
    },400)
    setTimeout(function(){
        i.style.transform= "translate(-50%,-50%) scale(4)";
        i.style.opacity="0.9"
    },600)
    setTimeout(function(){
        i.style.transform= "translate(-50%,-50%) scale(3)";
        i.style.opacity="0.9"
    },700)
    setTimeout(function(){
        i.style.transform= "translate(-50%,-50%) scale(2)";
        i.style.opacity="0.7"
    },800)
    setTimeout(function(){
        i.style.transform= "translate(-50%,-50%) scale(0)";
        i.style.opacity="0"
    },1000)

    
})
