const express = require("express");
const userMngController = require('../controller/UserMngController');
const router = express.Router();

// router.get("/login/:userId/:password", userMngController.getUserDetails)
router.get("/getusers", userMngController.getUserDetails)
router.post("/registerUser", userMngController.registerUser)
router.put("/updateUser/:userId", userMngController.updateUserDetail)
router.delete("/deleteUser/:userId", userMngController.deleteUser)

module.exports = router;
