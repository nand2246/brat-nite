var express = require("express");
var router = express.Router();

const Itinerary = require("../models/itineraryModel");
const User = require("../models/userModel");

const { verifyToken } = require("../utils/jwtUtils");

/* GET itineraries listing. */
router.get("/", verifyToken, async function (req, res) {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error occurred connecting to the database" });
  }

  try {
    res.send(await Itinerary.find({ userId: userId }).sort({ $natural: -1 }));
  } catch (e) {
    res.status(500).json({
      message: `Getting itineraries from database failed, ${e.message}`,
    });
  }
});

module.exports = router;
