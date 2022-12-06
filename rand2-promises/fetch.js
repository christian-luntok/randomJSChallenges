// Fetching with Promises

const fs = require('fs') 

// Call fetch
// Handle the success case with then - we get the response which is raw response then we need to convert that repsonse to Json
// We can then chain on a promise .then to handle that promise then we get the actual data
// If bad will trigger catch
fetch('https://pokeapi.co/api/v2/pokemon/undefined')
    .then((res) => res.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err))