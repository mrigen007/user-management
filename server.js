require("dotenv").config();
const connectDB = require("./database/connect");
const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;
const users = require("./routes/users");
const color = require('colorette');

app.use(express.json());
app.use("/a/user", users);
app.use(cors())

const startDB = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(color.blue(`Node server is running on port ${port}...`));
        });
    } catch (e) {
        console.log(color.red(`ERROR is ${error}`));
    }
};

startDB();