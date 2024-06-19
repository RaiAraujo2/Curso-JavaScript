const caixa = document.getElementById("caixa")


let cursos = new Map()

cursos.add("JavaScript")
cursos.add("JavaScript")
cursos.add("Java")
cursos.add("Python")

cursos.delete("Java")
cursos.forEach((el)=>{
    caixa.innerHTML+=el + "<br/>"
})