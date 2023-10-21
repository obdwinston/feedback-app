import { useState, useEffect, useContext } from "react";

import FeedbackContext from "../contexts/Context";

import "./Rating.css";

const Rating = ({ getRating }) => {
  const [rating, setRating] = useState(5);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setRating(+e.target.value);
    getRating(+e.target.value);
  };

  const radioButtons = [1, 2, 3, 4, 5];

  return (
    <ul className="rating">
      {radioButtons.map((value, index) => (
        <li key={`rating-${index}`}>
          <input
            id={index}
            type="radio"
            value={value}
            onChange={handleChange}
            checked={rating === value}
          />
          <label htmlFor={index}>{value}</label>
        </li>
      ))}
    </ul>
  );
};

export default Rating;
