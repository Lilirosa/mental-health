balloon = document.querySelector('.balloon')
btn1 = document.querySelector('.button1')
btn2 = document.querySelector('.button2')
side1 = document.querySelector('.side1')
side2 = document.querySelector('.side2')
side3 = document.querySelector('.side3')
side4 = document.querySelector('.side4')

let balloon_bool = true
let box_bool = true

btn1.addEventListener('click', () => {
    balloon_bool = true
    box_bool = false
    side1.style.opacity = 0
    side2.style.opacity = 0
    side3.style.opacity = 0
    side4.style.opacity = 0
    while(balloon_bool == true){
        balloonChange()
        setInterval(balloonChange, 19000)
    }
})

btn2.addEventListener('click', () => {
    balloon_bool = false
    box_bool = true
    balloon.classList.remove('shrink')
    balloon.classList.remove('grow')
    while (box_bool == true){
        boxBreath()
        setInterval(boxBreath, 17000)
    }
})

function balloonChange(){
    btn1.innerText = "Breathe In"
    balloon.classList.add('grow')
    balloon.classList.remove('shrink')

    setTimeout(()=> {
        btn1.innerText = "Hold"

        setTimeout(() => {
            btn1.innerText = "Breathe Out"
            balloon.classList.add('shrink')
            balloon.classList.remove('grow')
        }, 7000)
    }, 4000)
}

function boxBreath() {
    side1.style.opacity = 1
    setTimeout(() => {
        side2.style.opacity = 1
    }, 4000)
    setTimeout(() => {
        side3.style.opacity = 1
    }, 8000)
    setTimeout(() => {
        side4.style.opacity = 1
    }, 12000)
    setTimeout(() => {
        side1.style.opacity = 0
        side2.style.opacity = 0
        side3.style.opacity = 0
        side4.style.opacity = 0
    }, 16000)
}

