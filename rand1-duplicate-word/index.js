// Find Duplicate Words - https://algodaily.com/challenge_slides/find-duplicate-words
var assert = require('assert');

// Function to be filled in
function findDuplicates(str) {
  const dupes = [];
  // fill in
  const currentString = str.split(' ')

  // create a Set to keep track of which words have been seen
  const seen = new Set();

//   currentString.map( (word) => (word.filter( word => word == word )) )
//   console.log(currentString)

for ( let a of currentString ) {
    // if the word is already in the set, it is a duplicate
    // so add it to the array of duplicates
    let currentWord = a.toLowerCase()
    if ( seen.has(currentWord) ) {
        dupes.push(currentWord)
    } else {
        // Otherwise add it on the set
        seen.add(currentWord)
    }
}
// console.log({dupes, seen})
//   for( let a = 0; a < currentString.length; a++ ) {
//       let currentWord = (currentString[a]) ? currentString[a] : ''
//       let secondWord = (currentString[a + 1]) ? currentString[a + 1] : ''
//     //   console.log(currentWord.toLowerCase())
//       if ( currentWord = secondWord ) {
//         // dupes.push( currentWord )
//         // console.log('in')
//       }
//       console.log(dupes)
//   }

  return dupes;
}

try {
  assert.deepEqual(findDuplicates('The dog is the best'), ['the']);

  console.log(
    'PASSED: ' + "`findDuplicates('The dog is the best')` returns `['the']`"
  );
} catch (err) {
//   console.log(err);
}

try {
  assert.deepEqual(findDuplicates('Happy thanksgiving, I am so full'), []);

  console.log(
    'PASSED: ' +
      "`findDuplicates('Happy thanksgiving, I am so full’)` returns `[]`"
  );
} catch (err) {
//   console.log(err);
}
