/* importando o mongoDB */
var mongo = require('mongodb');

var connMongoDB = function(){

	var db = new mongo.Db(
		'got',
		new mongo.Server(
			'localhost', //servidor
			27017, // porta
			{} //configurações do db
		),
		{} //outras configurações do db
	);

	return db;
}

module.exports = function(){
	return connMongoDB;	
}