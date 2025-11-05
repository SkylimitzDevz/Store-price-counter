let price = document.getElementById("amount")
let currentNum = document.getElementById("current-val")
let num = ""
let total = ""
let backup = price.innerText

function getNum(btnValue) {
    num += btnValue.innerText
    console.log(num)
    currentNum.innerText = num
}

function add() {
    let value = Number(num)
    total = Number(total) + value
    price.innerText = "$" + total
    num = ""
}

function clearVal() {
    num = ""
    total = ""
    currentNum.innerText = num
    price.innerText = backup

}
