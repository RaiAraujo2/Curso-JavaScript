const numero = document.getElementById('numero')
const btn_promise = document.getElementById('btn_promise')

btn_promise.addEventListener('click', (evt)=>{
    numero.innerHTML = 'Carregando...'
    promise()
        .then((res)=>{
            numero.innerHTML = res
            numero.classList.remove('error')
            numero.classList.add('ok')
        })
        .catch((err)=>{
            numero.innerHTML = err
            numero.classList.add('error')
            numero.classList.remove('ok')
        })  
})

const promise=()=>{
    let promise = new Promise((resolve, reject)=>{
        let resultado = true
        let tempo = 3000
    
        setTimeout(()=>{
            if(resultado){
                resolve('Sucesso')
            } else{
                reject('Erro')
            }
        }, tempo)
    })
    return promise
}



numero.innerHTML = 'Esperando'