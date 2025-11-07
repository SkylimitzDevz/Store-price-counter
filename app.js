let price = document.getElementById("amount")
let currentNum = document.getElementById("current-val")

let num1 = ""
let num2 = ""
let operator = ""
let total = ""
let numRecord = ""

let backup = price.innerText

function getOperator(opVal) {
    operator = opVal.innerText
    currentNum.innerText += operator
}

function clearVal() {
    console.log("clear-works")
    price.innerText = backup
    currentNum.innerText = ""
    num1 = ""
    num2 = ""
    operator = ""
    total = ""
}

// -----gets clicked number-----

function getNum(btnValue) {
    if (operator === "") {
        num1 += btnValue.innerText
        console.log("num1: " + num1)

        currentNum.innerText = num1
        numRecord = currentNum.innerText
        console.log("numRecord: " + numRecord)
    }

    else {
        num2 += btnValue.innerText
        console.log("num2: " + num2)

        currentNum.innerText = num1 + operator + num2
    }
}

function calculateVal() {

    Number(num1)
    Number(num2)
    

    if (operator === "+") {
        total = Number(num1) + Number(num2)
    }
    
    else if (operator === "-") {
        total = Number(num1) - Number(num2)
    }
    
    else if (operator === "/") {
        total = Number(num1) / Number(num2)
    }

    else if (operator === "X") {
        total = Number(num1) * Number(num2)
    }

    console.log("total: " + total)
    price.innerText = "$" + total
}

