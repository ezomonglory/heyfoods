export const pickRandomElementsFromArray = (arr, count) => {
	if (count > arr.length) {
		// Handle the case where the count is larger than the array length
		return "Count exceeds array length";
	}

	const shuffled = arr.slice(); // Create a copy of the original array
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements randomly
	}

	return shuffled.slice(0, count); // Return the first 'count' elements from the shuffled array
};
