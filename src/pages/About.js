import { Link } from "react-router-dom";

import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        Feedback application with basic front-end CRUD operations.
      </div>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default About;
