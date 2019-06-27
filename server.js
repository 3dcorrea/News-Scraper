require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");

var app = express();

var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({
    extended: false
}));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

app.use(express.json());
app.use(express.static("routes/public"));

require("./routes/htmlRoutes")(app);



app.listen(PORT, function () {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});
module.exports = app;