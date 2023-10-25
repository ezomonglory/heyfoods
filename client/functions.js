
// My function to pick random data fron the array 

export const pickRandomElementsFromArray = (arr, count) => {
	if (count > arr.length) {		
		return "Count exceeds array length";
	}

	const shuffled = arr.slice(); 
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements randomly
	}

	return shuffled.slice(0, count); 
};
