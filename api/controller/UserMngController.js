
const UserMngObjModel = require('../models/userModel');

exports.getUserDetails = (req, res) => {
    UserMngObjModel._getUserDetails((err, succ) => {
        if (err) {
            res.send(err);
        }
        res.json(succ)
    })
}

exports.registerUser = (req, res) => {
    UserMngObjModel._registerUser(req.body, (err, succ) => {
        if (err) {
            res.send(err);
        }
        res.send(succ)
    })
}

exports.updateUserDetail = (req, res) => {
    UserMngObjModel._updateUserDetail(req.params.userId, req.body, (err, succ) => {
        if (err) {
            res.send('error occured -- controller');
        }
        res.json(succ)
    })
}

exports.deleteUser = (req, res) => {
    UserMngObjModel._deleteUser(req.params.userId, req.params.eventid, (err, succ) => {
        if (err) {
            res.send('error occured -- controller');
        }
        res.json(succ)
    })
};
