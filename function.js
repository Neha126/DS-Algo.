function greeting(name) {
    return "hello" + " " + name;
}
// console.log(greeting("neha"));


function sum(num1, num2) {
    return num1 + num2;
}
// console.log(sum(4,6));


function subtract(num1, num2) {
    return num1 - num2;
}
// console.log(subtract(15,-4));
function calculate(symbol, list) {
    let result;
    switch (symbol) {

        case "+":
            result = 0;
            for (let idx = 0; idx < list.length; idx++) {
                result += list[idx];
            }
            return result;
        case "-":
            result = list[0];
            for (let idx = 1; idx < list.length; idx++) {
                result -= list[idx];
            }
            return result;
        case "*":
            result = 1;
            for (let idx = 0; idx < list.length; idx++) {
                result *= list[idx];
            }
            return result;
    }
}
console.log(
    calculate("+", [1, 2, 3]), // 3
    calculate("-", [4, 2]),    // 2
    calculate("*", [3, 2, 3, 5]) //6
);
//FIZZBUZZ//////
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log("fizzbuzz");
    }
    else if (i % 5 === 0) {
        // console.log("buzz");
    }
    else if (i % 3 === 0) {
        // console.log("fizz");
    } else {
        // console.log(i);
    }
}

//FIBONACCI

function fibonacci(n) {
    var num1 = 0;
    var num2 = 1;
    var sum;
    for (let i = 0; i < n; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
console.log(fibonacci(4));

//STACK

let stack = [2, 5, 6, 3, 4, 8];
console.log(stack.pop());
console.log(stack.push(100));
console.log(stack);





