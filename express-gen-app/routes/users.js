var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const userList = [
    {name: 'Pierre', project: 'API Management', position: 'Intern'},
    {name: 'Mourad', project: 'API Management', position: 'Data Engineer'},
    {name: 'Emmanuel', project: 'NA', position: 'Manager'},
  ];
  res.render('users', { title: 'Users', userList: userList });
});

module.exports = router;
