const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
//name, email, password and timestamp
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    { timestamps:true}
);

const User = mongoose.model('User', userSchema);

module.exports = {
    User, userSchema
}