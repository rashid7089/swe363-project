var express = require('express');
var router = express.Router();

// ========================================
// routers
const singleProject = require('./singleProject');
const addProject = require('./addProject');
const allProjects = require('./allProjects');

// use routers
router.use('/all', allProjects);
router.use('/addProject', addProject);
router.use('/', singleProject);

// ========================================

/* default router */
router.get('/', function(req, res, next) {
  res.send('project routers');
});

module.exports = router;
