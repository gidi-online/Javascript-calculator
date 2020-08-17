//Declaring and assigning buttons
var displayValElement = document.getElementById("display");
var btnValue = document.getElementsByClassName("btn-value");
var btnOperator = document.getElementsByClassName("btn-operator");
var clear = document.getElementsByClassName("clear");
var decimal = document.getElementsByClassName("decimal");

var displayVal = "0";
var pendingVal;
var evalStringArray = [ ];

// adding event listners
for (let i = 0; i < btnValue.length; i++) {
    btnValue[i].addEventListener('click', updateDisplayValue);
}

for (let i = 0; i < btnOperator.length; i++) {
    btnOperator[i].addEventListener('click', performOperation);
}


// displaying value in screen
function updateDisplayValue(e) {
    var btnText = e.target.innerText;
    if (displayVal === "0") {
        displayVal = " ";
    }

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

//perform arithmetic operation
function performOperation(e) {
    var operator = e.target.innerText;

    switch(operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;

        case '-':
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;  

        case '/':
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;      

        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(` `));
            displayVal = evaluation + " ";
            displayValElement.innerText = displayVal;
            evalStringArray = [ ];  //clear the array
            break;  
        default:
            break;
    }

}

// clear display 
 clear.onclick = () =>  {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

// add decimal 
decimal.onclick = () => {
    if(!displayVal.includes('.')) {
        displayVal += '.';
    }
    displayValElement.innerText = displayVal;
}



