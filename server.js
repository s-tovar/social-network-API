const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/api/user-routes');
const thoughtRoutes = require = ('./routes/api/though-routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

