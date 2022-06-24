const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
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

//we are generating token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({/*Payload*/_id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err)
    }
}

const User = mongoose.model('USERS', userSchema)

module.exports = User;
