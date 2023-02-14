function generateRandomNo() {
    let tries = 0
    let enteredNumber = parseInt(document.getElementById("enteredNumber").value)
    let enteredNumberElement = document.getElementById("enteredNumber")
    let outputDiv = document.getElementById("outputDiv")
    let randomNumber = Math.floor(Math.random() * 4);
    let newDiv = document.createElement("div")

    if (enteredNumber > randomNumber) {
        newDiv.innerHTML = "Oops! Your guess too high"

    }
    else if (enteredNumber < randomNumber) {
        newDiv.innerHTML = "Oops! Your guess too low"
    }
    else {
        newDiv.innerHTML = "Yeah! Your guess is correct"
    }
    enteredNumberElement.value = ""
    outputDiv.appendChild(newDiv)
}