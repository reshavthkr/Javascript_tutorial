function calculateSum() {
    let a = document.getElementById("fistnumber").value
    let b = document.getElementById("secondnumber").value
    let sum = a + b
    let message = `1st number is ${a}, 2nd number is ${b}  and their sum is equal to ${sum} `
    let text = document.getElementById("text")
    text.innerText = message
}

// function prinNameWithMessage(str) {
//     console.log(`Hi, ${str} How are you!`)
// }
// prinNameWithMessage("Reshav Thakur")


