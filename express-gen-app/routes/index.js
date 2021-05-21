var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

//router.use demo
// Will be executed everytime
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('Hello World!');
  res.render('index', { title: 'Express' });
});

//Event Emitter demo
// Executed only once
// eventEmitter.on('hello', () => {
//   console.log('Hello Event called!')
// })
// eventEmitter.emit('hello');

module.exports = router;
