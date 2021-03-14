const startButton = document.getElementById("startButton")
const textarea = document.getElementById("textarea")
const reverse = document.getElementsByTagName("li")
const revArr = [...reverse]

let zeroCondition = {
    x: 0,
    z: 1,
    y: 1 
}

startButton.addEventListener("click", start)

function start() {        
    startButton.removeEventListener("click", start)          
    textarea.innerHTML = "--- PROGRESS START ---\n"
    startButton.innerHTML = "in progress"
    setInterval(animation, 300)
    revArr.forEach(item => {      
        item.addEventListener("transitionstart", ontransitionstart)
        item.addEventListener("transitionend", ontransitionend)
    });
}

function animation() {    
    if(zeroCondition.x < revArr.length) {    
        revArr[zeroCondition.x].classList.add("reverse")
        zeroCondition.x++        
    }    
}

function ontransitionstart(){        
    textarea.innerHTML += "Cell " + zeroCondition.y + " animation START\n"
    textarea.scrollTop = textarea.scrollHeight;
    zeroCondition.y++
}

function ontransitionend(){        
    textarea.innerHTML += "Cell " + zeroCondition.z + " animation END\n"
    textarea.scrollTop = textarea.scrollHeight;
    zeroCondition.z++
    if(zeroCondition.z == revArr.length + 1) {        
        textarea.innerHTML += "--- PROGRESS END ---"
        startButton.innerHTML = "start"
        setTimeout(success, 10)
    }    
}

function success () {
    alert("success")
    window.location.reload() 
}