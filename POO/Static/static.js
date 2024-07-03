class Npc{
    static alerta = false

    constructor(energia){
        this.energia = energia
    }

    info = function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta?"Sim":"Não"}`)
        console.log("-----------------------------------")
    }

    static alertar = function(){
        Npc.alerta = true
    }

    
}
const npc1 = new Npc(100)
const npc2 = new Npc(50)
const npc3 = new Npc(20)

npc1.info()

Npc.alertar()

npc1.info()


