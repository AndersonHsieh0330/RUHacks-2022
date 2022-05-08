const router = require('express').Router();
const connection = require('../config/database');
const Recipe = connection.models.Recipe;
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();
const localURL = process.env.LOCALURL;

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
    console.log(req.body)
    const OS_API_KEY = "FybBxfdAZ9tshVCkr2";
  const OS_API_SECRET = "i0rMx21izP3OGslQ5k8iwSYd";
  const OS_PROJECT_ID = "95786b59-0362-4afb-a909-33a641fc8a53";
    const currentRecipeID = req.body.currentRecipeID;
    const recipeName = req.body.recipeName;
    
  axios({
    method: "POST",
    url:"https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/projects/95786b59-0362-4afb-a909-33a641fc8a53/assets",
    data:{
        "name":recipeName,
    "qrCodes": [
         {
              "intent": localURL + currentRecipeID
         }
    ]},
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2OTYxNGM1MC0zOGI0LTQ3M2UtYWVhMi02MGE0NjYyZTc4NzQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiIyZWEzZjFlNS03MTdlLTQ5YTctOTY1My03MzVhNWRhZWE0MmUiLCJldmVudF9pZCI6Ijg2MDdkZWUxLThiZWQtNGYyMC1iZTg2LTI2MTUwYjA5NTU1MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTE5NTk3MzQsImV4cCI6MTY1MjAwMjkzNCwiaWF0IjoxNjUxOTU5NzM0LCJqdGkiOiIxNzdhODI2YS04ZTkwLTQyYTYtYjY4Zi0wYTc0ZjAwNDdmZWEiLCJ1c2VybmFtZSI6ImZ5YmJ4ZmRhejl0c2h2Y2tyMiJ9.fiWwBFgwkGscgJ-OW6f9SVKOSNhWt3TyOq-ppdp8RkWssNbwRaRNCaAcqxnVJt81oXgpdc8Tji3NMpqPOMNCszLf62jDQOOalb-8R5J1IaOpRkf2hzYSkt3MsrVjSe2pjLNmgZbOx3XyCBaREJj23YQAYEQLx_2xiAYFS_q4C3sgw4NqSjVeWFWqQhrkn9U7XgQTBFfS6HEVW1xw9jLjQRcOcf9hApeATaN-PGzD07IvoiCTo_VMXavTsQ-aSe1Nb2vKA_u6rxXoqBHfBUbO6-V5B4_o8hpPh1HW-urptK6bG6R5ta17tyhH84N5yxP7K-iEXOcVNs8smQN300h24g'
      }
})
.then(response => {
    const assetID = response.data.asset.assetId;
    console.log(assetID);
    //https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/assets/4d0a3a5d-5f78-4da8-90e2-063dc961b6ea/qrcodes
    const url = "https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/assets/"+assetID+"/qrcodes?dataUrl=true";
    axios({
        method: "GET",
        url:url,
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2OTYxNGM1MC0zOGI0LTQ3M2UtYWVhMi02MGE0NjYyZTc4NzQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiIyZWEzZjFlNS03MTdlLTQ5YTctOTY1My03MzVhNWRhZWE0MmUiLCJldmVudF9pZCI6Ijg2MDdkZWUxLThiZWQtNGYyMC1iZTg2LTI2MTUwYjA5NTU1MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTE5NTk3MzQsImV4cCI6MTY1MjAwMjkzNCwiaWF0IjoxNjUxOTU5NzM0LCJqdGkiOiIxNzdhODI2YS04ZTkwLTQyYTYtYjY4Zi0wYTc0ZjAwNDdmZWEiLCJ1c2VybmFtZSI6ImZ5YmJ4ZmRhejl0c2h2Y2tyMiJ9.fiWwBFgwkGscgJ-OW6f9SVKOSNhWt3TyOq-ppdp8RkWssNbwRaRNCaAcqxnVJt81oXgpdc8Tji3NMpqPOMNCszLf62jDQOOalb-8R5J1IaOpRkf2hzYSkt3MsrVjSe2pjLNmgZbOx3XyCBaREJj23YQAYEQLx_2xiAYFS_q4C3sgw4NqSjVeWFWqQhrkn9U7XgQTBFfS6HEVW1xw9jLjQRcOcf9hApeATaN-PGzD07IvoiCTo_VMXavTsQ-aSe1Nb2vKA_u6rxXoqBHfBUbO6-V5B4_o8hpPh1HW-urptK6bG6R5ta17tyhH84N5yxP7K-iEXOcVNs8smQN300h24g'
          }
    })
    .then(response => {
        const dataURL = response.data.qrCodes[0].image.data;
        console.log(dataURL);
        res.send(dataURL);
    })
    .catch(error => {
    console.log(error);
})
})
})

module.exports = router;