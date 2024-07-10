const num_objetos =document.getElementById("num_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")
const palco = document.getElementById("palco")

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = 0

class Bola{
    constructor(arrayBolas, palco){
        this.tam = Math.floor(Math.random() * 15)+10
        this.r = Math.floor(Math.random() * 255)
        this.g = Math.floor(Math.random() * 255)
        this.b = Math.floor(Math.random() * 255)
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam))
        this.py = Math.floor(Math.random() * (alturaPalco - this.tam))
        this.velx = Math.floor(Math.random() * 2) + 0.5
        this.vely = Math.floor(Math.random() * 2) + 0.5
        this.dirx = (Math.random()*10)>5 ? 1 : -1
        this.diry = (Math.random()*10)>5 ? 1 : -1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now()+"_"+Math.floor(Math.random()*100000000)
        this.desenhar()
        this.controle = setInterval(this.controlar, 10) // 10 milisegundos
        this.eu = document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML = numBola

    }
    //Achar a posição da bola no array bolas[], remover um bola espicífica
    minhaPos=()=>{
        return this.arrayBolas.indexOf(this.eu) //talvez retirar esse "eu"
    }

    remover=()=>{
        bolas = bolas.filter((b)=> {
                if(b.id!=this.id){
                    return b
                }
            })
        clearInterval(this.controle)
        this.eu.remove()
        numBola--
        num_objetos.innerHTML = numBola
    }

    //Desenhar a bola no palco
    desenhar=()=>{
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bola")
        div.setAttribute("style", 
            `width:${this.tam}px;
            height:${this.tam}px;
            background-color:rgb(${this.r},${this.g},${this.b});
            position:absolute;
            left:${this.px}px;
            top:${this.py}px;
            border-radius:50%`)
        this.palco.appendChild(div)
    }
    
    colisao_bordas=()=>{
        if(this.px + this.tam >= larguraPalco){
            this.dirx = -1
        } else if(this.px <= 0){
            this.dirx = 1
        }
        if(this.py + this.tam >= alturaPalco){
            this.diry = -1
        } else if(this.py <= 0){
            this.diry = 1
        }
    }

    controlar=()=>{
        this.colisao_bordas()
        this.px += this.velx * this.dirx
        this.py += this.vely * this.diry
        this.eu.setAttribute("style", 
            `width:${this.tam}px;
            height:${this.tam}px;
            background-color:rgb(${this.r},${this.g},${this.b});
            position:absolute;
            left:${this.px}px;
            top:${this.py}px;
            border-radius:50%`)
        if(this.px > larguraPalco || this.py > alturaPalco){
           this.remover()
        }
    }

}

window.addEventListener("resize", (evt)=>{
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})

btn_add.addEventListener("click", (evt)=>{
    const qtde = txt_qtde.value
    for (let i = 0; i < qtde; i++){
        bolas.push(new Bola(bolas, palco))
    }
})

btn_remover.addEventListener("click", (evt)=>{
    bolas.map((b)=>{
        b.remover()
    })
})

