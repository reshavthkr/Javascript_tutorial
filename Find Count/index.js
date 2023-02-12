var arr = []
function addNumbers() {
    let enteredValue = parseInt(document.getElementById("input").value)
    arr.push(enteredValue)
    document.getElementById("input").value = ""
}

function showCount() {
    let output = document.getElementById("output")
    let positiveCount = 0
    let negativeCount = 0
    let zeroCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++
        }
        else if (arr[i] < 0) {
            negativeCount++
        }

        else {
            zeroCount++
        }
    }
    let newDiv = document.createElement("div")
    newDiv.innerHTML = `Entered Numbers ara ${arr} out of which positive number is equal 
                        to ${positiveCount}, negative numbers is equal to ${negativeCount} 
                        and zeros is equal to ${zeroCount}`

    output.appendChild(newDiv)
}