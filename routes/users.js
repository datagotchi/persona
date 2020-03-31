var express = require('express');
var router = express.Router();

// DEBUG put in a database
const users = [
  {
    id: 1,
    email: 'bobness@gmail.com',
    skills: []
  }
];

router.get('/', (req, res, next)  => {
  res.json(users);
});

router.param('id', (req, res, next, id) => {
  req.id = id;
});

router.get('/:id', (req, res, next)  => {
  const user = users.find((user) => user.id === req.id);
  req.user = user;
  res.json(req.user);
});

router.get('/:id/skills', (req, res, next) => {
  res.json(req.user.skills);
});

router.post('/:id/skills', (req, res, next) => {
  const skill = req.body;
  req.user.skills.push(skill);
  res.status(200);
});

module.exports = router;
