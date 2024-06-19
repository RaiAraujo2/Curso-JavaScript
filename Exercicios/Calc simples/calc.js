const resultado = document.getElementById('resultado')
const btn_soma = document.getElementById('btn_soma')
const btn_subtracao = document.getElementById('btn_subtracao')
const btn_multiplicacao = document.getElementById('btn_multiplicacao')
const btn_divisao = document.getElementById('btn_divisao')


const op = [
    ()=>{
        const val = [document.getElementById('valor_um').value, document.getElementById('valor_dois').value]
        resultado.value= Number(val[0]) + Number(val[1])
    },
    ()=>{
        const val = [document.getElementById('valor_um').value, document.getElementById('valor_dois').value]
        resultado.value= Number(val[0]) - Number(val[1])
    },
    ()=>{
        const val = [document.getElementById('valor_um').value, document.getElementById('valor_dois').value]
        resultado.value= Number(val[0]) * Number(val[1])
    },
    ()=>{
        const val = [document.getElementById('valor_um').value, document.getElementById('valor_dois').value]
        resultado.value= Number(val[0]) / Number(val[1])
    }
]

btn_soma.addEventListener("click", op[0])
btn_subtracao.addEventListener("click", op[1])
btn_multiplicacao.addEventListener("click", op[2])
btn_divisao.addEventListener("click", op[3])