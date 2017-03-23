module.exports.iniciar = function(application, req, res){
	res.render('cadastro', {validacao : {} , dadosForm : {}});
}

module.exports.cadastrar = function(application, req, res){
	
	var dadosForm = req.body;

	req.assert('nome', 'Nome é obriatório').notEmpty();
	req.assert('usuario', 'Usuário é obriatório').notEmpty();
	req.assert('senha', 'Senha é obriatório').notEmpty();
	req.assert('casa', 'Casa é obriatório').notEmpty();

	var errors = req.validationErrors();
	if(errors){
		res.render('cadastro', {validacao : errors, dadosForm : dadosForm});
		return;
	}

	var connection = application.config.dbConnection;
	var UsuarioDAO = new application.app.models.UsuarioDAO(connection);
	var JogoDAO = new application.app.models.JogoDAO(connection);

	UsuarioDAO.insert(dadosForm);
	JogoDAO.gerarParametros(dadosForm.usuario);

	res.render('index', {validacao : {}});
}