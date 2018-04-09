const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose')
const db = "mongodb://test:password@ds111648.mlab.com:11648/justcalldb";
const PORT = 3000;

mongoose.Promise = global.Promise;

//Connect to Mongoose Databaseg
mongoose.connect(db)
.then(() => console.log('Mongodb is up and running'))

const User = require('./models/user')

app.use(bodyParser.json()) 

app.get('/', (req, res) => {
    res.send('From API route')
})

app.post('/api/login', async (req, res) => {
    let userData = req.body
   
    await User.findOne({username: userData.username}, (err, user) => {
        if (err){
            console.log(err)
        } else {
            if (!user) {
             
              res.json({
                  success: false,
                  message: "Invalid Username"
              })
            } else 
            if ( user.password !== userData.password) {
            //   res.status(401).send('Invalid Password')
              res.json({
                success: false,
                message: "Invalid Username"
            })
              
            } else {     
            //   res.status(200).send(user)
              res.json({
                success: true,
                message: "Logging In"
            })
            }
        }
    })

})

app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT);
});