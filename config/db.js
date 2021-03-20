const mongoose = require('mongoose');;
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });
        
        console.log('>>> MongoDB Connected.');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;

// const DB_USER = 'user';
// const PASSWORD = encodeURIComponent('hello@123'); 
// const DB_URL = `mongodb://${DB_USER}:${PASSWORD}@ds331735.mlab.com:31772/any_db`;