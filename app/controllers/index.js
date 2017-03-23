module.exports.iniciar = function(application, req, res){
	res.render('index', {validacao : {}});
}

module.exports.autenticar = function(application, req, res){
	var dadosForm = req.body;

	req.assert('usuario', 'Usuário é obrigatório').notEmpty();
	req.assert('senha', 'Senha é obrigatório').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("index", {validacao : erros});
		return;
	}

	var connection = application.config.dbConnection;
	var UsuarioDAO = new application.app.models.UsuarioDAO(connection);

	UsuarioDAO.autenticar(dadosForm, req, res);

}