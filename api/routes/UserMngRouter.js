// Author Jigar and Breej - B00842568 & B00843525
const express = require("express");
const userMngController = require('../controller/UserMngController');
const router = express.Router();

router.get("/getUsers", userMngController.getUserDetails)
router.post("/getSpecificUser", userMngController.getSpecificUser)
router.post("/login", userMngController.loginUser)
router.post("/registerUser", userMngController.registerUser)
router.put("/updateUser/:userId", userMngController.updateUserDetail)
router.delete("/deleteUser/:userId", userMngController.deleteUser)
router.put("/addid/:userId", userMngController.verifyId1)
module.exports = router;