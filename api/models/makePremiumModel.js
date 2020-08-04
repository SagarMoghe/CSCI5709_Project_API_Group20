//Sagar Moghe B00838037

let connection = require('./DatabaseConn');

let Obj = function () {

};

Obj._makePremium = (req, result) => {
    connection.db566.then(function (connection) {
        console.log("API userid",req.params.userId)
        let sql566 = "UPDATE users SET isPremium = 1 WHERE userId ="+req.params.userId
        let query566 = connection.query(sql566, (error566, result566) => {
            if (error566) {
                console.log(error566);
            }

            else {
                //console.log(result566[0]);
                result(null, result566);
            }
        })
    });
}

module.exports = Obj;
