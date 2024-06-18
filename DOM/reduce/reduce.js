const p_array = document.getElementById("array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos = [10,20,5,1,2,12,31]
p_array.innerHTML = "["+elementos+"]"
let atu = []
let ant = []

btnPesquisar.addEventListener('click', (evt)=>{
    resultado.innerHTML = "Array não conforme"
    resultado.innerHTML = elementos.reduce((anterior, atual, pos)=>{
        ant.push(anterior)
        atu.push(atual)
        return atual+anterior
    })
    resultado.innerHTML += "<br/>V.anterior: " +ant+"<br/>V.atual: "+atu
})