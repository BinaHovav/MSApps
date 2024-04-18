const imagesService = require('../services/images.service');

// Define a controller function named getImages, which handles GET requests for images
exports.getImages = async (req, res) => {
  // Destructure the page and category query parameters from the request object
  const { page, category } = req.query;

  try {
    // Call the fetchImages function from the images service module to fetch images asynchronously
    const images = await imagesService.fetchImages(page, category);

    // Send the fetched images as a JSON response
    res.json(images);
  } catch (error) {
    // If an error occurs during fetching images, send a 500 Internal Server Error response
    res.status(500).json({ error: 'Internal server error' });
  }
};
