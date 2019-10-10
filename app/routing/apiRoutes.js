//pulls in data from friends.js (to be used in algorithm below).
var friends = require("../data/friends.js");

//makes apiRoutes a module with data available to server.js for routing.
module.exports = function (app) {
    //get request established to grab data from friends.js for processing in function below. Returned as JSON.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    //post request established to display/load result from function below to route - api/friends.
    app.post("/api/friends", function (req, res) {
        //make large initial value for comparision; and establish empty variables for dynamic filling at end of function.
        var difference = 100;
        var mName = "";
        var mPhoto = "";
        //run loop funtion for each oject in array. Friend established as placeholder/property to be given final value at end of function.
        friends.forEach(function (friend) {
            //empty scores arry established to asign number after for-loop below. Then to be used for comparison to difference variable. 
            var scoresArray = [];
            //helps set score of user and friends.js database objects into a single value. 
            function add(total, num) {
                return total + num;
            }
            //loop comparing user score with friends.js/objects/scores and putting results in scores array
            for (var i = 0; i < friend.scores.length; i++) {
                scoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));

            }
            //reduces the array results into a single value with assistance of add function established above
            totalDifference = scoresArray.reduce(add, 0);
            //checks totaldifference to previous difference to then asign matching object with lowest difference
            if (totalDifference < difference) {
                difference = totalDifference;
                mName = friend.name;
                mPhoto = friend.photo;
            }
        });
        //result returned as JSON 
        res.json({
            name: mName,
            photo: mPhoto
        });
        //Result posted to body of page.
        friends.push(req.body);
    });
}