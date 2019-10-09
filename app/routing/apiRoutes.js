var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.JSON(friends)
        console.log(friends);
    });

    app.post("/api/friends", function (req, res) {
        //send all information here and do calculations
        var userData = req.body;
        var scores = userData.scores;
        totalScore = [];

        //console.log(userData.scores);

        for (let i = 0; i < scores.length; i++) {
            totalScore.push(parseInt(scores[i]));
        }

        //console.log(totalScore);
        for (let j = 0; j < friends.length; j++) {
            //console.log(friends[j].name, friends[j].scores)
            var totalDifference = totalScore.map(
                function (a, i) {
                    return Math.abs(a - parseInt(friends[j].scores[i]));
                });
            console.log(`${friends[j].name}'s total diff from you is is ${totalDifference.reduce((a, b) => a + b, 0)}`);
        }
    })

};
