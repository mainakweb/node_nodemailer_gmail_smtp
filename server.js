const express = require('express')
 const app = express()
 const port = 2000
 const controllers = require('./controllers'); //admin_login

 app.get('/',(req, res) => {return res.send('<h1>welcome to Patient API</h1>.');});

 app.get('/sendMail',controllers.sendMail);

 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})