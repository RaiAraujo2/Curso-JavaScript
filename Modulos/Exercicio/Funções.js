import { contatos } from "./contatos.js";

let contato = {
    getTodosContatos: function(){
        return contatos;
    },
    getContato: function(id){
        return contatos[id];
    },
    addContato: function(contato, destinoDom){
        const div = document.createElement('div');
        div.setAttribute("class", "contato");
        const p_nome = document.createElement('p');
        p_nome.innerHTML = `Nome: ${contato.nome}`;
        const p_telefone = document.createElement('p');
        p_telefone.innerHTML = `Telefone: ${contato.telefone}`;
        const p_email = document.createElement('p');
        p_email.innerHTML = `Email: ${contato.email}`;
        div.appendChild(p_nome);
        div.appendChild(p_telefone);
        div.appendChild(p_email);
        destinoDom.appendChild(div);
        contatos.push(contato);
    },
}

export default contato;