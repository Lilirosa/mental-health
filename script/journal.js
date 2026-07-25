journal = document.querySelector('.journal')
journal2 = document.querySelector('.journal2')
journal3 = document.querySelector('.journal3')
journal4 = document.querySelector('.journal4')
journal5 = document.querySelector('.journal5')
journal6 = document.querySelector('.journal6')
journal7 = document.querySelector('.journal7')
journal8 = document.querySelector('.journal8')
journal9 = document.querySelector('.journal9')
journal10 = document.querySelector('.journal10')

input = document.querySelector('.input')
input2 = document.querySelector('.input2')
input3 = document.querySelector('.input3')
input4 = document.querySelector('.input4')
input5 = document.querySelector('.input5')
input6 = document.querySelector('.input6')
input7 = document.querySelector('.input7')
input8 = document.querySelector('.input8')
input9 = document.querySelector('.input9')
input10 = document.querySelector('.input10')

prevbtn = document.querySelector('.previous_button')
nextbtn = document.querySelector('.next_button')

const max_lines = 16
const count = 0
let index = 0
const list = ['1/2', '3/4', '5/6', '7/8', '9/10']

input.addEventListener('input', () => {
    localStorage.setItem('savedText', input.value)
    const lines = input.value.split('\n')
    if (lines.length > max_lines){
        input.value = lines.slice(0, max_lines).join('\n')
        alert(`You can only enter up to ${max_lines} lines.`)
    }
})
input2.addEventListener('input', () => {
    localStorage.setItem('savedText2', input2.value)
    const lines = input2.value.split('\n')
    if (lines.length > max_lines){
        input2.value = lines.slice(0, max_lines).join('\n')
        alert(`You can only enter up to ${max_lines} lines.`)
    }
})
input3.addEventListener('input', () => {
    localStorage.setItem('savedText3', input3.value)
    const lines = input3.value.split('\n')
    if (lines.length > max_lines){
        input3.value = lines.slice(0, max_lines).join('\n')
        alert(`You can only enter up to ${max_lines} lines.`)
    }
})
input4.addEventListener('input', () => {
    localStorage.setItem('savedText4', input4.value)
    const lines = input4.value.split('\n')
    if (lines.length > max_lines){
        input4.value = lines.slice(0, max_lines).join('\n')
        alert(`You can only enter up to ${max_lines} lines.`)
    }
})
input5.addEventListener('input', () => {
    localStorage.setItem('savedText5', input5.value)
    const lines = input5.value.split('\n')
    if (lines.length > max_lines){
        input5.value = lines.slice(0, max_lines).join('\n')
        alert(`You can only enter up to ${max_lines} lines.`)
    }
})
input6.addEventListener('input', () => {
    localStorage.setItem('savedText6', input6.value)
    const lines = input6.value.split('\n')
    if (lines.length > max_lines){
        input6.value = lines.slice(0, max_lines).join('\n')
        alert(`You can only enter up to ${max_lines} lines.`)
    }
})
input7.addEventListener('input', () => {
    localStorage.setItem('savedText7', input7.value)
    const lines = input7.value.split('\n')
    if (lines.length > max_lines){
        input7.value = lines.slice(0, max_lines).join('\n')
        alert(`You can only enter up to ${max_lines} lines.`)
    }
})
input8.addEventListener('input', () => {
    localStorage.setItem('savedText8', input8.value)
    const lines = input8.value.split('\n')
    if (lines.length > max_lines){
        input8.value = lines.slice(0, max_lines).join('\n')
        alert(`You can only enter up to ${max_lines} lines.`)
    }
})
input9.addEventListener('input', () => {
    localStorage.setItem('savedText9', input9.value)
    const lines = input9.value.split('\n')
    if (lines.length > max_lines){
        input9.value = lines.slice(0, max_lines).join('\n')
        alert(`You can only enter up to ${max_lines} lines.`)
    }
})
input10.addEventListener('input', () => {
    localStorage.setItem('savedText10', input10.value)
    const lines = input10.value.split('\n')
    if (lines.length > max_lines){
        input10.value = lines.slice(0, max_lines).join('\n')
        alert(`You can only enter up to ${max_lines} lines.`)
    }
})

window.addEventListener('load', () => {
    if (localStorage.getItem('savedText')) {
        input.value = localStorage.getItem('savedText')
    }
    if (localStorage.getItem('savedText2')){
        input2.value = localStorage.getItem('savedText2')
    }
    if (localStorage.getItem('savedText3')){
        input3.value = localStorage.getItem('savedText3')
    }
    if (localStorage.getItem('savedText4')){
        input4.value = localStorage.getItem('savedText4')
    }
    if (localStorage.getItem('savedText5')){
        input5.value = localStorage.getItem('savedText5')
    }
    if (localStorage.getItem('savedText6')){
        input6.value = localStorage.getItem('savedText6')
    }
    if (localStorage.getItem('savedText7')){
        input7.value = localStorage.getItem('savedText7')
    }
    if (localStorage.getItem('savedText8')){
        input8.value = localStorage.getItem('savedText8')
    }
    if (localStorage.getItem('savedText9')){
        input9.value = localStorage.getItem('savedText9')
    }
    if (localStorage.getItem('savedText10')){
        input10.value = localStorage.getItem('savedText10')
    }
})

