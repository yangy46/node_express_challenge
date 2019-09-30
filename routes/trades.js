var express = require('express');
var router = express.Router();
var trades = require('../controllers/trades');

// Routes related to trades
router.post('/', async (req, res, next) => {
        
    try {
        // check exists
        let trade = req.body,
        exists = await trades.exists(trade.id);
    
        // if exists
        if (exists) {
            res.status(400);
            res.send(false);
        } else {
            // insert new 
            let data = await trades.add(trade);        
            res.status(201);
            res.json(data);
         }// if-else
    } catch (e){
    
        res.status(500);
        res.send();

    }// try-catch   
    
});

router.get('/', async (req, res, next) => {
    
    try {
        let data = await trades.getAll();
    
        res.status(200);
        res.json(data);
    } catch (e) {
        console.log('GET /trades error', e);
        res.status(500);
        res.send();
    }// try-cath
    
});

module.exports = router;