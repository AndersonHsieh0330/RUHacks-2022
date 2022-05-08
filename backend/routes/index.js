const router = require('express').Router();
const connection = require('../config/database');
const Recipe = connection.models.Recipe;
const mongoose = require('mongoose');

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







module.exports = router;