const button = document.getElementsByClassName("button")

var clickEvent = function (btn){
    for(let x = 0;x<btn.length;x++){
        btn[x].addEventListener("click", (e) =>{
            alert("Click!");
    
        })
    }
    // return event;
}

clickEvent(button);