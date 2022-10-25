const hisEl = document.getElementById("display1")
const resultEl = document.getElementById("result")

let firstNum = " ";
let secNum = "";
let tempresult = 0;
let lastoperation = "";
let previousoperation = "";
let dot = false;

function display (num) {
    if (num === "." && !dot){
        dot = true;
    }
    else if (num === "." && dot) {
        return;
    }
    secNum += num;
    resultEl.value = secNum;
}

function operation (operationSign) {
    dot = false;
    lastoperation = operationSign;
    
    tohisEl (operationSign);

    if (tempresult === 0) { 
        tempresult = tempresult + parseFloat(secNum);
        resultEl.value = tempresult;
    }
    if (tempresult !== 0){
        result (previousoperation);
    }
   
    previousoperation = lastoperation;
    secNum = "";
}

function tohisEl (symbol) {
    if (hisEl.innerText == 0){
        firstNum = secNum + symbol;
        hisEl.innerText = firstNum;
    }

    else if (hisEl.innerText !== 0){
        firstNum = hisEl.innerText + secNum + symbol;
        hisEl.innerText = firstNum;
    }
}

function result (m) {
    if (m === "+"){
        tempresult = parseFloat(tempresult) + parseFloat(secNum)
        resultEl.value = tempresult;
    }
    else if (m === "-"){
        tempresult = parseFloat(tempresult) - parseFloat(secNum)
        resultEl.value = tempresult;
    }
    else if (m === "*"){
        tempresult = parseFloat(tempresult) * parseFloat(secNum)
        resultEl.value = tempresult;
    }
    else if (m === "/"){
        tempresult = parseFloat(tempresult) / parseFloat(secNum)
        resultEl.value = tempresult;
    }
    else if (m === "%"){
        tempresult = parseFloat(tempresult) % parseFloat(secNum)
        resultEl.value = tempresult;
    }
}

function Del() {
    secNum = secNum.slice(0,-1)
    resultEl.value = resultEl.value.slice(0,-1);
}

function Clear () {
    hisEl.innerText = 0;
    firstNum = "";
    resultEl.value = 0;
    secNum = "";
    tempresult = 0;
}

function calculate (){
    operation (previousoperation);
    hisEl.innerText = hisEl.innerText.slice(0,-1);
    lastoperation = "";
    previousoperation ="";
}

document.addEventListener('keydown', (e)=>{
    if (e.key >= 0 ) { display (e.key)}
    else if (e.key == "Escape") { Clear() }
    else if (e.key == "Delete") { Del() }
    else if (e.key == "Backspace") { Del() }
    else if (e.key == "Enter") { calculate () }
    else if (e.key == '+') { operation (e.key) }
    else if (e.key == '-') { operation (e.key) }
    else if (e.key == '*') { operation (e.key) }
    else if (e.key == '/') { operation (e.key) }
    else if (e.key == '%') { operation (e.key) }
    else if (e.key == '.') { display (e.key) }
    else {alert("Only numbers are allowed")}
})