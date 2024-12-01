const express = require('express');
const dbConnection = require('./config/dbConnection');
const cors = require('cors');
const router = require('./router/index');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(5800);

dbConnection();

