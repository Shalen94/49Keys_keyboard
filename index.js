var btns = document.querySelectorAll("button") ;
var clickList = document.querySelector(".clickedList") ;
var error = document.querySelector(".moreClick") ;
var count = 0 ;


for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        var b = btns[i].textContent ;
        playMusic(b) ;
        btns[i].classList.add("clickStyle");
        if(count >=500 ){
            error.innerHTML = "We limited to store upto 500 clicks only. Reset an try again " ;
        }else{
            clickList.innerHTML += b +" " ;
            count++ ;
        }
        setTimeout(() => {
            btns[i].classList.remove("clickStyle");
        }, 300);
    }) ;

}
function playMusic(b){
    var mus = "sounds/"+b+".mp3" ;
    console.log(mus);
    var audio = new Audio(mus) ;
    audio.play() ; 
}
var reset = document.querySelector(".reset") ;

reset.addEventListener("click",function(){
    clickList.innerHTML = "" ;
    error.innerHTML = "" ;
    count=0 ;
    
})