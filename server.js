const express = require('express');
const path = require('path');
const debug = require('debug')('app');

const app = express();
const port = 9999;

// Enable debugging output
debug('Debugging enabled');

// Log the directory path
debug('Directory path:', __dirname);

// Serve static content from the 'public' directory under the '/game' route
app.use('/game', express.static(path.join(__dirname, 'public'), {
  redirect: false
}));

// Log the static file serving configuration
debug('Serving static files from:', path.join(__dirname, 'public'));
debug('Mounted on route:', '/game');

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  debug(`Server is running on port ${port}`);
});
