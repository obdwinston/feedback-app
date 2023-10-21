import { Link } from "react-router-dom";

import "./Icon.css";

const Icon = () => {
  return (
    <div className="icon">
      <Link to="/about">About this app</Link>
    </div>
  );
};

export default Icon;
