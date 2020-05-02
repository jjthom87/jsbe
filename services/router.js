const QuestionController = require('../controllers/question_controller');

var router = require('express').Router();

router.route('/api/question').post(QuestionController.addQuestion);
router.route('/api/questions').get(QuestionController.getAllQuestions);

module.exports = router;
