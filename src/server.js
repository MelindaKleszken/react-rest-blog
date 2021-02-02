//import necessary files
require('./db/connection');
const express = require('express');
const cors = require("cors");
const {postRouter} = require("./routes/post");
const {userRouter} = require("./routes/user");
const path = require("path");

const port = process.env.PORT || 5000;
const app = express();

//transform to JSON the result
app.use(express.json());
//use CORS
app.use(cors());

//serve on port 5000 the static file
const public_directory = path.join(__dirname, "../client/build")
app.use(express.static(public_directory));


//import routers
app.use(userRouter);
app.use(postRouter);

//listen to port
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});