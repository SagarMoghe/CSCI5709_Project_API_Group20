
var connection = require('./DatabaseConn');
const { NULL } = require('mysql2/lib/constants/types');
var Obj = function () {

}

Obj._getUserDetails = (res) => {
    connection.db566.then(function (connection) {
        let sql = 'select * from users';
        let query = connection.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res(err, null);
            }
            res(null, result);
        })
    });
}

// @route POST api/usermng/register
// @desc Register user
// @access Public
//POST Route to register a user record in FCS DB
Obj._registerUser = (req, res) => {
    let where = 'email = ?';
    let value = [req.email];
    let sqlSelect = 'select * from users where ' + where;
    connection.db566.then(function (connection) {
        let querySelect = connection.query(sqlSelect, value, (err1, result1) => {
            if (err1) {
                console.log(err1);
                res(err1, null);
            } else if (result1.length === 0) {
                console.log('Email id is not found and to be inserted/pushed');
                const sqlInsert = "INSERT INTO users SET ?";
                let values = {
                    userName: req.userName,
                    email: req.email,
                    password: req.email,
                    dob: req.dob,
                    gender: req.gender
                };

                connection.query(sqlInsert, values, function (err, result) {
                    if (err) {
                        console.log(err);
                        res(err, null);
                    } else {
                        console.log('User added in users table');
                        res('User ' + req.email + ' added in users table', result);
                    }
                });
            } else {
                err = 'Email id ' + req.email +
                    ' already exists in our database';
                res(err, null);
            }
        });
    });
}

Obj._updateUserDetail = (userId, event, result) => {
    let url1 = event['updatedItem'].imageurls.length > 0 && event['updatedItem'].imageurls[0] != undefined ? "'" + event['updatedItem'].imageurls[0] + "'" : null;
    let url2 = event['updatedItem'].imageurls.length > 1 && event['updatedItem'].imageurls[1] != undefined ? "'" + event['updatedItem'].imageurls[1] + "'" : null;
    var sql = "";
    connection.db566.then(function (connection) {
        connection.query(sql, function (err, succ) {
            if (err) {
                console.log(err);
                result(err, null);
            }
            else {
                result(null, true);
            }

        });
    });


}

Obj._deleteUser = (userId, eventId, result) => {

    var sql = `DELETE FROM createdevents WHERE eventid=`+eventId+` and userid=`+userId;

    connection.db566.then(function (connection) {
        connection.query(sql, function (err, succ) {
            if (err) {
                console.log(err);
                result(err, null);
            }
            else {
                result(null, true);
            }

        });
    });


}

module.exports = Obj;
