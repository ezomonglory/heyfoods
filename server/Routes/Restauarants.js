const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Restaurant = require("../models/RestaurantModel");

// Creating a restaurant

router.post("/create", async (req, res, next) => {
	try {
		const request = req.body;

		const restaurantExist = await Restaurant.findOne({ name: request.name });

		if (restaurantExist) {
			throw createError.Conflict("Restaurant name has been registered");
		}

		const restaurant = new Restaurant({
			name: request.name,
			foods: request.foods,
			ratings: request.ratings,
			stars: request.stars,
			status: request.status,
			offer: request.offer,
			image: request.image,
			deliveries: request.deliveries,
			launchDate: request.launchDate,
			category: request.category,
		});

		const savedRestaurant = await restaurant.save();

		res.send(savedRestaurant);
	} catch (error) {
		next(error);
	}
});

// Sorting a restaurant
router.get("/sort/:name", async (req, res, next) => {
	try {
		const sort = req.params.name;

		if (sort === "Most Rated" || sort === "Most Popular") {
			Restaurant.find({})
				.sort({ ratings: -1 })
				.then((documents) => {
					res.send(documents);
				})
				.catch((err) => {
					next(err);
				});
		}

		if (sort === "Highest Stars") {
			Restaurant.find({})
				.sort({ stars: -1 })
				.then((documents) => {
					res.send(documents);
				})
				.catch((err) => {
					next(err);
				});
		}

		if (sort === "Newest") {
			Restaurant.find({})
				.sort({ launchDate: -1 })
				.then((documents) => {
					res.send(documents);
				})
				.catch((err) => {
					next(err);
				});
		}
	} catch (error) {
		next(error);
	}
});

// Searching for a restaurant based on the name
router.get("/search", async (req, res, next) => {
	try {
		const { name } = req.query;

		const result = await Restaurant.findOne({ name: name });
		if (result) {
			res.send(result);
		} else {
			throw createError.NotFound("The Restaurant could not be found");
		}
	} catch (error) {
		next(error);
	}
});


// Searching for food and it returns the restaurant(s) the sells the food
router.get("/searchfood", async (req, res, next) => {
	try {
		const { food } = req.query;

		const restaurants = await Restaurant.find({ foods: food });

		res.send(restaurants);
	} catch (error) {
		next(error);
	}
});

// To get all restaurants
router.get("/", async (req, res, next) => {
	try {
		const restaurants = await Restaurant.find();
		res.send(restaurants);
	} catch (err) {
		next(err);
	}
});
module.exports = router;
