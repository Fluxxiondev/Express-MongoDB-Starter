const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        }

    },
    {
        timestamps: true // createdAt, updatedAt
    }
);

// Export the model
module.exports = mongoose.model('User2', userSchema);