const http = require('http');

// http.get(options, (res) => {
//   // Do stuff
// }).on('socket', (socket) => {
//   socket.emit('agentRemove');
// });

// http.get({
//   hostname: 'localhost',
//   port: 80,
//   path: '/',
//   agent: false // create a new agent just for this one request
// }, (res) => {
//   // Do stuff with reponse
// });

// const keepAliveAgent = new http.Agent({ keepAlive: true });
// const options = {};
// options.agent = keepAliveAgent;
// http.request(options, onResponseCallback);