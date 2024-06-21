class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome = nome
    }
    setIdade(idade){
        this.idade = idade
    }

    info(){
        console.log(
        "Nome: " + this.getNome()
        +"\nidade: " + this.getIdade())
    }
}

let pessoas = []


const btn = document.getElementById("btn_add") 
const res = document.querySelector(".res")

const addPessoa=()=>{
    res.innerHTML = ""
    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${p.getNome()} <br> Idade: ${p.getIdade()} <br>`
        res.appendChild(div)
    })
    
}

btn.addEventListener("click", ()=>{
    const nome = document.getElementById("f_nome")
    const idade = document.getElementById("f_idade")  
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoa()
})