import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import FeedbackForm from "../components/FeedbackForm";
import { addFeedback } from "../services/FeedbackService";

function FeedbackPage() {

  const [loading, setLoading] = useState(false);

  const handleAddFeedback = async (feedback) => {

    try {

      setLoading(true);

      await addFeedback(feedback);

      toast.success("Feedback submitted successfully!");

    } catch (error) {

      toast.error("Unable to submit feedback.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="container fade-in">

      <h1 className="title">
        💬 Feedback Collector
      </h1>

      <p className="subtitle">
        We'd love to hear your thoughts!!
      </p>

      <div className="glass-card">

        <FeedbackForm
          onSubmit={handleAddFeedback}
          loading={loading}
        />

      </div>

      <ToastContainer theme="colored"/>

    </div>

  );

}

export default FeedbackPage;