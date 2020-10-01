const express = require('express');

require('./database/index');

const app = express();

app.use(express.json());

app.listen(3334);