import { useContext } from "react";

import FeedbackContext from "../contexts/Context";

import "./Stats.css";

const Stats = () => {
  const { feedback } = useContext(FeedbackContext);

  let average = (
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length
  ).toFixed(1);

  return (
    <div className="stats">
      <h2>
        {feedback.length} {feedback.length > 1 ? "reviews" : "review"}
      </h2>
      <h2>Average rating: {isNaN(average) ? 0 : average}</h2>
    </div>
  );
};

export default Stats;
