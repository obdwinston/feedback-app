import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Stats from "./components/Stats";
import Form from "./components/Form";
import List from "./components/List";
import Icon from "./components/Icon";
import About from "./pages/About";
import { FeedbackProvider } from "./contexts/Context";

import "./App.css";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Form />
                  <Stats />
                  <List />
                  <Icon />
                </>
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
