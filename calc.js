const button = document.getElementsByClassName("button");

var clickEvent = function (btn){
    for(let x = 0;x<btn.length;x++){
        btn[x].addEventListener("click", (e) =>{
            alert(btn[x].textContent);
        })
    }
}
clickEvent(button);

// var getAtt = function() {
//     var attribute = this.getAttribute("class");
//     alert(attribute)
// }

// for(let x = 0; x<button.length; x++){
//     button[x].addEventListener('click', getAtt,false)
// }
