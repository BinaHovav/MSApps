const express = require('express');
const imagesRouter = require('./routes/images.router');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.json());
app.use('/images', imagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
