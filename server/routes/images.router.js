const axios = require('axios');
const express = require('express');
const router = express.Router();

// Define routes related to images

router.get('/', async (req, res) => {
  try {
    const page = req.query.page || 1;
    const category = req.query.category || 'food'; // If category not provided, default to 'food' category
    const response = await axios.get(
      // Sending an HTTP request calling the pixabay API
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&page=${page}`
    );
    res.json(response.data);
  } catch (error) {
    // error handling
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.post('/', (req, res) => {
  // Handle POST request for images - to be continued :)
});

// Add more routes as needed - to be continued :)

module.exports = router;
