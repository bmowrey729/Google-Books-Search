const express = require("express");
const app = express();
const cors = require("cors");
const mongosse = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongosse.Mongoose.connect("mongodb+srv://bmowrey:Lu88ockEm$@cluster0.i9mqi.mongodb.net/googlebooks")
//require route

app.listen(3001, function(){
    console.log("express server is running on local 3001")

})