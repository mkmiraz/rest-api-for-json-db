const express = require('express');
const { getAllUsers, createUser, singleUser, deleteUser, updateuser } = require('../controllers/userController');


// create a router

const router = express.Router();


// user routes
router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(singleUser).delete(deleteUser).put(updateuser).patch(updateuser)






// export routes
module.exports = router;