const express = require('express'),
  app = express(),
  cors = require('cors'),
  port = process.env.PORT || 3000,
  routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

app.use(express.json());

const domainUrls = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (domainUrls.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}


app.use(cors(options));

app.get('/', (req, res) => {
  res.send('API de Caballeros del Zodiaco');
});



routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Port on use' + port);
});
