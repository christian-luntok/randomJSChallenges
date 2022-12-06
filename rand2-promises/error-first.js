// Error First Callback

// const fetch = require('node-fetch')
const fs = require('fs')

fs.readFile('test.txt', 'utf-8', (err, data ) => {
    if ( err  ) {
        console.log('ERROR')
        console.log(err)
    } else {
        console.log('Got data')
        console.log(data)
    }
})