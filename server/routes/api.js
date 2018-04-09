
// router.post('/login', async (req, res) => {
//   let userData = req.body

//   User.findOne({username: userData.username}, (err, user) => {
//     if (err) {
//       console.log(err)    
//     } else {
//       if (!user) {
//         res.status(401).send('Invalid Username')
//       } else 
//       if ( user.password !== userData.password) {
//         res.status(401).send('Invalid Password')
//       } else {
//         // let payload = {subject: user._id}
//         // let token = jwt.sign(payload, 'secretKey')
//         // res.status(200).send({token})
//         res.status(200).send(user)
//       }
//     }
//   })
// })

module.exports = router;