nextbtn.addEventListener('click', () => {
    index += 1
    if (index == 1){
        prevbtn.style.opacity = 1
        prevbtn.style.cursor = "pointer"
        journal3.style.zIndex = 1
        journal3.style.opacity = 1
        journal4.style.zIndex = 1
        journal4.style.opacity = 1
        input3.style.zIndex = 1
        input3.style.opacity = 1
        input4.style.zIndex = 1
        input4.style.opacity = 1

        journal.style.zIndex = -1
        journal.style.opacity = 0
        journal2.style.zIndex = -1
        journal2.style.opacity = 0
        input.style.zIndex = -1
        input.style.opacity = 0
        input2.style.zIndex = -1
        input2.style.opacity = 0
    }
    else if (index == 2){
        journal5.style.zIndex = 1
        journal5.style.opacity = 1
        journal6.style.zIndex = 1
        journal6.style.opacity = 1
        input5.style.zIndex = 1
        input5.style.opacity = 1
        input6.style.zIndex = 1
        input6.style.opacity = 1

        journal3.style.zIndex = -1
        journal3.style.opacity = 0
        journal4.style.zIndex = -1
        journal4.style.opacity = 0
        input3.style.zIndex = -1
        input3.style.opacity = 0
        input4.style.zIndex = -1
        input4.style.opacity = 0
    }
    else if (index == 3){
        journal7.style.zIndex = 1
        journal7.style.opacity = 1
        journal8.style.zIndex = 1
        journal8.style.opacity = 1
        input7.style.zIndex = 1
        input7.style.opacity = 1
        input8.style.zIndex = 1
        input8.style.opacity = 1

        journal5.style.zIndex = -1
        journal5.style.opacity = 0
        journal6.style.zIndex = -1
        journal6.style.opacity = 0
        input5.style.zIndex = -1
        input5.style.opacity = 0
        input6.style.zIndex = -1
        input6.style.opacity = 0
    }
    else if (index == 4) {
        nextbtn.style.opacity = 0
        nextbtn.style.cursor = "none"
        journal9.style.zIndex = 1
        journal9.style.opacity = 1
        journal10.style.zIndex = 1
        journal10.style.opacity = 1
        input9.style.zIndex = 1
        input9.style.opacity = 1
        input10.style.zIndex = 1
        input10.style.opacity = 1

        journal8.style.zIndex = -1
        journal8.style.opacity = 0
        journal7.style.zIndex = -1
        journal7.style.opacity = 0
        input8.style.zIndex = -1
        input8.style.opacity = 0
        input7.style.zIndex = -1
        input7.style.opacity = 0
    }
})

prevbtn.addEventListener('click', () => {
    index = index - 1
    if (index == 0){
        prevbtn.style.opacity = 0
        prevbtn.style.cursor = "none"
        journal.style.zIndex = 1
        journal.style.opacity = 1
        journal2.style.zIndex = 1
        journal2.style.opacity = 1
        input.style.zIndex = 1
        input.style.opacity = 1
        input2.style.zIndex = 1
        input2.style.opacity = 1

        journal3.style.zIndex = -1
        journal3.style.opacity = 0
        journal4.style.zIndex = -1
        journal4.style.opacity = 0
        input3.style.zIndex = -1
        input3.style.opacity = 0
        input4.style.zIndex = -1
        input4.style.opacity = 0
    }
    else if (index == 1){
        journal3.style.zIndex = 1
        journal3.style.opacity = 1
        journal4.style.zIndex = 1
        journal4.style.opacity = 1
        input3.style.zIndex = 1
        input3.style.opacity = 1
        input4.style.zIndex = 1
        input4.style.opacity = 1

        journal5.style.zIndex = -1
        journal5.style.opacity = 0
        journal6.style.zIndex = -1
        journal6.style.opacity = 0
        input5.style.zIndex = -1
        input5.style.opacity = 0
        input6.style.zIndex = -1
        input6.style.opacity = 0
    }
    else if (index == 2){
        journal5.style.zIndex = 1
        journal5.style.opacity = 1
        journal6.style.zIndex = 1
        journal6.style.opacity = 1
        input5.style.zIndex = 1
        input5.style.opacity = 1
        input6.style.zIndex = 1
        input6.style.opacity = 1

        journal7.style.zIndex = -1
        journal7.style.opacity = 0
        journal8.style.zIndex = -1
        journal8.style.opacity = 0
        input7.style.zIndex = -1
        input7.style.opacity = 0
        input8.style.zIndex = -1
        input.style.opacity = 0
    }
    else if (index == 3){
        nextbtn.style.opacity = 1
        nextbtn.style.cursor = "pointer"
        journal7.style.zIndex = 1
        journal7.style.opacity = 1
        journal8.style.zIndex = 1
        journal8.style.opacity = 1
        input7.style.zIndex = 1
        input7.style.opacity = 1
        input8.style.zIndex = 1
        input8.style.opacity = 1

        journal9.style.zIndex = -1
        journal9.style.opacity = 0
        journal10.style.zIndex = -1
        journal10.style.opacity = 0
        input9.style.zIndex = -1
        journal9.style.opacity = 0
        input10.style.zIndex = -1
        journal10.style.opacity = 0
    }
})

//fix opacity and check if buttons show correct pages.
