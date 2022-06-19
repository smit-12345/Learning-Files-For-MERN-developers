const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
});


//hashing password before save dunction od auth.js
// userSchema.pre('save', async (next) => {
//     console.log("pre function");
//     if (this.isModified('password')) {
//         this.password = bcrypt.hash(this.password, 12);
//         this.cpassword = bcrypt.hash(this.cpassword, 12);
//     }
//     next();
// });

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
        this.cpassword = await bcrypt.hash(this.cpassword, 10);
    }
    next();
});

const User = mongoose.model('USERS', userSchema)

module.exports = User;
