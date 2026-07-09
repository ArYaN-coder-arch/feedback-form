import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import FeedbackList from "../components/FeedbackList";
import SearchFilter from "../components/SearchFilter";
import ModalComponent from "../components/ModalComponent";

import {
  getFeedbacks,
  deleteFeedback,
} from "../services/FeedbackService";

import { filterFeedback } from "../utils/filterUtils";

function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = async () => {
    try {
      setLoading(true);

      const data = await getFeedbacks();

      setFeedbacks(data);
    } catch (error) {
      toast.error("Unable to load feedback.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteFeedback(selectedId);

      toast.success("Feedback deleted successfully!");

      loadFeedbacks();
    } catch (error) {
      toast.error("Delete failed.");
    } finally {
      setShowModal(false);
      setSelectedId(null);
    }
  };

  const filteredFeedback = filterFeedback(
    feedbacks,
    search,
    date
  );
  const today = new Date().toISOString().split("T")[0];

const todaysFeedback = feedbacks.filter((feedback) => {
  return (
    new Date(feedback.createdAt)
      .toISOString()
      .split("T")[0] === today
  );
});

  return (
    <div className="container fade-in">

      <h1 className="title">
        Dashboard
      </h1>

      <p className="subtitle">
        View and manage submitted feedback.
      </p>

      <div className="dashboard-stats">

    <div className="stats-card">

        <div className="stats-icon">
            
        </div>

        <h2>{feedbacks.length}</h2>

        <span>Total Feedback</span>

    </div>

    <div className="stats-card">

        <div className="stats-icon">
            
        </div>

        <h2>{todaysFeedback.length}</h2>

        <span>Today's Feedback</span>

    </div>

    <div className="stats-card">

        <div className="stats-icon">
            
        </div>

        <h2>{filteredFeedback.length}</h2>

        <span>Filtered Results</span>

    </div>

</div>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        date={date}
        setDate={setDate}
      />

      {loading ? (

        <div className="loader"></div>

      ) : (

        <FeedbackList
          feedbacks={filteredFeedback}
          onDelete={handleDelete}
        />

      )}

      <ModalComponent
        show={showModal}
        onConfirm={confirmDelete}
        onCancel={() => {
          setShowModal(false);
          setSelectedId(null);
        }}
      />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="colored"
      />

    </div>
  );
}

export default Dashboard;