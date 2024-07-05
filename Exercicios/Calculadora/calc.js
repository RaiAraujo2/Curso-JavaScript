const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const telcaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const tcpy = document.querySelector('#tcpy')
const tlimpar = document.querySelector('#tlimpar')
const tigual = document.querySelector('#tigual')
const calc_aba = document.querySelector('.calc_aba')
const calc = document.querySelector('.calc')
const img_calc = document.getElementById('img_calc')


let sinal = false
let decimal = false

teclasNum.forEach((el)=>{
    el.addEventListener('click', (evt)=>{
        sinal = false
        
        if(evt.target.innerHTML == "."){
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0."
                } else{
                    display.innerHTML += evt.target.innerHTML
                }
            } 
        } else{ 
            
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
       
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener('click', (evt)=>{
        decimal = false
        if(!sinal){
            sinal = true
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == 'x'){
                display.innerHTML += '*'
            } else{
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener('click', ()=>{
    sinal = false
    decimal = false
    display.innerHTML = '0'
})


tigual.addEventListener('click', (evt)=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

tcpy.addEventListener('click', (evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
    
})

calc_aba.addEventListener('click', (evt)=>{
    calc.classList.toggle('calc_exibir')
    if(calc.classList.contains("calc_exibir")){
        img_calc.setAttribute('src', 'arrow_left_50dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg')
    } else{
        img_calc.setAttribute('src', 'arrow_right_50dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg')
    }
})