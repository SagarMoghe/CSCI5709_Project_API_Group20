// Author Jigar, Breej, Nishant - B00842568, B00843525, B00835717
const express = require("express");
const userMngController = require("../controller/UserMngController");
const router = express.Router();

router.get("/getUsers", userMngController.getUserDetails);
router.post("/getSpecificUser", userMngController.getSpecificUser);
router.post("/login", userMngController.loginUser);
router.post("/registerUser", userMngController.registerUser);
router.put("/updateUser/:userId", userMngController.updateUserDetail);
router.delete("/deleteUser/:userId", userMngController.deleteUser);
router.put("/updateUserProfile/:userId", userMngController.updateUserProfile);
router.put("/addid/:userId", userMngController.verifyId1);
module.exports = router;
