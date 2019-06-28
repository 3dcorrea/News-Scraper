var path = require("path");
module.exports = function (app) {
  app.get("/scrape", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/models/index"));
  });
}