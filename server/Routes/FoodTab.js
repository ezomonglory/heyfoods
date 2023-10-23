const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const FoodTab = require("../models/FoodTabModel");


router.get("/", async (req, res, next)=> {
    try {
        const foodTabs = await FoodTab.find()

        res.send(foodTabs)
    } catch (error) {
        next(error)
    }
})



router.post("/create", async (req, res, next) => {
    
    try {
		const request = req.body;

		const result = await FoodTab.findOne({ name: request.name });

		if (result) {
			throw createError.Conflict("Food Name already exist");
		}

		const newFoodTab = new FoodTab({
			name: request.name,
			image: request.image,
		});

		const savedFoodTab = await newFoodTab.save();

		res.send(savedFoodTab);
	} catch (error) {
		next(error);
	}


  
});

module.exports = router;
