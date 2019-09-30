var express = require('express');
var router = express.Router();
var trades = require('../controllers/trades');

// Route to delete all trades
router.delete('/erase',  async (req, res, next) => {

    // erase    
    let data = await trades.erase();
    res.status(200);
    res.send(true);
  
});

module.exports = router;