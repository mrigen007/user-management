const mongoose = require('mongoose');
const color = require('colorette');

const connectDB = (url) => {
    try {
        return mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log(color.bgRed(error));
    }
};

module.exports = connectDB;