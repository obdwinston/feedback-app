import { useState, useEffect, createContext } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const response = await fetch(`/feedback`); // proxy setup
    const data = await response.json();

    setFeedback(data);
    setLoading(false);
  };

  const handleAdd = async (item) => {
    if (window.confirm("Confirm submission?")) {
      const response = await fetch(`/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const data = await response.json();

      setFeedback([data, ...feedback]);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Confirm delete?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const handleUpdate = async (updatedItem) => {
    if (window.confirm("Confirm edit?")) {
      const response = await fetch(`/feedback/${updatedItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });
      const data = await response.json();

      setFeedback(
        feedback.map((item) =>
          item.id === updatedItem.id ? { ...item, ...data } : item
        )
        // spread operator will overwrite existing keys in order
      );
    }

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const handleEdit = (item) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        loading,
        feedback,
        feedbackEdit,
        handleDelete,
        handleAdd,
        handleEdit,
        handleUpdate,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
