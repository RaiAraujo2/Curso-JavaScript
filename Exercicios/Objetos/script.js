const f_nome = document.querySelector('#f_nome');
const f_portas = document.querySelector('#f_portas');
const f_tipoMilitar = document.querySelector('#f_tipoMilitar');
const f_tipoNormal = document.querySelector('#f_tipoNormal');
const f_blindagem = document.querySelector('#f_blindagem');
const f_municao = document.querySelector('#f_municao');
const carros = document.querySelector('#carros');
const btn_addCarro = document.querySelector('#btn_addCarro');

let a_carros = []

f_tipoMilitar.addEventListener('click', () => {
    f_blindagem.value= 0;
    f_municao.value= 0;
    f_nome.value = "";
    f_portas.value = 0;
    f_blindagem.removeAttribute('disabled');
    f_municao.removeAttribute('disabled');
});

f_tipoNormal.addEventListener('click', () => { 
    f_blindagem.value= "0";
    f_municao.value= "0";
    
    f_blindagem.setAttribute('disabled', 'disabled');
    f_municao.setAttribute('disabled', 'disabled');
});

const gerenciarExibicaoCarros=()=>{
    carros.innerHTML = ""
    a_carros.forEach((c)=>{
        const div = document.createElement('div');
        const btn = document.createElement("button");
        btn.innerHTML = "Remover"
        btn.setAttribute("class", "remover")
        btn.addEventListener("click", (evt)=>{
            const quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibicaoCarros()
        })
        div.setAttribute('class', 'carro');
        div.setAttribute("data-nome", c.nome)
        div.innerHTML= `Nome: ${c.nome} <br> Portas: ${c.portas} <br> `
        if(f_tipoMilitar.checked){
            div.innerHTML += `Blindagem: ${c.blindagem} <br> Municao: ${c.municao} <br>`
        }
        div.appendChild(btn)
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener('click', () => {
    if(f_tipoNormal.checked){
        const c  = new Carro(f_nome.value, f_portas.value)  
        a_carros.push(c)
    } else{
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()
});

const removerCarro=(carro)=>{
    a_carros = a_carros.filter((el)=>{
        return el.nome!=carro
    })
}

class Carro{
    constructor(nome, portas){
        this.nome = nome;
        this.portas = portas;
        this.ligado = false
        this.velocidade = 0;
        this.cor = undefined
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
    setCor(cor){
        this.cor = cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar(){
        if(this.municao > 0){
            this.municao--
            console.log("Atirando...")
        }
    }
}