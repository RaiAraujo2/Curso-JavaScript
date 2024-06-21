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

const c1 = new Carro("Normal", 4)
console.log(c1.ligado)

const c2 = new Militar("Tanque", 2, 10, 100)
c2.atirar()
console.log(c2.municao)
