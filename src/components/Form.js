import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import Rating from "./Rating";
import Button from "./Button";
import FeedbackContext from "../contexts/Context";

import "./Form.css";

const Form = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const { handleAdd, feedbackEdit, handleUpdate } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setRating(feedbackEdit.item.rating);
      setText(feedbackEdit.item.text);
      setDisabled(false);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    if (text === "") {
      setDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setDisabled(true);
      setMessage("Please input at least 10 characters.");
    } else {
      setDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      if (feedbackEdit.edit === true) {
        const updatedFeedback = {
          id: feedbackEdit.item.id,
          rating,
          text,
        };
        handleUpdate(updatedFeedback);
      } else {
        const newFeedback = {
          id: uuidv4(),
          rating,
          text,
        };
        handleAdd(newFeedback);
      }

      setDisabled(true);
      setRating(5);
      setText("");
    }
  };

  return (
    <div className="form">
      <h2>How would you rate your service with us?</h2>
      <Rating getRating={(rating) => setRating(rating)} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tell us something that keeps you coming back."
          value={text}
          onChange={handleChange}
        />
        <Button type="submit" disabled={disabled}>
          Send
        </Button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Form;
