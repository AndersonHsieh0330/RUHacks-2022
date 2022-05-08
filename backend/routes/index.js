const router = require('express').Router();
const connection = require('../config/database');
const Recipe = connection.models.Recipe;
const mongoose = require('mongoose');
const axios = require('axios');
// const fetch = require('node-fetch');

router.get('/',async(req,res,next)=>{
    const recipes = await Recipe.find();
    const jsonContent = JSON.stringify(recipes);
    res.header("Access-Control-Allow-Origin", "*");

    res.send(jsonContent);
})
router.get('/:id', async(req, res, next) => {
    try{
    const new_id = new mongoose.Types.ObjectId(req.params.id)
    const recipe = await Recipe.findById(new_id);
    
    const jsonContent = JSON.stringify(recipe);
    res.header("Access-Control-Allow-Origin", "*");

    res.send(jsonContent);
    }catch(err){
        console.log(err.message);
        res.header("Access-Control-Allow-Origin", "*");
        res.status(404).send('')
    
    }
});

router.post('/',async(req,res,next)=>{

    const cooking_methods_request = req.body.cooking_methods;
    const recipe = await Recipe.create({
        recipe_name: req.body.recipe_name,
        cooking_methods:req.body.cooking_methods
    })
    const id = {
        _id:recipe._id.toString()
    }
    res.header("Access-Control-Allow-Origin", "*");

    res.send(id);
})


router.post('/generateQRCode', async(req,res,next)=>{
    const OS_API_KEY = "FybBxfdAZ9tshVCkr2";
  const OS_API_SECRET = "i0rMx21izP3OGslQ5k8iwSYd";
  const OS_PROJECT_ID = "95786b59-0362-4afb-a909-33a641fc8a53";
    const currentRecipeID = req.body.currentRecipeID;

  axios({
    method: "POST",
    url:"https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/projects/95786b59-0362-4afb-a909-33a641fc8a53/assets",
    data:{
    "qrCodes": [
         {
              "intent": "http://localhost:3000/" + currentRecipeID
         }
    ]},
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2OTYxNGM1MC0zOGI0LTQ3M2UtYWVhMi02MGE0NjYyZTc4NzQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiIyZWEzZjFlNS03MTdlLTQ5YTctOTY1My03MzVhNWRhZWE0MmUiLCJldmVudF9pZCI6Ijg2MDdkZWUxLThiZWQtNGYyMC1iZTg2LTI2MTUwYjA5NTU1MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTE5NTk3MzQsImV4cCI6MTY1MjAwMjkzNCwiaWF0IjoxNjUxOTU5NzM0LCJqdGkiOiIxNzdhODI2YS04ZTkwLTQyYTYtYjY4Zi0wYTc0ZjAwNDdmZWEiLCJ1c2VybmFtZSI6ImZ5YmJ4ZmRhejl0c2h2Y2tyMiJ9.fiWwBFgwkGscgJ-OW6f9SVKOSNhWt3TyOq-ppdp8RkWssNbwRaRNCaAcqxnVJt81oXgpdc8Tji3NMpqPOMNCszLf62jDQOOalb-8R5J1IaOpRkf2hzYSkt3MsrVjSe2pjLNmgZbOx3XyCBaREJj23YQAYEQLx_2xiAYFS_q4C3sgw4NqSjVeWFWqQhrkn9U7XgQTBFfS6HEVW1xw9jLjQRcOcf9hApeATaN-PGzD07IvoiCTo_VMXavTsQ-aSe1Nb2vKA_u6rxXoqBHfBUbO6-V5B4_o8hpPh1HW-urptK6bG6R5ta17tyhH84N5yxP7K-iEXOcVNs8smQN300h24g'
      }
})
.then(res => {
    console.log(res);
//     axios.post(`https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/assets/assetId/qrcodes \
//       `, {
//           "assetId": "032a89fc-75eb-42c9-b525-d0815df19507"
//           ,"dataUrl" : true
//      }
//   ).then(res => {
//       editQRCodeDataURL(res.qrCodes[0].image.data);
//           console.log("imgDataURL created");
//           console.log(res.qrCodes[0].image.data);
//       }).catch(error => {
//           console.log(error);
//       })

}).catch(error => {
    console.log(error);
})

// const options = {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2OTYxNGM1MC0zOGI0LTQ3M2UtYWVhMi02MGE0NjYyZTc4NzQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiIyZWEzZjFlNS03MTdlLTQ5YTctOTY1My03MzVhNWRhZWE0MmUiLCJldmVudF9pZCI6Ijg2MDdkZWUxLThiZWQtNGYyMC1iZTg2LTI2MTUwYjA5NTU1MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTE5NTk3MzQsImV4cCI6MTY1MjAwMjkzNCwiaWF0IjoxNjUxOTU5NzM0LCJqdGkiOiIxNzdhODI2YS04ZTkwLTQyYTYtYjY4Zi0wYTc0ZjAwNDdmZWEiLCJ1c2VybmFtZSI6ImZ5YmJ4ZmRhejl0c2h2Y2tyMiJ9.fiWwBFgwkGscgJ-OW6f9SVKOSNhWt3TyOq-ppdp8RkWssNbwRaRNCaAcqxnVJt81oXgpdc8Tji3NMpqPOMNCszLf62jDQOOalb-8R5J1IaOpRkf2hzYSkt3MsrVjSe2pjLNmgZbOx3XyCBaREJj23YQAYEQLx_2xiAYFS_q4C3sgw4NqSjVeWFWqQhrkn9U7XgQTBFfS6HEVW1xw9jLjQRcOcf9hApeATaN-PGzD07IvoiCTo_VMXavTsQ-aSe1Nb2vKA_u6rxXoqBHfBUbO6-V5B4_o8hpPh1HW-urptK6bG6R5ta17tyhH84N5yxP7K-iEXOcVNs8smQN300h24g'
//     }
//   };
  
//   fetch('https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/projects/95786b59-0362-4afb-a909-33a641fc8a53/assets', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
    

})








module.exports = router;