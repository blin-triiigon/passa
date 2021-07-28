const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const path = require("express-session");
const mongoose = require("mongoose");
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

//DB Config
const db = require('./config/keys')

//Connect to MongoDB
mongoose.connect(db, {useNewUrlParser: true}).then(console.log("Connected to MongoSB")).catch(err =>console.log(err))

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//BodyParser
app.use(express.urlencoded({
    extended:false
}))

//Routes
app.use(`/`, require("./routes/index"));
app.use("/users", require("./routes/users"));

app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${PORT}`));