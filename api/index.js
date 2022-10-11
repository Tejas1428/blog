const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories');
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json())

app.use("/images", express.static(path.join(__dirname, "/images")))
//connection to database
mongoose.connect(process.env.MONGO_DB).then(console.log("DB connected..")).catch((err) => (console.log(err)));

//Uploading a file using multer 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage });
//api to upload image 
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
})

app.use("/api/auth/", authRoute)
app.use("/api/user/", userRoute)
app.use("/api/posts/", postsRoute)
app.use("/api/categories/", categoriesRoute)

app.listen("5000", () => {
    console.log("Server running on port 5000");
})