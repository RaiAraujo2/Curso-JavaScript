const p_array = document.getElementById("array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos = [10,20,5,1,2,12,31]
p_array.innerHTML = "["+elementos+"]"

btnPesquisar.addEventListener('click', (evt)=>{
    resultado.innerHTML = "Array não conforme"
    const retorno = elementos.some((e,i,a)=>{
        return e>=10
    })
    if(retorno){
        resultado.innerHTML= "Array conforme"
    } 
})