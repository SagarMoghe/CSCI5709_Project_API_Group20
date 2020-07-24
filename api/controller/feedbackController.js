const FeedbackObjModel = require('../models/feedbackModel');


exports.insertFeedback = (req, res) => {
    FeedbackObjModel._insertFeedback(req,(err, succ) => {
        if (err) {
            res.send(err);
        }
        res.json(succ)
    })
}