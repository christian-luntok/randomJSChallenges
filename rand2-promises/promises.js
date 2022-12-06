// PROMISES


// Promises always have a success path and a reject path in the form of resolve and reject

const myPromise = new Promise((resolve,reject) => {
    const rand = Math.floor(Math.random() * 2)
    if ( rand === 0 ) {
        resolve()
    } else {
        reject()
    }
})

// .then will handle a callback function when you can log success
// .catch will hanlde a callback function when not success

myPromise.then(() => console.log('success')).catch(() => console.error('something went wrong'))