if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const LoginModel = require('./models/Login');

const bcrypt = require('bcrypt');
const cors = require('cors');
const RegisterModel = require('./models/Register');

app.use(express.json());
app.use(cors());

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

app.post("/User", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.post("/login", async (req, res) => {
    const {email, password} = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const login = {
        email,
        hashedPassword: hash
    }
    const newLogin = new LoginModel(login);
    await newLogin.save();

    res.json(login);
});

app.post("/register", async (req, res) => {
    const {
        email,
        username,
        password,
        month,
        day,
        year
    } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const login = {
        email,
        username,
        hashedPassword,
        month,
        day,
        year
    };
    const newLogin = new RegisterModel(login);
    await newLogin.save();
    res.json(login);
})

app.listen(3001, () => {
    console.log('server running!');
});