const express = require("express");

const router = express.Router();

const {
  addFeedback,
  getFeedback,
  updateFeedback,
  deleteFeedback,
} = require("../controllers/feedbackController");

router.post("/", addFeedback);

router.get("/", getFeedback);

router.put("/:id", updateFeedback);

router.delete("/:id", deleteFeedback);

module.exports = router;