const app = require('./app');
const port = process.env.PORT || 3000;
const connectDB = require("./database/connect");
const color = require('colorette');

// 👇️ handle uncaught exceptions
process.on('uncaughtException', function (err) {
    console.log(color.red(`Uncaught Exception Error Occurred ${err}`));
});

const startDB = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        console.log(color.blue(`DB server is connected`));
        app.listen(port, () => {
            console.log(color.blue(`Node server is running on port ${port}...`));
        })
    } catch (error) {
        console.log(color.red(`ERROR is ${error}`));
    }
};


startDB();