import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import morgan from 'morgan';
import stripePackage from 'stripe';

import Database from './src/persistence/db';
import api from './src//routes/api';
import config from './src/constants/config';

const stripe = stripePackage('sk_test_z9Ed5biPdzoGepaT5WBeAcFp');

const app = express();
app.server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const db = new Database();

db
  .connect()
  .then(() => {
    if (config.database.reseed) db.drop();

    db.getAdminsCount().then(adminsCount => {
      if (adminsCount === 0) db.insertOneAdmin(config.masterAdmin);
    });
  })
  .then(() => {
    app.use('/', express.static('public'));
    app.use('/api/', api({ db }));

    app.server.listen(process.env.PORT || config.server.port);
    console.log(`Server listening on port ${app.server.address().port}...`);
  })
  .catch(err => {
    console.error(err.message);
  });

export default app;
