const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('../db/conn');
const User = require('../modals/userSchema');
const authentication = require("../middleware/authentcation")

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});


// //post section using promises
// router.post('/register', (req, res) => {

//     //for getting a data
//     const { name, email, phone, work, password, cpassword } = req.body;

//     //If during adding a data any field is empty
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.json({ error: "emplty field" })
//     }

//     //during adding some promises 
//     User.findOne({ email/*database email*/: email/*user entered email*/ }).then((userExist) => {

//         //if user is already exists
//         if (userExist) {
//             return res.status(422).json({ error: "Email already Exists" })
//         }

//         const user = new User({ name, email, phone, work, password, cpassword });

//         user.save().then(() => {
//             res.status(201).json({ message: "registered" })
//         }).catch((err) => res.status(500).json({ error: "Failed to register" }))
//     }).catch(err => { console.log(err) });

//     // res.send("mera register page");
// // });


// //post section using async , await

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {

        return res.status(422).json({ error: "Plz fill the field properly" });
    }



    try {

        const regex = /^[A-Za-z]+$/
        const ifUserExists = await User.findOne({ email: email });

        if (ifUserExists) {

            return res.status(422).json({ error: "Email Already Exists" });
        } else if (regex.test(name) === false) {

        }
        else if (password != cpassword) {
            res.status(400).json({ error: "password is not matching" });
        }
        else {


            const user = new User({ name, email, phone, work, password, cpassword });

            await user.save();
            res.status(201).json({ message: "registered successfully" })
        }

    } catch (err) {
        console.log(err);
    }
});

//login routing

router.post('/login', async (req, res) => {
    // console.log(req.body);
    // res.json({ message: "happy" })
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please enter your data" })
        }

        const userlogin = await User.findOne({ email: email });



        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            const token = await userlogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000), httpOnly: true
            });


            console.log(token);
            if (!isMatch) {
                console.log("not matching")
                res.status(400).json({ error: "error during log in" });
            } else {
                res.json({ message: "user log in success" });
            }
        } else {
            res.status(400).json({ error: "error during log in" });
        }


    } catch (err) {
        console.log(err);
    }

});
router.get('/about', authentication, (req, res) => {

    const requested = req.rootUser
    console.log(requested)
    res.send(requested)

});

// router.get('/about', authentication/*authentication middleware*/, (req, res) => {
//     
// });


module.exports = router;