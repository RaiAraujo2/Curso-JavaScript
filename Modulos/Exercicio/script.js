import funcoes from './Funções.js';

const listaContatos= document.getElementById('listaContatos');
const btn_gravar = document.getElementById('btn_gravar');

btn_gravar.addEventListener('click', function(evt){
    const cont={
        nome: document.getElementById('f_nome').value,
        telefone: document.getElementById('f_telefone').value,
        email: document.getElementById('f_email').value
    }
    funcoes.addContato(cont, listaContatos);
    funcoes.getTodosContatos().forEach((contato, index) => {
        console.log(`Contato ${index}: ${contato.nome}`);
    });
})
