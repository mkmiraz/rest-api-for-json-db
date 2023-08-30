
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

/**
 * @desc get all users data
 * @name GET /api/v1/user
 * @access public
 */

const getAllUsers = (req, res) => {
    // get users data form json data
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));
    // send data
    res.status(200).json(users);
}

/**
 * @desc Create a new user
 * @name POST /api/v1/user
 * @access public
 */
const createUser = (req, res) => {
    // get users data form json data
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));
    // get body data

    const { name, skill } = req.body;
    // validation
    if (!name || !skill) {
        res.status(400).json({
            message: "Name & skill is required"
        })
    } else {
        users.push({
            id: Math.floor(Math.random() * 10000000000).toString(),
            name: name,
            skill: skill
        });



        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        res.status(201).json({
            message: "User create successfully"
        })
    }
}


/**
 * @desc get Single user
 * @name GET /api/v1/user/:id
 * @access public
 */

const singleUser = (req, res) => {
    // get users data form json data
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));
    // get single user
    const singleUser = users.find(data => data.id == req.params.id);

    if (singleUser) {
        res.status(200).json(singleUser);
    } else {
        res.status(404).json({
            message: 'Single User data not found'
        })
    }

}

/**
 * @desc delete user
 * @name DELETE /api/v1/user/:id
 * @access public
 */

const deleteUser = (req, res) => {
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    if (users.some(data => data.id == req.params.id)) {

        const data = users.filter(data => data.id != req.params.id);

        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(data));

        res.status(200).json({
            message: "user deleted successfully"
        })
    } else {
        res.status(404).json({
            message: "user not found"
        })
    }
}

/**
 * @desc Update user
 * @name PUT/PATCH /api/v1/user/:id
 * @access public
 */

const updateuser = (req, res) => {
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    if (users.some(data => data.id == req.params.id)) {

        users[users.findIndex(data => data.id == req.params.id)] = {
            ...users[users.findIndex(data => data.id == req.params.id)],
            ...req.body
        }

        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        res.status(200).json({
            message: "User Data Update Success"
        })

    } else {
        res.status(404).json({
            message: "user not found"
        })
    }


}






// export 
module.exports = {
    getAllUsers,
    createUser,
    singleUser,
    deleteUser,
    updateuser
}