function callExecute() {
    setTimeout(() => console.log("i will execute third"), 0);
    for ( let a = 0; a < 10; a++ ) {
      console.log(`i will execute ${a}`)
    }
  }
setTimeout(() => console.log("i will execute first before function"), 0);
callExecute();

setTimeout(() => console.log("i will execute third"), 0);

for ( let a = 0; a < 10; a++ ) {
  console.log(`i will execute ${a}`)
}

for ( let a = 11; a < 20; a++ ) {
  console.log(`i will execute ${a}`)
}

setTimeout(() => console.log("i will execute third"), 0);
console.log("I will execute first");
console.log("I will execute second");

setTimeout(() => console.log("i will execute third"), 0);