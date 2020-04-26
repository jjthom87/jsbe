var axios = require('axios');
var dbClient = require('../db/dbConnection.js').getConnection()
dbClient.connect();

exports.addArticle = function(req, res, next){
  var query = "INSERT INTO articles (title, article) VALUES ($1, $2)";
	dbClient.query(query, [req.body.articleTitle, req.body.articleBody], (error,queryRes) => {
    if(error){
			res.json({error: error})
		} else {
      res.json({message: "successfully added article"})
    }
	});
}
