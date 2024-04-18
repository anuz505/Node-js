const mongoose = require('mongoose');

const connectToDB =( url) => {
    return mongoose.connect(url, { 
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useFindAndModify: true, 
        useUnifiedTopology: true 
    });
};

module.exports = connectToDB;
