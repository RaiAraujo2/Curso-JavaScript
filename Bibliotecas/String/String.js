let nome = new String("Bruno")
let canal = new String("Bruno")

console.log(nome.charAt(0))
console.log(canal.charCodeAt(3))
console.log(nome.concat(" Dias"))
console.log(nome)
nome = nome.concat(" Dias")
console.log(nome.indexOf("o"))

// retorno = 0: iguais
// retorno = 1: diferente
// retorno = -1: diferente
console.log(nome.localeCompare(canal))

console.log(nome.replace("Dias", "Pinheiro"))

// search - retorna a posição da string
console.log(nome.search("Dias"))

// slice(inicio, fim) - retorna uma parte da string
let sobrenome = nome.slice(6, 10)
console.log(nome.slice(0, 5))
console.log(sobrenome)

// split - divide a string em um array
let arr_nome = nome.split(" ")
console.log(arr_nome)

// substr - retorna uma parte da string
console.log(nome.substr(0, 5))

// Transforma para maiusculo e minusculo
console.log(nome.toLowerCase())
console.log(nome.toUpperCase())

// Retorna o valor primitivo do objeto, 
console.log(nome.valueOf())

num = 10
console.log(typeof(num.toString()))
