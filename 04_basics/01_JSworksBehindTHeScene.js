
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(7, 8)

// Works behind the scene//

// Step1: Global Execution --> this

// Step2: Memory Creation Phase :-
// val1 --> undefined
// val2 --> undefined
// addNum --> defination
// result1 --> undefined
// result2 --> undefined

// Step3: Execution Phase :-
// val1 --> 10
// val2 --> 5
// addNum(line no. 8) ---> New variable environment + Execution thread



// For more refer to video lecture[05:55:33]