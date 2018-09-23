module.exports = function (app) {
    var valida = require('./../middlewares/valida');
    var cursos = app.controllers.cursos;

    app.get('/menu', valida, cursos.menu);
    app.post('/cadCursos', valida, cursos.cadCursos);
    app.get('/listaCursos', valida, cursos.listaCursos);

    app.get('/cadastro', valida, cursos.cadastro);

}