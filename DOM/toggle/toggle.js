const caixaCursos = document.querySelector('#caixaCursos');
const btn_c=[...document.querySelectorAll('.curso')];
const c1_2=document.querySelector('#c1_2')
const cursos=["HTML","CSS","REACT","PHP","JAVASCRIPT","MYSQL"]
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado');
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarAntes = document.getElementById('btnAdicionarAntes')
const btnAdicionarDepois = document.getElementById('btnAdicionarDepois')
const cursoDigitado = document.getElementById('nomeCurso')


let indice = 0

const tirarSelecao=()=>{
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarCursos=(curso)=>{
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener('click', (evt)=>{
        tirarSelecao(novoElemento)
        evt.target.classList.toggle("selecionado")
    })

    return novoElemento
}


cursos.map((elemento)=>{
    const curso = criarCursos(elemento)
    caixaCursos.appendChild(curso)
    indice++
})

const cursoSelecionado=()=>{
    const cs = [...document.querySelectorAll(".selecionado")]
    return cs[0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    try {
        const cs=cursoSelecionado().innerHTML
        alert("Curso selecionado: " + cs)
    } catch (error) {
        alert("Selecione um curso")
    }
})

btnRemoverCurso.addEventListener('click', (evt)=>{
    
    if(cursoSelecionado!=undefined){
        const cs=cursoSelecionado()
        cs.remove()
    } else {
        alert("Selecione um curso")
    }
})

btnAdicionarAntes.addEventListener('click', (evt)=>{
    try {
        if(cursoDigitado.value != ""){
            const curso = criarCursos(cursoDigitado.value)
            caixaCursos.insertBefore(curso,cursoSelecionado())
        } else {
            alert("Digite um curso")
        }
    } catch (error) {
        alert("Selecione um curso")
    }
})

btnAdicionarDepois.addEventListener('click', (evt)=>{
    try {
        if(cursoDigitado.value != ""){
            const cs=cursoSelecionado()
            const curso = criarCursos(cursoDigitado.value)  
            caixaCursos.insertBefore(curso,cs.nextSibling)
        } else {
            alert("Digite um curso")
        }
    } catch (error) {
        alert("Selecione um curso")
    }
})
