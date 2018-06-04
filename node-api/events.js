const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred');
// });
// myEmitter.emit('event');

// myEmitter.on('event', function (a, b) {
//   console.log(a, b, this);
// });
// myEmitter.on('event', (a, b) => {
//   console.log(a, b, this);
// });
// myEmitter.emit('event', 'a', 'b');

// myEmitter.on('event', function (a, b) {
//   setImmediate(() => {
//     console.log('this happens asynchronously');
//   });
// });
// console.log('1')
// myEmitter.emit('event', 'a', 'b');
// console.log('2')

// let m = 0;
// myEmitter.once('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// myEmitter.emit('event');