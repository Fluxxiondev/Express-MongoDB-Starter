const User = require('../models/User');


const login = async (req, res) => {
    const { Email, Password }= req.body;

    const previousUser = await User.findOne({
        email: Email,
        password: Password
    });

    if(previousUser){
        return res.status(400).json({
            type: "success",
            message: "Logged in successfully",
        });
    }
    else{
        return res.status(400).json({
            type: "error",
            message: "Wrong email or password",
        });
    }

}

module.exports = login;