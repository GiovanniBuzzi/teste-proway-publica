///// Server, criação via express

const express = require('express');

//// Inserção de dependencias no server
require('./database/index');

const app = express();

app.use(express.json());


//// Porta do server
app.listen(3334);