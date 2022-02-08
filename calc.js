//GETTING INPUT DATA FROM UI
const button = document.getElementsByClassName("button");
var arr = [];
var arrJoin = null;
var numbers = null;
var val = null;
var variables = []
var varGeral = null;
var joinVariables = [];
var stringNum = ''
var clickEvent = function (btn){
    for(let x = 0;x<btn.length;x++){
        btn[x].addEventListener("click", (e) =>{
            let input = btn[x].textContent;
            if(input in ["1","2","3","4","5","6","7","8","9","0"]){
                numbers = exp(input);
                operation(numbers);
                displayTest(joinVar);
                // console.log(numbers);
                console.log(joinVar)
            }
            else if(input === "C"){
                clear("C");
                // console.log(numbers);
            }
            else if(input === "="){
                displayTest(calcFunc(joinVar));
                console.log(calcFunc(joinVar));
            }
            else{
                val = operation(input);
                displayTest(val);
                console.log(val)
            }
        })
    }
}
clickEvent(button);

//STORE NUMERIC INPUT
const exp = function(value){
    arr.push(value);
    arrJoin = Number(arr.join(''));
    return arrJoin;
}
//OPERATION
const operation = function(input){
    // variables.push(numbers);
    variables.push(input);
    joinVar = variables.join("");
    clear();
    return joinVar;
}
//CLEAR
const clear = function(var1){
    // arrJoin = null;
    arr = []
    if(var1 === "C"){
        variables = [];
        arrJoin = null;
        numbers = null;
        document.getElementById("display").innerHTML = null;
    }
} 
function calcFunc(value){
    return new Function('return ' + value)();
}
calcFunc(joinVar)
// DISPLAY VALUES
function displayTest(var1){   
    let disp = document.getElementById("display").innerHTML = var1
}
// console.log(variables)
