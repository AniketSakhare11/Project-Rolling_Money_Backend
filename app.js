require('dotenv').config();

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Hello from ${process.env.APP_NAME}!`);
});

const app = express();

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`${process.env.APP_NAME} is running on port ${PORT}`);
  console.log(`Environment: ${process.env.APP_ENV}`);
});

