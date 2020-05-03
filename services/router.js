const QuestionController = require('../controllers/question_controller');
const ResponseController = require('../controllers/response_controller');

var router = require('express').Router();

router.route('/api/question').post(QuestionController.addQuestion);
router.route('/api/questions').get(QuestionController.getAllQuestions);
router.route('/api/question/:id').get(QuestionController.getQuestion);

router.route('/api/response').post(ResponseController.addResponse);
router.route('/api/responses/:id').get(ResponseController.getResponsesForQuestion);

module.exports = router;
