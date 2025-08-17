
setTimeout(() => {
  console.log('This is a callback function executed after 1 second');

  setTimeout(() => {
    console.log('This is a nested callback function executed after another 1 second');
    
    setTimeout(() => {
    console.log('This is another callback function executed after 1 second');
    }, 1000);
  }, 1000);
}, 1000);

console.log('This is the main thread execution');
