// index.js
// where your node app starts


import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/routes.js';


// init project
dotenv.config();

const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html

app.use(express.static('public'));

app.use(routes)

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
