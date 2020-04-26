const ArticleController = require('../controllers/article_controller');

var router = require('express').Router();

router.route('/api/article').post(ArticleController.addArticle);

module.exports = router;
