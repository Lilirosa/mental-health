btn = document.querySelector('.next')
step1 = document.querySelector('.step1')
step2 = document.querySelector('.step2')
step3 = document.querySelector('.step3')
step4 = document.querySelector('.step4')
step5 = document.querySelector('.step5')

let index = 0
btn.addEventListener('click', () => {
    button_cycle()
})

function button_cycle() {
    btn.style.fontSize = "20px"
    if (index == 0) {
        step1.style.opacity = 1
        index = index + 1
        btn.innerText = "Next"
    }
    else if (index == 1) {
        step2.style.opacity = 1
        step1.style.opacity = 0
        index = index + 1
        btn.innerText = "Next"
    }
    else if (index == 2){
        step3.style.opacity = 1
        step2.style.opacity = 0
        index = index + 1
        btn.innerText = "Next"
    }
    else if (index == 3){
        step4.style.opacity = 1
        step3.style.opacity = 0
        index = index + 1
        btn.innerText = "Next"
    }
    else if (index == 4) {
        step5.style.opacity = 1
        step4.style.opacity = 0
        index = index + 1
        btn.innerText = "Restart"
    }
    else if (index == 5){
        step5.style.opacity = 0
        index = 0
        btn.innerText = "Start"
    }
}