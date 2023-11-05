require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors')
const users = require("./routes/users");
app.use(cors());
app.use(express.json());

app.use('/a/user', users);

module.exports = app
