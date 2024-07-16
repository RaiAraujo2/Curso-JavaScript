
class Jogador{
    constructor(nome){
        this.nome = nome;
        this.id = Symbol(); // Symbol é um tipo de dado primitivo que é único
    }
}



let jogadores = [new Jogador("jogador1"), new Jogador("jogador2"), new Jogador("jogador3")];

let s = []

let s_jogadores = jogadores.filter((j)=>{
    return j.nome === "jogador1";
})

s = s_jogadores.map((j)=>{
    return j.id;
})

console.log(s);
console.log(s_jogadores)
console.log(jogadores)