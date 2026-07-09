export const filterFeedback = (
  feedbacks,
  search,
  date
) => {

  return feedbacks.filter((feedback) => {

    const keyword =
      feedback.name.toLowerCase().includes(search.toLowerCase()) ||
      feedback.email.toLowerCase().includes(search.toLowerCase()) ||
      feedback.phone.toLowerCase().includes(search.toLowerCase()) ||
      feedback.message.toLowerCase().includes(search.toLowerCase());

    const feedbackDate =
      new Date(feedback.createdAt)
        .toISOString()
        .split("T")[0];

    const matchDate =
      date === "" || feedbackDate === date;

    return keyword && matchDate;

  });

};