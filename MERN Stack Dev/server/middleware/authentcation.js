const jwt = require("jsonwebtoken")
const User = require("../modals/userSchema")

const authentication = async (req, res) => {
    try {
        console.log('working')
        const token = req.cookies.jwtoken;
        const veriftToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: veriftToken._id, "tokens.token": token });

        if (!rootUser) {
            throw new Error('User not found')
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;


    } catch (err) {

        res.status(401).send("Unauthorized: No token provided");


    }
}

module.exports = authentication