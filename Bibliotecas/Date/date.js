const div_data= document.getElementById('div_data')
const div_relogio = document.getElementById('relogio')


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
}

let intervalo = setInterval(relogio, 1000)

relogio()
