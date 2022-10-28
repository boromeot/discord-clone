if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');


const bcrypt = require('bcrypt');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.SECRET);

app.post("/users", async (req, res) => {
    const {
        email,
        username,
        password,
        month,
        day,
        year
    } = req.body;

    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const login = {
        email,
        username,
        hashedPassword,
        month,
        day,
        year
    };
    const newLogin = new UserModel(login);
    await newLogin.save();
    res.json(login);
})

app.listen(3001, () => {
    console.log('server running!');
});