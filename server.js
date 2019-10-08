var express = require("express");
var app = express();
var parser = require("body-parser");
var PORT = 3000;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(parser.json({ type: }));
app.use(parser.text());


app.use(express.static("public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("Port at : " + PORT);
})
