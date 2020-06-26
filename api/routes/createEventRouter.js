const express = require("express");
const createController = require('../controller/createEventController');
const router = express.Router();

router.get("/getHistory/:userId", createController.get_User_EventsHistory)
router.post("/postEvent/:userId", createController.post_User_Event)

module.exports = router;