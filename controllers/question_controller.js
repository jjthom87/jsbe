var axios = require('axios');
var dbClient = require('../db/dbConnection.js').getConnection()
dbClient.connect();

exports.addQuestion = function(req, res, next){
  var query = "INSERT INTO questions (question) VALUES ($1)";
	dbClient.query(query, [req.body.question], (error,queryRes) => {
    if(error){
			res.json({statusCode: 422, error: error})
		} else {
      res.json({statusCode: 200, message: "successfully added question"})
    }
	});
}

exports.getAllQuestions = function(req, res, next){
  var query = "SELECT * FROM questions";
  dbClient.query(query, (error,queryRes) => {
    if(error){
			res.json({statusCode: 422, error: error})
		} else {
      res.json({
        statusCode: 200,
        message: "successfully retrieved questions",
        questions: queryRes.rows
      })
    }
	});
}

exports.getQuestion = function(req, res, next){
  var query = "SELECT * FROM questions where id=" + req.params.id;
  dbClient.query(query, (error,queryRes) => {
    if(error){
      res.json({statusCode: 422, error: error})
    } else {
      res.json({
        statusCode: 200,
        message: "successfully retrieved question",
        question: queryRes.rows[0]
      })
    }
  });
}
