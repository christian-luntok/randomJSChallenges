// Promises - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

// .json() is also asynchronous

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});
