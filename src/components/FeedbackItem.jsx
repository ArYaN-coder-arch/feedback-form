import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaTrashAlt,
} from "react-icons/fa";

function FeedbackItem({ feedback, onDelete }) {
  return (
    <div className="feedback-card">
      {/* Header */}
      <div className="feedback-header">
        <div className="user-info">
          <FaUserCircle className="avatar" />

          <div>
            <h3>{feedback.name}</h3>

            <div className="contact-info">
              <div className="email-chip">
                <FaEnvelope />
                <span>{feedback.email}</span>
              </div>

              <div className="phone-chip">
                <FaPhoneAlt />
                <span>{feedback.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="message-box">
        <div className="message-icon">💬</div>

        <p className="feedback-message">
          {feedback.message}
        </p>
      </div>

      {/* Footer */}
      <div className="feedback-footer">
        <span className="date-badge">
          {new Date(feedback.createdAt).toLocaleDateString()}
        </span>

        <button
          className="delete-button"
          onClick={() => onDelete(feedback._id)}
        >
          <FaTrashAlt />
          Delete
        </button>
      </div>
    </div>
  );
}

export default FeedbackItem;