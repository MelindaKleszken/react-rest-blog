const {User} = require('../models/User');

//list all users with details
exports.getAllUsers = async (req,res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).send(allUsers);
    } catch (error) {
        res.status(500).send(error);
    }
};


//list all user names
// exports.getAllUserNames = async (req,res) => {
//     try {
//         const allUserNames = await User.find({*, name: req.params.name});
//         console.log(allUserNames)
//         res.status(200).send(allUserNames);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };

//add new user
exports.addUser = async (req, res) => {
    try {
     const user = new User(req.body);
     const savedUser = await user.save();
     res.status(201).send(savedUser);
    } catch (error) {
     res.status(500).send({message: 'Could not connect'});
    }
};

//update user by ID
exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(user)
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send({message: 'User not found'});
    }
};

//delete user by ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send({message: 'User not found'});
    }
};
