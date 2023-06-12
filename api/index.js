// const path = require('path');
const express = require('express');
const router = require('./lib/router');

const { PORT = 4000 } = process.env;

const server = express();


server.use(express.json());

// Serve API requests from the router
server.use('/api', router);

// Serve app production bundle
server.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, 'app/index.html'));
// });

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});