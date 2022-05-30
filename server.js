const express = require('express');
const PORT  = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('../../routes/apiRoutes');
const htmlRoutes = require('../../routes/htmlRoutes');

// parse(analyze) incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse(analyze) incoming JSON data
app.use(express.json());

// tell the server that any time a client navigates to <ourhost>/api, the app will use the router we set up in apiRoutes.
//  If / is the endpoint, then it will server back our HTML routes.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

const { animals } = require('./data/animals.json');

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });