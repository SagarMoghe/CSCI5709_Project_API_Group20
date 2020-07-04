const express = require("express");
const findEventController = require('../controller/findEventsController');
const router = express.Router();

router.get("/findevents/:userId", findEventController.find_events)

module.exports = router;