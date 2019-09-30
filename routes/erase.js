var express = require('express');
var router = express.Router();
var trades = require('../controllers/trades');

// Route to delete all trades
router.delete('/',  async (req, res, next) => {

    console.log('executing DELETE /erase');

    // erase    
    let data = await trades.erase();
    res.status(200);
    res.send();
  
});


module.exports = router;