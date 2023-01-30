let numOfPassengers = document.getElementById("number")
let buttonUp = document.getElementById("increased")
let count = 0
buttonUp.addEventListener("click", () => {
    count += 1
    numOfPassengers.textContent = count
})
buttonSave.addEventListener("click", () => {
    saveEl.textContent += count + " - "
    numOfPassengers.textContent = 0
    count = 0
})
