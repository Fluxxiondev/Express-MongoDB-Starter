const User = require('../models/User');


const createAccount = async (req, res) => {
    const { Name, Email, Password }= req.body;


    const previousUser = await User.findOneAndUpdate({
        email: Email
    },{name: Name})
   

    res.status(201).json({
        type: "success",    
        message: "User updated successfully",
    });
}

module.exports = createAccount;