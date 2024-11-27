var express = require('express');
var router = express.Router();

// ========================================
// routers
const loginRouter = require('./login');

// use routers
router.use('/login', loginRouter);

// ========================================

/* default router */
router.get('/', function(req, res, next) {
  res.send('auth routers');
});

module.exports = router;
