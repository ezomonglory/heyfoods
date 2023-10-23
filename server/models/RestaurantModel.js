const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	foods: {
		type: [],
		required: true,
	},
	ratings: {
		type: Number,		
	},
	stars: {
		type: Number,		
	}, 

	status:{
        type:String,
    },

	offer: {
		type: String,
	},
	image: {
		type: String,
		required: true,
	},
	launchDate: {
		type: Number,
		required: true,
	},
    category:{
        type:String,
        required:true
    },
    deliveries:{
        type: Boolean,
        required:true
    }
});



const Restauarant = mongoose.model("restaurant", restaurantSchema);

module.exports = Restauarant;
