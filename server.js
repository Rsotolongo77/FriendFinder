var express = require("express");
var app = express();
var parser = require("body-parser");
var PORT = process.env.PORT || 3000;
var path = require("path");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
//app.use(parser.json({ type: "application/vnd.api+json" }));
//app.use(parser.text());


app.use(express.static("public"));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
})
