const express = require('express');
const app = express();
const auth = require('./routes/auth');
const connectDB = require('./config/db');

app.use(express.json());


  
app.use(auth);
app.get('/',(req, res) => {
    console.log(req.user);
    res.status(200).send("<h1>This is my home page</h1>");
})

// Connect to database once, then start server
const startServer = async () => {
    try {
        await connectDB();
        console.log('Database connected successfully');
        
        app.listen(5000, () => {
            console.log("Server is listening on port 5000...");
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();

