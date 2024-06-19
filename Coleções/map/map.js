const caixa = document.getElementById("caixa")


let cursos = new Map()



cursos.set("curso", "JavaScript")
cursos.set("10", "CFB Cursos")
cursos.set(1, "JavaScript")
cursos.set("curso", 100)
cursos.set(2, 120)



cursos.forEach((el)=>{
    caixa.innerHTML+=el + "<br/>"
})

console.log(typeof(cursos))