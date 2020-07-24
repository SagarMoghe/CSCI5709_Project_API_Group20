var connection = require('./DatabaseConn');
const { NULL } = require('mysql2/lib/constants/types');
var Obj = function () {

}

Obj._insertFeedback = (req, res) => {
    connection.db566.then(function (connection) {
        let sql = `INSERT INTO feedback VALUES ('${req.body.email}' , '${req.body.feedback}')`;
        //console.log(sql);
        let query = connection.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res(err, null);
            }
            res(null, result);
        })
    });
}

module.exports = Obj;
