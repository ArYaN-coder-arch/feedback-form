import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks, onDelete }) {

  if (feedbacks.length === 0) {
    return (
      <div className="glass-card empty-card">
        <h2>No Feedback Found</h2>
        <p>Try changing your search or add new feedback.</p>
      </div>
    );
  }

  return (
    <div className="feedback-grid">

      {feedbacks.map((feedback) => (
        <FeedbackItem
          key={feedback._id}
          feedback={feedback}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}

export default FeedbackList;