// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_network_db', {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// mongoose.set('debug', true);
// module.exports = mongoose.connection;

const { connect, connection } = require("mongoose");

connect("mongodb://127.0.01:27017/socialMediaApi");

module.exports = connection;