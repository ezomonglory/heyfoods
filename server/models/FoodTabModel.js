const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodTabSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	
	image: {
		type: String,
		required: true,
}
});



const FoodTab = mongoose.model("foodTab", foodTabSchema);

module.exports = FoodTab;
