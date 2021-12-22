//selecionar o primeiro valor
var value1 = prompt("Num")
//selecionar o operador
var operador = prompt("Operador")
//selecionar o segundo valor
var value2 = prompt("Num2")



//funcoes para cada operacao
//ADICAO
const add = function(num1,num2){
    return num1+num2;
}
//SUBTRA
const sub = function(num1,num2){
    return num1-num2;
}

//SOMA
const sum = function(...num){
    var arr = num;
    // arr = arr.concat(num);
    var reducer = (valAnt, valPost) => valAnt + valPost;
    return arr.reduce(reducer)
}
console.log(sum(3,4,5,6,7,1))

//multipl
const mult = function(...num){
    var arr = num;
    var reducer = (valAnt,valPost) => valAnt * valPost;
    return arr.reduce(reducer);
    
}
console.log(mult(5,5))

//n^2
const power = function(num){
    return num*num;

}
console.log(power(7))

const fator = function(num) {
    fatorial = 1;
    for(let x = 1; x<=num; x++){
        fatorial *= x;
        
        
    }
    return fatorial;
}
console.log(fator(8))

const operacao = function(num1,num2,operador){
    if(operador === "+"){
    return num1+num2;
    }
    else if(operador === "-"){
        return num1-num2;
    }
    else if(operador === )
}
const sub = function (num1,num2,operador){
    return num1 + operador + num2;
}

//resetar
const reducer = (x,y) => x - y
const arr = [1,2,3]
console.log(arr.reduce(reducer))
