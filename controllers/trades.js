const db = require('sqlite3');

module.exports = {
    
    erase: async () => {
        
        return new Promise((resolve, reject) => {
            
            resolve(true);
        });
    },
    
    exists: (id) => {
        
        return new Promise((resolve, reject) => {
            
            resolve(false);
        });

    },
    
    add: (trade) => {
        
        return new Promise((resolve, reject) => {
            
            resolve(true);
        });
        
        
    },
    
    getAll: () => {
        
        return new Promise((resolve, reject) => {
            
            resolve([]);
        });
        
    }
    
}