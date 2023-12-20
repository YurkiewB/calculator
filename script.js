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
    if (num2 === 0) {
        alert("Divide by Zero error")
    }
    else {
        let quotent = num1 / num2
        return quotent
    }   
}

function percent(num1) {
    let percent = num1 / 100 
    return percent
}

function operate(operation, num1, num2) {
    console.log(`operate: ${operation}(${num1}, ${num2})`);
    const result = operation(num1, num2);
    console.log(`Result: ${result}`);
    return result;
}

let firstInputNum 
let secondInputNum
let working = ""

const operation_table = {
    "+" : add,
    "-" : subtract,
    "/" : divide,
    "X" : multiply,
    "%" : percent
}

let buttons = document.querySelectorAll("[data-number]")
let operators = document.querySelectorAll("[data-operations]")
const display = document.getElementById("display")
const clear = document.getElementById("clear")



function clearDisplay()
{
    if (display.textContent === "0")
    {
        working = ""
    }
    else {
        display.textContent = "0"
        working = working.slice(0, working.length - 1)
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

    if (working[working.length - 1] === "+" || working[working.length - 1] === "-" || working[working.length - 1] === "/" || working[working.length - 1] === "X")
    {
        display.textContent = ""
        display.textContent = number
        working += number
        console.log("if", working)
    }
    else if (working.includes("+") || working.includes("-") || working.includes("/") || working.includes("X")){
        display.textContent += number
        working += number
        console.log("else if", working)
    }
    else {
        display.textContent += number
        working = display.textContent
        console.log("else", working)
    }
    
    
}


function appendOperator(operator)
{
    if (working.includes("+") || working.includes("-") || working.includes("/") || working.includes("X")) {
        let result = 0
        for (const operation in operation_table) 
        {
            working_array = working.split(`${operation}`)
            console.log(working_array)
            firstInputNum = parseFloat(working_array[0])
            secondInputNum =  parseFloat(working_array[1])
            console.log("firstNum", firstInputNum)
            console.log("secondNum", secondInputNum)

            if (working.slice(1, working.length).includes(`${operation}`))
            {
                let compute = operation_table[operation]
                result = Math.round(operate(compute, firstInputNum, secondInputNum) * 1000) / 1000
            }
        }

        display.textContent = result
        working = result
        console.log("working", working)
    }

    if (operator === "+/-")
    {
        if (display.textContent[0] === "-")
        {
            display.textContent = display.textContent.slice(1, display.textContent.length)
            working = display.textContent
        }
        else
        {
            display.textContent = "-" + display.textContent
            working = display.textContent
        }
    }

    if (working[working.length - 1] === "+" || working[working.length - 1] === "-" || working[working.length - 1] === "/" || working[working.length - 1] === "X") {
        console.log("should change operation")
        working = working.slice(0, working.length - 1)
        working += operator
    }
    else if (operator != "+/-") {
        working += operator
    }

}
