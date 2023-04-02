require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
