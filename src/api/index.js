'use strict';

var express = require('express');
var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function(req, res) {
  res.json({todos: todos});
});

// TODO: Add a post route to create new entries
//TODO: add put route to update existing entries
//TODO: add del route to delete entries

module.exports = router;
