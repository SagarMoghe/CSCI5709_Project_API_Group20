
const EventObjModel = require('../models/createModelModel');

exports.get_User_EventsHistory = (req, res) => {
    EventObjModel.getUserEventsHistory(req.params.userId, (err, succ) => {
        if (err) {
            res.send('error occured -- controller');
        }
        res.json(succ)
    })
}

exports.post_User_Event = (req, res) => {
    EventObjModel.postUserEvent(req.params.userId,req.body, (err, succ) => {
        if (err) {
            res.send('error occured -- controller');
        }
        res.json(succ)
    })
}

exports.update_User_Event = (req, res) => {
    EventObjModel.updateUserEvent(req.params.userId, req.body, (err, succ) => {
        if (err) {
            res.send('error occured -- controller');
        }
        res.json(succ)
    })
}

exports.delete_User_Event = (req, res) => {
    EventObjModel.deleteUserEvent(req.params.userId, req.params.eventid, (err, succ) => {
        if (err) {
            res.send('error occured -- controller');
        }
        res.json(succ)
    })
};