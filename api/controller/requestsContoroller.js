const EventObjModel = require('../models/requestsModel');

exports.get_events_and_requests = (req, res) => {
    EventObjModel.getEventsAndRequests(req.params.userId, (err, succ) => {
        if (err) {
            res.send('error occured -- controller');
        }
        res.json(succ)
    })
}