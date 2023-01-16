let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 500, 100, 1800, 188, 101]

let sumOfArray = (a) => {
    let sum = 0;
    // example 1
    // for (let i = 0; i < a.length; i++) {
    //     if (a[i] % 2 == 0) {
    //         console.log(a[i])
    //     }
    //     sum+=a[i]
    // }
    // example 2
    let i = 0
    // while (i < a.length) {
    //     sum += a[i]
    //     i++
    // }
    // example 3
    do {
        sum += a[i]
        i++
    } while (i < a.length)
    return sum
}

// console.log(sumOfArray(arr))

function findNumberer(a, num) {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        // if (a[i] === num) {
        //     return i
        // }
        if (a[i] % 2 === 1) {
            sum += a[i]
        }
    }
    return sum
}
console.log(findNumberer(arr, 4))
