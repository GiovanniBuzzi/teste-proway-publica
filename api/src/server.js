///// Server, criação via express

const express = require('express');
const routes = require('./routes');

//// Inserção de dependencias no server
require('./database/index');

const app = express();

app.use(express.json());
app.use(routes);

//// Porta do server
app.listen(3334);