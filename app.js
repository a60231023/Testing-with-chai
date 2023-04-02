require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router/routes')
const connectToDb = require('./database/db');

connectToDb();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', router)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
