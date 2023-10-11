let btnMenu=document.querySelector(".nav button")
let menu=document.querySelector(".nav .link-group")
const listcandidat = document.getElementById("cand")
const closerCand  = listcandidat.querySelector("#cand-close")
const opener = document.querySelector(".link-group #liste_op")
var state_list = getComputedStyle(listcandidat).display
btnMenu.onclick=function(){

     if (menu.style.left== "0%"){
     	menu.style.left="-100%"
     }else menu.style.left="0%"
}

opener.addEventListener("click",function(e){

     e.preventDefault()
     state_list = getComputedStyle(listcandidat).display
     if(state_list=="none"){

          listcandidat.style.display = "block"
          let m = parseInt(getComputedStyle(menu).left,10)
          if(m>=0){

               menu.style.left = "-100%"
          }
     }
})

closerCand.addEventListener("click",function(){

     state_list = getComputedStyle(listcandidat).display
     if(state_list == "block"){

          listcandidat.style.display = "none"
     }
})