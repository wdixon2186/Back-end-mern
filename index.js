let express = require('express');
let cors = require('cors');
const app = express();
const MovieController = require('./controllers/movies2019');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true
  }

app.use(cors());

app.use('/', cors(corsOptions), MovieController);

app.listen(8080, () => {
    console.log('we live');
});