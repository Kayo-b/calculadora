//GETTING INPUT DATA FROM UI
const button = document.getElementsByClassName("button");
var arr = [];
var arrJoin = null
var clickEvent = function (btn){
    for(let x = 0;x<btn.length;x++){
        btn[x].addEventListener("click", (e) =>{
            let input = btn[x].textContent;
            alert(exp(input));
        })
    }

}
clickEvent(button);

//STORE NUMERIC INPUT
exp = function(value){
    arr.push(value);
    arrJoin = Number(arr.join(''));
    return arrJoin;

}
//DETERMINE OPERATIONS DEPENDING ON INPUT DATA
//DISPLAY VALUES 