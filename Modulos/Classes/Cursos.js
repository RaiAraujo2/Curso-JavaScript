class Cursos {
    static cursos = ["Javascript", "Python", "Java", "C#"];

    static getTodosCursos() {
        return this.cursos;
    }

    static getCurso(i) {
        return this.cursos[i];
    }

    static addCurso(curso) {
        this.cursos.push(curso);
    }

    static deleteCurso(i) {
        this.cursos.splice(i, 1);
    }
}

export default Cursos;
