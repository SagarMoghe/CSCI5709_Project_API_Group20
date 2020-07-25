var connection = require('./DatabaseConn');
const {
    NULL
} = require('mysql2/lib/constants/types');
const bcrypt = require("bcryptjs");
var Obj = function () {

}

// @route GET api /usermng/getusers
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

// @route GET api /usermng/getSpecificUser
// @desc get specific user
// @access Public
//GET Route to fetch all the users from FCS DB
Obj._getSpecificUser = (req, res) => {
    connection.db566.then(function (connection) {
        console.log("-----------------");
        console.log("in _getSpecificUser");
        const email = req.user.email;
        console.log('_getSpecificUser ' + email);
        let where = 'email = ?';
        let sqlSelect = 'SELECT * FROM users WHERE ' + where;
        let query = connection.query(sqlSelect, email, (err, result) => {
            if (err) {
                console.log(err);
                res(err, null);
            } else if (result.length === 0) {
                console.log('_getSpecificUser: Email Id is not registered with RideShare');
                res(null);
            } else {
                console.log(result)
                console.log("_getSpecificUser: This is userid: " + result[0].userId)
                res(null, result);
            }
        })
    });
}

// @route GET api /usermng/login
// @desc get users
// @access Public
//GET Route to fetch the user from FCS DB
Obj._loginUser = (req, res) => {
    console.log(req);
    const password = req.user.password;
    const email = req.user.email;
    let where = 'email = ?';
    let sqlSelect = 'SELECT * FROM users WHERE ' + where;
    connection.db566.then(function (connection) {
        let query = connection.query(sqlSelect, email, (err, result) => {
            if (err) {
                console.log(err);
                res(err, null);
            } else if (result.length === 0) {
                console.log('Email Id is not registered with RideShare');
                res(null);
            } else {
                console.log(result)
                const hashedPassword = result[0].password;

                // Check password
                bcrypt.compare(password, hashedPassword).then(isMatch => {
                    if (isMatch) {
                        console.log('Login successful!');
                        res(null, result);
                    } else {
                        console.log('Invalid Password');
                        res(null);
                    }
                });
            }
        })
    });
}

// @route POST api /usermng/registerUser
// @desc Register user
// @access Public
//POST Route to register a user record in FCS DB
Obj._registerUser = (req, res) => {
    console.log('_registerUser');
    let where = 'email = ?';
    let value = [req.user.email];
    let sqlSelect = 'SELECT * FROM users WHERE ' + where;
    connection.db566.then(function (connection) {
        let querySelect = connection.query(sqlSelect, value, (err1, result1) => {
            if (err1) {
                console.log(err1);
                res(err1, null);
            } else if (result1.length === 0) {
                // console.log(result1.length)
                console.log('_registerUser: Email id is not found and to be inserted/pushed');
                const sqlInsert = "INSERT INTO users SET ?";
                let unHashesPassword = req.user.password;
                bcrypt.hash(unHashesPassword, 10, function (err, hash) {
                    let values = {
                        userName: req.user.username,
                        email: req.user.email,
                        password: hash,
                        dob: req.user.dob,
                        gender: req.user.gender
                    };
                    connection.query(sqlInsert, values, function (err, result) {
                        if (err) {
                            console.log(err);
                            res(err, null);
                        } else {
                            console.log('_registerUser: User ' + req.user.email + ' added in users table');
                            console.log(result);
                            res(null, result);
                        }
                    });
                });
            } else {
                console.log('_registerUser: Email id ' + req.user.email +
                    ' already exists in our database');
                err = 'Email id ' + req.user.email +
                    ' already exists in our database';
                // res(err);
                res(null)
            }
        });
    });
};
// @route PUT api /usermng/updateUser/:userId
// @desc Update user details
// @access Public
//PUT Route to update a user record in FCS DB
Obj._updateUserDetail = (userId, req, result) => {
    values = [req.userName,
        req.email,
        req.password,
        req.dob,
        req.gender
    ]
    // console.log(req.userName, req.email, req.password, req.dob, req.gender)
    var sqlUpdate = 'UPDATE users SET userName=? , email=? , password=? , dob=? , gender=? WHERE userId= ' + userId;
    connection.db566.then(function (connection) {
        connection.query(sqlUpdate, values, function (err, succ) {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, true);
            }
        });
    });


}

// @route DELETE api /usermng/deleteUser/:userId
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
            } else {
                console.log('User ' + userId + ' deleted from users table');
                // result(null, 'User ' + userId + ' deleted from users table');
                // result(null, true);
            }

        });
    });



}

Obj._putVerifyId = (userId, url1, result) => {
    console.log(userId)
    console.log(url1)
    values = [0, url1.image1, url1.image2]
    // console.log(req.userName, req.email, req.password, req.dob, req.gender)
    var sqlUpdate = 'UPDATE users SET isVerified= ?, idimage1=? , idimage2=? WHERE userId= ' + userId;
    connection.db566.then(function (connection) {
        connection.query(sqlUpdate, values, function (err, succ) {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, true);
            }
        });
    });

}

module.exports = Obj;