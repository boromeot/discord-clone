if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.SECRET);
app.listen(3001, () => {
    console.log('server running!');
});