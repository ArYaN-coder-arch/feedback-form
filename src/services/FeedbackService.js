import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api/feedback",
});

export const addFeedback = async (feedback) => {
  const response = await API.post("/", feedback);
  return response.data;
};

export const getFeedbacks = async () => {
  const response = await API.get("/");
  return response.data;
};

export const deleteFeedback = async (id) => {
  const response = await API.delete(`/${id}`);
  return response.data;
};