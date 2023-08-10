const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/api/user-routes');
const thoughtRoutes = require = ('./routes/api/though-routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use api routes

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-media-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// use to log mongo queries that are being execued
mongoose.set('debug', true);

app.listen(PORT, () => 
console.log(`connected on localhost:${PORT}`));