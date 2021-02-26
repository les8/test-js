let startButton = document.getElementById("startButton")
startButton.onclick = start
let textarea = document.getElementById("textarea")
let reverse = document.getElementsByTagName("li")


function start() {      
    textarea.innerHTML = ""
    textarea.innerHTML += "--- PROGRESS START ---\n"
    startButton.value = "in progress"
    startButton.style.width = "30%" 

    setInterval(perebor, 1000)    
}

function perebor() {
    let x = 0
    if (x < reverse.length) {
        reverse[x].className += "reverse"
                             
        reverse[x].addEventListener("transitionstart", ontransitionstart)
        function ontransitionstart(){
            textarea.innerHTML += "Cell " + [x] + " animation START\n"
        }   
        reverse[x].addEventListener("transitionend", ontransitionend)
        function ontransitionend(){
            textarea.innerHTML += "Cell " + [x] + " animation END\n"
        }
        
        x++            
        if (x == reverse.length) {
            startButton.value = "start"
            startButton.style.width = "20%"
            alert("success!")
            textarea.innerHTML += "--- PROGRESS END ---\n"
            x++ 
        }
        
    } else return
}
