//@Author - Sagar Moghe B00838037

const makePremiumObjModel = require('../models/makePremiumModel');

// This will call the function from the model.
exports.makePremium = (req, res) => {
    makePremiumObjModel._makePremium(req,(err, succ) => {
        if (err) {
            res.send(err);
        }
        res.json(succ)
    })
}
