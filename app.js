const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const bodyParser = require('body-parser');
const User = require('./models/user');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// mongoose.connect('mongodb+srv://emedekong:pbDJ9K1u0L5GWi7v@cluster0.moxirzi.mongodb.net/?retryWrites=true&w=majority', {useMongoClient: true}, ()=> {
//     console.log("DB Connected...");
// });
//mongoose.connect('mongodb://127.0.0.1/login');

app.get('/', (req, res) => {
    //res.send("<h1>The Home Page!</>");
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/register', (req, res) => {
    const newUser = new User();
    console.log(User);
    User.find({}).then(userSaved => {
        return res.json({
            data: userSaved
        });
    });
    res.send(newUser);
})

app.post('/register', (req, res) => {
    const newUser = new User();
    //console.log(newUser);
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    console.log(newUser.email);
    newUser.save().then(userSaved => {
        console.log("New User Saved");
    });
    res.send(newUser);
});

app.listen(8002, (req, res) => {
    console.log("Listening on port 8002 .....!!");
});