function showSum() {
    let evenSum = 0
    let oddSum = 0
    let inputValue = parseInt(document.getElementById("input").value)
    for (let i = 1; i <= inputValue; i++) {
        console.log(i)
        if (i % 2 === 0) {
            evenSum += i
        }
        else {
            oddSum += i
        }
    }
    let div = document.createElement("div")
    div.innerHTML = `sum of even number is ${evenSum} and sum of odd number is ${oddSum}`
    document.getElementById("output").appendChild(div)


}