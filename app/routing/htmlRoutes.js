var path = require('path');

//declares htmlRoutes as a module and makes it available to other files via require. 
module.exports = function (app) {

    //displays home page via express
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));

    });
    ///displays survey page via express
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //redirects non-existing route to home page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));

    });

}

