const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

// override listen mothor
server.listen = server.listen.bind(server, PORT, () => console.log(`Listen on port ${PORT}`) );

module.exports = server;
