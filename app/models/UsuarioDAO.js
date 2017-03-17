function UsuarioDAO(connection){
	this._connection = connection();
}

UsuarioDAO.prototype.insert = function(usuario){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("usuario", function(err, collection){
			collection.insert(usuario);
		});
		mongoclient.close();
	});
}

module.exports = function(){
	return UsuarioDAO;
}