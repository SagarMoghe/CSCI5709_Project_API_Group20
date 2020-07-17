const express = require("express");
const userMngController = require('../controller/UserMngController');
const router = express.Router();

router.get("/getUsers", userMngController.getUserDetails)
router.post("/login", userMngController.loginUser)
router.post("/registerUser", userMngController.registerUser)
router.put("/updateUser/:userId", userMngController.updateUserDetail)
router.delete("/deleteUser/:userId", userMngController.deleteUser)

module.exports = router;
