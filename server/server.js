const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose')
const db = "mongodb://test:password@ds111648.mlab.com:11648/justcalldb";
const PORT = 3000;

mongoose.Promise = global.Promise;

mongoose.connect(db)
.then(() => console.log('Mongodb is up and running'))

const User = require('./models/user')

app.use(bodyParser.json()) 

app.post('/api/login', async(req, res) => {
    const {username, password} = req.body
    const res = await User.findOne({username, password})
    if(!res){
        //user is incorrect
        console.log("incorrect details")
    } else {
        // make a session and set user to logged in
        console.log("logging you in....")
    }
    console.log(req.body)
})

app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT);
});