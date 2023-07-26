const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_network_db', {
    userFindAndModify: false,
    userNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);
module.exports = mongoose.connection;