//@Author - Sagar Moghe B00838037

const express = require("express");
const makePremiumController = require('../controller/makePremiumController');
const router = express.Router();

//GET all the requests that match the search
router.put("/makePremium/:userId", makePremiumController.makePremium)

module.exports = router;
