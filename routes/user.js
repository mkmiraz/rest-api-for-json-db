const express = require('express');
const { getAllUsers, createUser, singleUser } = require('../controllers/userController');


// create a router

const router = express.Router();


// user routes
router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', singleUser);








// export routes
module.exports = router;