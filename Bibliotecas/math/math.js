const mat= document.getElementById('mat');

//Não precisa instaciar o objeto new math() pois a função é estática

mat.innerText =Math.floor( Math.random()*100) //gera um número inteiro aleatório entre 0 e 100