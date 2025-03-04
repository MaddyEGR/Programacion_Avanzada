var express = require('express');
var router = express.Router();
const Habit = require ('../modelo/Habit');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Hola', function(req, res, next) {
  res.json({"mensaje":"Hola Mundo"})
});

router.post('/habits', async function(req, res, next) {
  const {title, description} = req.body;
  const habit = new Habit({title, description});
  await habit.save();
});
module.exports = router;
