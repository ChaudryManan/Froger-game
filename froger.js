const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')
const carsLeft = document.querySelectorAll('.car-left')
const carsRight = document.querySelectorAll('.car-right')
const logleft=document.querySelectorAll(".log-left")
const logright=document.querySelectorAll(".log-right")
const carleft=document.querySelectorAll(".car-left")
const carright=document.querySelectorAll(".car-right")

let currentIndex = 76
const width = 9
let timerId
let outcomeTimerId
let currentTime = 20

function moveFrog(e) {
    squares[currentIndex].classList.remove('frog')

    switch(e.key) {
        case 'ArrowLeft' :
            console.log("left")
             if (currentIndex % width !== 0) currentIndex -= 1
            break
        case 'ArrowRight' :
            if (currentIndex % width < width - 1) currentIndex += 1
            break
        case 'ArrowUp' :
            if (currentIndex - width >=0 ) currentIndex -= width
            break
        case 'ArrowDown' :
            if (currentIndex + width < width * width) currentIndex += width
            break
    }
    squares[currentIndex].classList.add('frog')
}


document.addEventListener('keyup', moveFrog);
function automove(){
    currentTime--
    timeLeftDisplay.innerHTML=`${currentTime}`
    if(currentTime<=0){
        resultDisplay .innerHTML="you lose"
        clearInterval(timerId)
        squares[currentIndex].classList.remove("frog")
        document.removeEventListener('keyup', moveFrog);
    }
    logleft.forEach(log=>moveleft(log))
    logright.forEach(log=>moveright(log))
    carleft.forEach(log=>car(log))
    carright.forEach(log=>cars(log))
    lose()
    win()
    
}

function moveleft(logleft){
  
switch(true){
    case logleft.classList.contains("l1"):
     logleft.classList.remove("l1")  
     logleft.classList.add("l2")  
     break;
    case logleft.classList.contains("l2"):
     logleft.classList.remove("l2")  
     logleft.classList.add("l3")  
     break;
    case logleft.classList.contains("l3"):
     logleft.classList.remove("l3")  
     logleft.classList.add("l4")  
     break;
    case logleft.classList.contains("l4"):
     logleft.classList.remove("l4")  
     logleft.classList.add("l5")  
     break;
    case logleft.classList.contains("l5"):
     logleft.classList.remove("l5")  
     logleft.classList.add("l1")  
     break;
}
}
function moveright(logright){
  
switch(true){
    case logright.classList.contains("l1"):
     logright.classList.remove("l1")  
     logright.classList.add("l5")  
     break;
    case logright.classList.contains("l2"):
     logright.classList.remove("l2")  
     logright.classList.add("l1")  
     break;
    case logright.classList.contains("l3"):
     logright.classList.remove("l3")  
     logright.classList.add("l2")  
     break;
    case logright.classList.contains("l4"):
     logright.classList.remove("l4")  
     logright.classList.add("l3")  
     break;
    case logright.classList.contains("l5"):
     logright.classList.remove("l5")  
     logright.classList.add("l4")  
     break;
}
}
function car(car){
  
    switch(true){
        case car.classList.contains("c1"):
         car.classList.remove("c1")  
         car.classList.add("c2")  
         break;
        case car.classList.contains("c2"):
         car.classList.remove("c2")  
         car.classList.add("c3")  
         break;
        case car.classList.contains("c3"):
         car.classList.remove("c3")  
         car.classList.add("c1")  
         break;
      
    }
    }
function cars(car){
  
    switch(true){
        case car.classList.contains("c1"):
         car.classList.remove("c1")  
         car.classList.add("c3")  
         break;
        case car.classList.contains("c2"):
         car.classList.remove("c2")  
         car.classList.add("c1")  
         break;
        case car.classList.contains("c3"):
         car.classList.remove("c3")  
         car.classList.add("c2")  
         break;
      
    }
    }
    function lose(){
        if(squares[currentIndex].classList.contains("c1")||
        squares[currentIndex].classList.contains("l4")||
        squares[currentIndex].classList.contains("l5") ){
            resultDisplay .innerHTML="you lose"
clearInterval(timerId)
squares[currentIndex].classList.remove("frog")
document.removeEventListener('keyup', moveFrog);

        }
    }
    function win(){
        if(squares[currentIndex].classList.contains("ending-block")){
            resultDisplay .innerHTML="you win"
            clearInterval(timerId)

            document.removeEventListener('keyup', moveFrog);
        }
    }
timerId=setInterval(automove,1000)

