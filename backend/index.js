if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const app = express();

mongoose.connect(process.env.SECRET);
// First api endpoint
app.get("/Users", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.listen(3001, () => {
    console.log('server running!');
});