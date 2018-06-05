const net = require('net');

const server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // haddle errors here
  throw err;
});

// grab an arbitrary unused port.
server.listen({
  host: 'localhost',
  port: 8080,
  exclusive: true
}, () => {
  console.log('opened server on', server.address());
});