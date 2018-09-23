module.exports = function(app) {
  var Cursos = app.models.curso;

  var CursoController = {
    menu: function(request, response) {
      var usuario = request.session.usuario,
        params = { usuario: usuario };
      response.render("cursos/menu", params);
    },

    listaCursos: function(request, response) {
      Cursos.find(function(erro, cursos) {
        if (erro) {
          response.redirect("/menu");
        } else {
          var usuario = request.session.usuario,
            params = { usuario: usuario, cursos: cursos };
          response.render("cursos/listaCursos", params);
        }
      });
    },

    cadastro: function(request, response) {
      var usuario = request.session.usuario,
        params = { usuario: usuario };
      response.render("cursos/cadCursos", params);
    },

    cadCursos: function(request, response) {
      var codigo = request.body.curso.codigo;
      var descricao = request.body.curso.descricao;
      var ch = request.body.curso.ch;
      var categoria = request.body.curso.categoria;

      var cursos = {
        codigo: codigo,
        descricao: descricao,
        ch: ch,
        categoria: categoria
      };

      Cursos.create(cursos, function(erro, cursos) {
        if (erro) {
          response.render("cursos/cadCursos", params);
        } else {
          response.redirect("/menu");
        }
      });
    }
  };
  return CursoController;
};
