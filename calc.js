//GETTING INPUT DATA FROM UI
const button = document.getElementsByClassName("button");
var arr = [];
var arrJoin = null;
var numbers = null;
var val = null;
var variables = []
var varGeral = null;
var joinVariables = [];
var clickEvent = function (btn){
    for(let x = 0;x<btn.length;x++){
        btn[x].addEventListener("click", (e) =>{
            let input = btn[x].textContent;
            if(input in ["1","2","3","4","5","6","7","8","9","0"]){
                numbers = exp(input);
                console.log(numbers);
            }
            else if(input === "C"){
                clear();
                // console.log(numbers);
            }

            else if(input=== "="){

            }
            else{
                val = operation(input);
                console.log(val[0] val[1])
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
const operation = function(operator){
    variables.push(numbers);
    variables.push(operator);
    // joinVariables = variables.join('');
    return variables;




}
//CLEAR
const clear = function(){
    // arrJoin = null;
    arr = []
    variables = []

    // numbers = null;
    
} 

// DISPLAY VALUES 
// console.log(variables)

