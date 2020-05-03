var axios = require('axios');
var dbClient = require('../db/dbConnection.js').getConnection()
dbClient.connect();

exports.addResponse = function(req, res, next){
  var query = "INSERT INTO responses (response, question_id, respondername) VALUES ($1, $2, $3)";
  var responderName = req.body.responderName == '' || !req.body.responderName ? "Anonymous User" : req.body.responderName;
	dbClient.query(query, [req.body.response, req.body.question_id, responderName], (error,queryRes) => {
    if(error){
			res.json({statusCode: 422, error: error})
		} else {
      res.json({statusCode: 200, message: "successfully added response", body: {response: req.body.response, respondername: responderName}})
    }
	});
}

exports.getResponsesForQuestion = function(req, res, next){
  var query = "SELECT * FROM responses where question_id=" + req.params.id;
  dbClient.query(query, (error,queryRes) => {
    if(error){
			res.json({statusCode: 422, error: error})
		} else {
      res.json({
        statusCode: 200,
        message: "successfully retrieved questions",
        responses: queryRes.rows
      })
    }
	});
}
