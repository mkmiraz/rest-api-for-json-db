const express = require('express');
const { getAllUsers, createUser } = require('../controllers/userController');


// create a router

const router = express.Router();


// user routes
router.get('/', getAllUsers);
router.post('/', createUser);







// export routes
module.exports = router;