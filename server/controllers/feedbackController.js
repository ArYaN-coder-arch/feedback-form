const Feedback = require("../models/Feedback");

// Add Feedback
const addFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);

    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Feedback
const getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({
      createdAt: -1,
    });

    res.json(feedback);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Feedback
const deleteFeedback = async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);

    res.json({
      message: "Feedback Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!feedback) {
      return res.status(404).json({
        message: "Feedback not found",
      });
    }

    res.json(feedback);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  addFeedback,
  getFeedback,
  updateFeedback,
  deleteFeedback,
};