const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());

app.use(morgan('tiny'));

app.get('/', (request, response) => {
    response.json({
        message: 'Hello world'
    });
});

app.listen(5000, () => {
    console.log('Listering on port 5000');
});