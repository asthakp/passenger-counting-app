let numOfPassengers= document.getElementById("number")
let buttonUp=document.getElementById("increased")
let count=0
buttonUp.addEventListener("click", ()=>{
    count+=1
    numOfPassengers.textContent=count    // textContent has an advantage over innerText that                                           //it can read hidden strings and msgs like space.
})
