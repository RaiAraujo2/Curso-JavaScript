const p_array = document.getElementById("array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos = [10,20,5,1,2,12,31]
p_array.innerHTML = "["+elementos+"]"

btnPesquisar.addEventListener('click', (evt)=>{
    resultado.innerHTML= "Valor nao encontrado"
    const res = elementos.find((elem, ind)=>{
        if(elem == txt_pesquisar.value){
            resultado.innerHTML = "Valor encontrado " + elem + " na posicao " + ind
            return elem
        }
    })
    console.log(res)
})