var express = require('express');
var router = express.Router();
var trades = require('../controllers/trades');

// Routes related to trades
router.post('/', async (req, res, next) => {
    
    console.log('executing POST /trades');

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
            res.json(trade);
         }// if-else
    } catch (e){
    
        res.status(500);
        res.send();

    }// try-catch   
    
});

router.get('/', async (req, res, next) => {
    
    console.log('executing GET /trades');
    
    try {
        let data = await trades.getTrades();
    
        res.status(200);
        res.json(data);
    } catch (e) {
        console.log('GET /trades error', e);
        res.status(500);
        res.send();
    }// try-cath
    
});

router.get('/users/:userID', async (req, res, next) => {

    console.log('executing GET /trades/users/:userID');

    try {
        let data = await trades.getTrades(req.params.userID);
    
        if (data && data.length > 0) {
            res.status(200);
            res.json(data);
        } else {
            res.status(404);
            res.send();
        }// if-else
    } catch (e) {
        console.log('GET /users/id error', e);
        res.status(500);
        res.send();
    }// try-cath
    

});

router.get('/stocks/:stockSymbol', async (req, res, next) => {
    
    console.log('executing GET /trades/stocks/:stockSymbol');

    try {
        let data = await trades.getTades(null, req.params.stockSymbol);
    
        if (data && data.length > 0) {
            res.status(200);
            res.json(data);
        } else {
            res.status(404);
            res.send();
        }// if-else
    } catch (e) {
        console.log('GET /stocks/sym error', e);
        res.status(500);
        res.send();
    }// try-cath
});

router.get('/trades/users/:userID/stocks/:stockSymbol', async (req, res, next) => {
    
    console.log('executing GET /trades/users/:userID/stocks/:stockSymbol');
    
    try {
        let data = await trades.getTrades(req.params.userID, req.params.stockSymbol);
    
        if (data && data.length > 0) {
            res.status(200);
            res.json(data);
        } else {
            res.status(404);
            res.send();
        }// if-else
    } catch (e) {
        console.log('GET /stocks/sym error', e);
        res.status(500);
        res.send();
    }// try-cath
});



module.exports = router;