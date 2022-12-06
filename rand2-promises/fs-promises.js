// Promises

// FS function modules for promises

const fs = require('fs') 

fs.promises.readFile('test.txt', 'utf-8')
    .then( data => console.log( data ))
    .catch( err => console.log( err ))