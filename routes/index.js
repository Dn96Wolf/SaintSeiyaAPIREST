const express = require('express');
const caballerosRouter = require('./saint.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/caballeros', caballerosRouter);
}


module.exports = routerApi;
