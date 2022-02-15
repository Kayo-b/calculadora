//Variables
const button = document.getElementsByClassName("button");
var arr = [];
var arrJoin = null;
var numbers = null;
var val = null;
var variables = []
var varGeral = null;
var joinVariables = [];
var stringNum = '';
var varStore = []
//GETTING INPUT DATA FROM UI
var clickEvent = function (btn){
    for(let x = 0;x<btn.length;x++){
        btn[x].addEventListener("click", (e) =>{
            let input = btn[x].textContent;
            if(input in ["1","2","3","4","5","6","7","8","9","0","(",")"]){
                numbers = exp(input);
                let x = operation(numbers);
                displayTest(x);
                console.log(joinVar)
            }
            else if(input === "C"){
                clear("C");
            }
            else if(input === "="){
                var result = calcFunc(joinVar);
                varStore = varStore.concat(joinVar);
                clear("variables");
                variables.push(result);
                displayTest(result);
                console.log(calcFunc(joinVar));
                if(input==="←"){
                    joinVar = varStore;
                    displayTest(joinVar);
                }
            }
            else if(input === "←"){
                operation("bkspce");
                // clear("bkspce")
                console.log(varStore)
    
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
    if(input==="bkspce"){
        joinVar = Array.from(joinVar)
        variables.pop();
        joinVar.pop();
        console.log(joinVar)
        joinVar = joinVar.join("");
        console.log(joinVar)
        displayTest(joinVar);

    }
    else{
        variables.push(input);
        joinVar = variables.join("");
        clear();


    }
    return joinVar;
}
//CLEAR
const clear = function(var1){
    arr = []
    
    if(var1 === "C"){
        variables = [];
        arrJoin = null;
        numbers = null;
        document.getElementById("display").innerHTML = null;
    }
    else if(var1==="variables"){
        variables = [];
    }
    // else if(var1==="bkspce"){
    //     joinVar = Array.from(joinVar)
    //     joinVar.pop();
    //     console.log(joinVar)
    // }
} 
function calcFunc(value){
    return new Function('return ' + value)();
}
calcFunc(joinVar)
// DISPLAY VALUES
function displayTest(var1){   
    let disp = document.getElementById("display").innerHTML = var1
}

