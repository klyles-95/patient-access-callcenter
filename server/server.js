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

app.get('/', (req, res) => {
    res.send('From API route')
})

app.post('/api/login', async (req, res) => {
    let userData = req.body
   
    User.findOne({username: userData.username}, (err, user) => {
        if (err){
            console.log(err)
        } else {
            if (!user) {
              res.status(401).send('Invalid Username')
            } else 
            if ( user.password !== userData.password) {
              res.status(401).send('Invalid Password')
            } else {     
              res.status(200).send(user)
            }
        }
    })

})


    //const resp = await User.findOne({username, password})
    // if(!resp){
    //     //user is incorrect
    //     console.log("incorrect details")
    // } else {
    //     // make a session and set user to logged in
    //     console.log("logging you in....")
    // }
    // console.log(req.body)


app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT);
});