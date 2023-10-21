import { useState, createContext } from "react";

import Data from "../database/Data";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(Data);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const handleDelete = (id) => {
    if (window.confirm("Confirm delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const handleAdd = (item) => {
    if (window.confirm("Confirm submission?")) {
      // setFeedback(feedback.concat(item));
      setFeedback([item, ...feedback]);
    }
  };

  const handleEdit = (item) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const handleUpdate = (updatedItem) => {
    if (window.confirm("Confirm edit?")) {
      setFeedback(
        feedback.map((item) =>
          item.id === updatedItem.id ? { ...item, ...updatedItem } : item
        )
        // spread operator will overwrite existing keys in order
      );
    }

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
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
