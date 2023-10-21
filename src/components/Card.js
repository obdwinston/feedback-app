import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

import FeedbackContext from "../contexts/Context";

import "./Card.css";

const Card = ({ item, dark }) => {
  const { handleDelete, handleEdit } = useContext(FeedbackContext);

  return (
    <div className={`card ${dark && "dark"}`}>
      <div className="card-content">
        <div className="card-rating">Rating: {item.rating.toFixed(0)}</div>
        <div className="card-text">{item.text}</div>
      </div>
      <div className="card-buttons">
        <button className="delete" onClick={() => handleDelete(item.id)}>
          <FaTimes color="steelblue" size={15} />
        </button>
        <button className="edit" onClick={() => handleEdit(item)}>
          <FaEdit color="steelblue" size={15} />
        </button>
      </div>
    </div>
  );
};

export default Card;
