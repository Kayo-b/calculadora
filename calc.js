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
var disp = null;
// var varStore = []

//GETTING INPUT DATA FROM UI
var clickEvent = function (btn){
    for(let x = 0;x<btn.length;x++){
        btn[x].addEventListener("click", (e) =>{
            let input = btn[x].textContent;
            if(input in ["1","2","3","4","5","6","7","8","9","0","(",")"]){
                numbers = exp(input);
                let x = operation(numbers);
                displayTest(x);
                console.log("operationNUmbers = " + x)
                console.log(joinVar)
            }
            else if(input === "C"){
                clear("C");
            }
            else if(input === "="){
                var result = calcFunc(joinVar);
                // varStore = varStore.concat(joinVar);
                clear("variables");
                variables.push(result);
                displayTest(result);
                console.log(calcFunc(joinVar));
            }
            else if(input === "←"){
                displayTest(joinVar);
                operation("bkspce");
                // console.log(varStore)
    
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
        clear("variables")
        //after pressing backspace in a resuult, this keeps the result after pressing reuseable for a new equation
        let bkspceJoinVar = joinVar.join("");

        variables.push(bkspceJoinVar);
        console.log("backspace = " + bkspceJoinVar);
        displayTest(bkspceJoinVar);

    }
    else{
        variables.push(input);
        joinVar = variables.join("");
        console.log(joinVar)
        clear();
        if(joinVar.length > 12){
            document.getElementById("display").style.fontSize="2rem"

            if(joinVar.length > 30){
            document.getElementById("display").style.fontSize="1rem"
            // joinVar = Number(joinVar);
            // console.log(joinVar)
            // joinVar = joinVar.toExponential(10);
            // joinVar = String(joinVar)
            }
        }
        


    }
    return joinVar;
}
//CLEAR
const clear = function(var1){
    arr = [];
    if(var1 === "C"){
        variables = [];
        arrJoin = null;
        joinVar = [];
        numbers = null;
        document.getElementById("display").innerHTML = null;
        document.getElementById("display").style.fontSize="5rem"
    }
    else if(var1==="variables"){
        variables = [];
    }
    // else if(var1===varStore){
    //     varStore = [];
    // }
} 
function calcFunc(value){
    return new Function('return ' + value)();
}
calcFunc(joinVar)
// DISPLAY VALUES
function displayTest(var1){
    document.getElementById("display").innerHTML = var1
    disp = document.getElementById("display").innerHTML
    // if(disp > 999999999999){
    //     disp = Number()
    //     console.log(disp)

    // }
    

}