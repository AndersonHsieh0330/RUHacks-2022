const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();
const app = express()
app.use(cors());
const port = 3001
let routes = require('./routes');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
// parse application/json
app.use(bodyParser.json())

app.use(routes)

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})