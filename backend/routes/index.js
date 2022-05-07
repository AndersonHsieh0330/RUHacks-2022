const router = require('express').Router();
const connection = require('../config/database');
const Recipe = connection.models.Recipe;
const mongoose = require('mongoose');

router.get('/',async(req,res,next)=>{
    
    const recipes = await Recipe.find();
    const jsonContent = JSON.stringify(recipes);

    res.send(jsonContent);
})
router.get('/:id', async(req, res, next) => {
    const new_id = new mongoose.Types.ObjectId(req.params.id)
    const recipe = await Recipe.findById(new_id);
    const jsonContent = JSON.stringify(recipe);

    res.send(jsonContent);
});

router.post('/',async(req,res,next)=>{

    const cooking_methods_request = req.body.cooking_methods;
    const recipe = await Recipe.create({
        cooking_methods:req.body.cooking_methods
    })
    const id = {
        _id:recipe._id.toString()
    }
    res.send(id);
})







module.exports = router;