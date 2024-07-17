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

console.log(nome.search("Dias"))

let sobrenome = nome.slice(6, 10)
console.log(nome.slice(0, 5))
console.log(sobrenome)

let arr_nome = nome.split(" ")
console.log(arr_nome)