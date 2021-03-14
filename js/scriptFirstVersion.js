const startButton = document.getElementById("startButton")
const textarea = document.getElementById("textarea")
let reverse = document.getElementsByTagName("li")
let x = 0
let y = 1
let z = 1

startButton.onclick = start

function start() {      
    textarea.innerHTML = ""
    textarea.innerHTML += "--- PROGRESS START ---\n"
    startButton.value = "in progress"
    startButton.style.width = "30%"
    setInterval(animation, 300)
}

function animation() {
    if(x < reverse.length) {    
        reverse[x].className += "reverse"
        reverse[x].addEventListener("transitionstart", ontransitionstart)
        reverse[x].addEventListener("transitionend", ontransitionend)
        x++        
    }    
}

function ontransitionstart(){    
    textarea.innerHTML += "Cell " + y + " animation START\n"
    textarea.scrollTop = textarea.scrollHeight;
    y++
}

function ontransitionend(){
    textarea.innerHTML += "Cell " + z + " animation END\n"
    textarea.scrollTop = textarea.scrollHeight;
    z++
    if(z == reverse.length + 1) {        
        textarea.innerHTML += "--- PROGRESS END ---"
        startButton.value = "start"
        startButton.style.width = "20%"
        setTimeout(success, 10)
    }    
}

function success () {
    alert("success")
    window.location.reload()
}