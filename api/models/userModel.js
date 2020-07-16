
var connection = require('./DatabaseConn');
const { NULL } = require('mysql2/lib/constants/types');
var Obj = function () {

}

// @route GET api/usermng/getusers
// @desc get users
// @access Public
//GET Route to fetch all the users from FCS DB
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
    let sqlSelect = 'SELECT * FROM users WHERE ' + where;
    connection.db566.then(function (connection) {
        let querySelect = connection.query(sqlSelect, value, (err1, result1) => {
            if (err1) {
                console.log(err1);
                res(err1, null);
            } else if (result1.length === 0) {
                console.log(result1.length)
                console.log('Email id is not found and to be inserted/pushed');
                const sqlInsert = "INSERT INTO users SET ?";
                let values = {
                    userName: req.userName,
                    email: req.email,
                    password: req.password,
                    dob: req.dob,
                    gender: req.gender
                };

                connection.query(sqlInsert, values, function (err, result) {
                    if (err) {
                        console.log(err);
                        res(err, null);
                    } else {
                        console.log('User ' + req.email + ' added in users table');
                        res(null, result);
                    }
                });
            } else {
                console.log('Email id ' + req.email +
                    ' already exists in our database');
                err = 'Email id ' + req.email +
                    ' already exists in our database';
                // res(err);
                res(null)
            }
        });
    });
}

// @route PUT api/usermng/updateUser/:userId
// @desc Update user details
// @access Public
//PUT Route to update a user record in FCS DB
Obj._updateUserDetail = (userId, req, result) => {
    values = [req.userName,
        req.email,
        req.password,
        req.dob,
        req.gender]
    // console.log(req.userName, req.email, req.password, req.dob, req.gender)
    var sqlUpdate = 'UPDATE users SET userName=? , email=? , password=? , dob=? , gender=? WHERE userId= '+ userId;
    connection.db566.then(function (connection) {
        connection.query(sqlUpdate, values, function (err, succ) {
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

// @route DELETE api/usermng/deleteUser/:userId
// @desc Delete user
// @access Public
//DELETE Route to delete a user record from FCS DB
Obj._deleteUser = (userId, result) => {
    let where = 'userId = ?';
    let sqlSelect = 'DELETE FROM users WHERE ' + where;
    console.log(sqlSelect);
    connection.db566.then(function (connection) {
        connection.query(sqlSelect, userId, function (err, succ) {
            if (err) {
                console.log(err);
                result(err, null);
            }
            else {
                console.log('User ' + userId + ' deleted from users table');
                // result(null, 'User ' + userId + ' deleted from users table');
                // result(null, true);
            }

        });
    });


}

module.exports = Obj;
