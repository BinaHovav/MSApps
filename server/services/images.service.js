const axios = require('axios'); // Import the axios library for making HTTP requests

// Export a function named fetchImages, which accepts page and category as parameters
exports.fetchImages = async (page, category) => {
  try {
    // Make a GET request to the specified API endpoint with the provided page and category parameters
    const response = await axios.get(
      `http://api.example.com/images?page=${page}&category=${category}`
    );

    // Return the data received from the API response
    return response.data;
  } catch (error) {
    // If an error occurs during the HTTP request, throw a new Error with a message
    throw new Error('Error fetching images');
  }
};
