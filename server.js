const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');

dotenv.config();
const PORT = process.env.PORT || 8080;

// Express init
const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// API ROUTES
app.use('/api/v1/user', userRouter);




// Listen Port
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`.bgCyan.black);
});