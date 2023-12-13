function add(num1, num2) {

    let sum = num1 + num2
    return sum
};
  
function subtract(num1, num2) {
    let difference = num1 - num2
    return difference
};

function multiply(num1, num2) {
    let product = num1 * num2
    return product
};

function divide(num1, num2) {
    let quotent = num1 / num2
    return quotent
}

function percent(num1) {
    let percent = num1 / 100 
    return percent
}


function operate(operation, num1, num2) {
    return operation(num1, num2)
}

let firstInputNum 
let secondInputNum
let working = ""

let buttons = document.querySelectorAll("[data-number]")
let operators = document.querySelectorAll("[data-operations]")
const display = document.getElementById("display")
const clear = document.getElementById("clear")



function clearDisplay()
{
    display.textContent = 0
    if (working.includes("+") || working.includes("-") || working.includes("/") || working.includes)
    {

    }
}

clear.addEventListener('click', clearDisplay)

buttons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operators.forEach((operator) => 
    operator.addEventListener('click', () => appendOperator(operator.textContent))
)

function appendNumber(number) {
    if (display.textContent === "0")
    {
        display.textContent = ""
    }
    if (number === "." && display.textContent.includes(`${number}`))
    {
        return 
    }

    if (display.textContent.length == 15)
    {
        return
    }
    
    display.textContent += number
    working = working + display.textContent

}


function appendOperator(operator)
{
    if (operator === "+/-")
    {
        if (display.textContent[0] === "-")
        {
            display.textContent = display.textContent.slice(1, display.textContent.length)
        }
        else
        {
            display.textContent = "-" + display.textContent
        }
    }

    if (working[working.length - 1] === "+" || working[working.length - 1] === "-" | working[working.length - 1] === "/" | working[working.length - 1] === "X") {
        console.log("should change operation")
        working = working.slice(0, working.length - 1)
        working += operator
    }
    else {
        working += operator
    }
    console.log(working)
}







