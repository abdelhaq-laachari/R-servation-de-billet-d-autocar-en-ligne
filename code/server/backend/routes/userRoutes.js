const express = require("express"); // Import express
const router = express.Router(); // Create a router
const {protect} = require('../middleware/authMiddleware')
const {
  registerUser,
  loginUser,
  getMe,
  logoutUser,
} = require("../controllers/userController"); // <--- Import the userController

router.route("/").post(registerUser); // <--- Create a route for the registerUser function
router.route("/login").post(loginUser); // <--- Create a route for the loginUser function
router.route("/me").get(protect,getMe); // <--- Create a route for the getMe function
router.route("/logout").post(logoutUser); // <--- Create a route for the logoutUser function

module.exports = router;