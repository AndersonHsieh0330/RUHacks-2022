const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
let routes = require('./routes');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
// parse application/json
app.use(bodyParser.json())

app.use(routes)

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})