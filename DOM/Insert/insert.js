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
const criarCursos=(curso)=>{
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso

    const comandos = document.createElement('div');
    comandos.setAttribute("class","comandos")

    const rb = document.createElement('input');
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)

    return novoElemento
}


cursos.map((elemento)=>{
    const curso = criarCursos(elemento)
    caixaCursos.appendChild(curso)
    indice++
})

const cursoSelecionado=()=>{
    const todosRadios = [...document.querySelectorAll('input[type="radio"]')];
    const radioSelecionado = todosRadios.filter((elemento,indice,array)=>{
        return elemento.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    const radioSelecionado = cursoSelecionado()
    try {
        const cs=radioSelecionado.parentNode.previousSibling.textContent
        alert("Curso selecionado: " + cs)
    } catch (error) {
        alert("Selecione um curso")
    }
})

btnRemoverCurso.addEventListener('click', (evt)=>{
    const radioSelecionado = cursoSelecionado()
    if(radioSelecionado!=undefined){
        const cs=radioSelecionado.parentNode.parentNode
        cs.remove()
    } else {
        alert("Selecione um curso")
    }
})

btnAdicionarAntes.addEventListener('click', (evt)=>{
    const radioSelecionado = cursoSelecionado()
    try {
        if(cursoDigitado.value != ""){

            const cs=radioSelecionado.parentNode.parentNode
            const curso = criarCursos(cursoDigitado.value)
            caixaCursos.insertBefore(curso,cs)
        } else {
            alert("Digite um curso")
        }
    } catch (error) {
        alert("Selecione um curso")
    }
})

btnAdicionarDepois.addEventListener('click', (evt)=>{
    const radioSelecionado = cursoSelecionado()
    try {
        if(cursoDigitado.value != ""){
            const cs=radioSelecionado.parentNode.parentNode
            const curso = criarCursos(cursoDigitado.value)
            caixaCursos.insertBefore(curso,cs.nextSibling)
        } else {
            alert("Digite um curso")
        }
    } catch (error) {
        alert("Selecione um curso")
    }
})
