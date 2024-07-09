const div_data= document.getElementById('div_data')
const div_relogio = document.getElementById('div_relogio')
const btn_ativar = document.getElementById('btn_ativar')
const btn_parar = document.getElementById('btn_parar')
const tmp_alarme = document.getElementById('tmp_alarme')
const hora_alarme = document.getElementById('hora_alarme')
const timer = document.getElementById('timer')

let ts_atual = null
let ts_alarme = null
let alarme_ativo = false   
let alamre_tocando = false

btn_ativar.addEventListener("click", ()=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual + tmp_alarme.value * 1000
    alarme_ativo = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML = "Hora do alarme: " + 
    dt_alarme.getHours() + ":" + 
    dt_alarme.getMinutes() + ":" +
     dt_alarme.getSeconds()
})

btn_parar.addEventListener("click", ()=>{
    alarme_ativo = false
    alamre_tocando = false
    hora_alarme.innerHTML = "Hora do alarme: "
    tmp_alarme.value = 0
    timer.classList.remove('alarme')
})

const relogio=()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? '0' + hora : hora
    let minuto = data.getMinutes()
    minuto = minuto < 10 ? '0' + minuto : minuto
    let segundo = data.getSeconds()
    segundo = segundo < 10 ? '0' + segundo : segundo
    const hora_completa = hora + ':' + minuto + ':' + segundo
    div_relogio.innerHTML = hora_completa
    if(alarme_ativo && !alamre_tocando){
        if(data.getTime() >= ts_alarme){
            alamre_tocando = true
            timer.classList.add('alarme')
        }
    }
}

let intervalo = setInterval(relogio, 1000)

relogio()
