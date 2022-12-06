// Load file with async/await
// const fetch = require('node-fetch');

const fs = require('fs') 

const loadFile = async () => {
    try {
        const data = await fs.promises.readFile('test.txt','utf-8')
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

loadFile()

// Fetch pokemon with async/await without error handling
const fetchPokemon = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    console.log(data)
} 
// fetchPokemon()


// Fetch pokemon with async/await with error handling
const fetchPokemon2 = async (id) => {
    try {    
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
} 


fetchPokemon2()