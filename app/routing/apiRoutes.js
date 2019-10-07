var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.JSON(friends)
    });

    app.post("/api/friends", function (req, res) {
        //logic that compares scores
        //2 for loops, user1 and user2 
        //subtract each score and get the difference from each score question
        //POST after scores calculated 

    });
}