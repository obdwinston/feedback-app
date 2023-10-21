import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Card from "./Card";
import Spinner from "./Spinner";
import FeedbackContext from "../contexts/Context";

import "./List.css";

const List = () => {
  const { loading, feedback } = useContext(FeedbackContext);

  if (!loading && (!feedback || feedback.length === 0)) {
    return <h1 className="empty-list">No feedback yet.</h1>;
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card key={item.id} item={item} dark={false} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default List;
