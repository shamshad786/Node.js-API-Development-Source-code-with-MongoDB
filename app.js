const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config()


//DATABASE Connection 
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true ,useUnifiedTopology: true, useFindAndModify: false}
    
    )
    .then(() => console.log('Database Connected'));

mongoose.connection.on('error', err => {
    console.log(`Database not connected: ${err.message}`);
})

//postRoute ko require kiya hai acces ke liye
const postRoutes = require('./routes/post'); // yaha baar baar exports ko use karne ke liye const define karna padega isliye object destructuring ka use karenge {getPosts} taki bahut saare exports ko ek hi jagah reuqire kar ke use karsake 


// const myOwnMiddleware = (req,res,next) => { // ye apna middleware ko bana ke use karte hai agar "req,res,next" ke middleware ko use karo to reload continueous raheta hai loding hang ho jata hai
//     console.log('middleware applied');
//     next();
//}

//middleware
app.use(morgan("dev"));
// app.use(myOwnMiddleware);

//bodyParser Middleware
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', postRoutes);

app.listen(port, () => {
    console.log(`NodeJS API server in running on ${port}`);
});




