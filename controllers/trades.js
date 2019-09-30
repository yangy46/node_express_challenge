//const db = require('sqlite3');

class Trade {
    constructor({ type = '', user, symbol = '', shares = 0, price = 0 }) {
    
        this.id = undefined;
        this.type = type;
        this.user = user || undefined;
        this.symbol = symbol;
        this.shares = shares;
        this.price = price;
        this.timestamp = new Date();

    }
}

module.exports = {
    
    erase: async () => {
        
        return new Promise((resolve, reject) => {

            // erase all trades
            
            resolve(true);
        });
    },
    
    exists: (id) => {
        
        return new Promise((resolve, reject) => {

            // check if trade id exists
            
            resolve(false);
        });

    },
    
    add: (trade) => {
        
        console.log('Trades controller - add()', trade);

        return new Promise((resolve, reject) => {

            // parse trade
            let rec = new Trade(trade);

            // insert
            
            resolve(true);
        });
        
        
    },
    
    getTrades: (userId, symbol) => {
        
        return new Promise((resolve, reject) => {

            // get trades based on parameters - sort by trade id
            
            resolve([]);
        });
        
    }
    
}