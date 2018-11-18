const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());

app.use(morgnam('tiny'));

app.get('/', (request, response) => {
    
})