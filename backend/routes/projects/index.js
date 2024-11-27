var express = require('express');
var router = express.Router();

// ========================================
// routers
const singleProject = require('./singleProject');

// use routers
router.use('/project', singleProject);

// ========================================

/* default router */
router.get('/', function(req, res, next) {
  res.send('project routers');
});

module.exports = router;
