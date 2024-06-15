const caixaCursos = document.querySelector('#caixaCursos');
const btn_c=[...document.querySelectorAll('.curso')];
const c1_2=document.querySelector('#c1_2')
const cursos=["HTML","CSS","REACT","PHP","JAVASCRIPT","MYSQL"]
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado');

cursos.map((elemento,chave,array)=>{
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=elemento

    const comandos = document.createElement('div');
    comandos.setAttribute("class","comandos")

    const rb = document.createElement('input');
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixaCursos.appendChild(novoElemento)
})


btnCursoSelecionado.addEventListener('click',(evt)=>{
    const todosRadios = [...document.querySelectorAll('input[type="radio"]')];
    const radioSelecionado = todosRadios.filter((elemento,indice,array)=>{
        return elemento.checked
    })
    console.log(radioSelecionado[0].parentNode.parentNode.firstChild.textContent)
})