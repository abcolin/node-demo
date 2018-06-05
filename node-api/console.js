// Example using the global console:
// console.log('hello world');
// console.log('hello %s', 'world');
// console.log(new Error('Whoops, something bad happen'));

// const name = 'Will Robinson';
// console.warn(`Danger ${name}! Danger!`);

// const fs = require('fs');

// const output = fs.createWriteStream('./stdout.log');
// const errorOutput = fs.createWriteStream('./stderr.log');
// custom simple logger
// const logger = new console.Console(process.stdout, process.stderr);
// logger.log('hello world');
// const count = 5;
// logger.log('count: %d', count);

// console.assert(true, 'does nothing');
// console.assert(false, 'Whoops %s', 'didn\'t work');

// 'use strict';

// Creates a simple extension of console with a
// new impl for assert without monkey-patching.
// const myConsole = Object.create(console, {
//   assert: {
//     value: function assert(assertion, message, ...args) {
//       try {
//         console.assert(assertion, message, ...args);
//       } catch (err) {
//         console.error(err.stack);
//       }
//     },
//     configurable: true,
//     enumerable: true,
//     writable: true,
//   },
// });

// myConsole.assert(false, 'this message will print, but no error thrown');
// myConsole.log('this will also print');