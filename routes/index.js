var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',prueba:'Prueba'});
});

router.get('/greetin',function(req, res, next) {
  res.status(200).json({message: 'Prueba'})
})
module.exports = router;
