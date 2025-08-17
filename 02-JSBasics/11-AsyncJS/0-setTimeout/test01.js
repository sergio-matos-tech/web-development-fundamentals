
// This is synchronous code. It runs one line at a time, in order.
console.log("1. Starting the script.");

/**
 * setTimeout is an asynchronous function.
 * It's handed off to a Web API (in the browser) or C++ API (in Node.js).
 * The JavaScript engine's main thread doesn't wait for it to finish.
 * It continues to the next line of code immediately.
 */

setTimeout(() => {
  console.log("3. Inside the setTimeout callback. (This will run last)");
}, 2000); // The 2000ms (2 seconds) is the minimum time before the callback is added to the queue.

console.log("2. Finishing the script.");
