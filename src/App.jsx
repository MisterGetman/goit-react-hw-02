import { useEffect, useState } from "react";

import "./App.css";

import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";

function App() {
  const [feedback, setFeedback] = useState(
    JSON.parse(window.localStorage.getItem("feedback")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  const updateFeedback = (feedbackType) => {
    if (feedbackType) {
      setFeedback({
        ...feedback,
        [feedbackType]: (feedback[feedbackType] += 1),
      });
    } else {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  useEffect(
    () => window.localStorage.setItem("feedback", JSON.stringify(feedback)),
    [feedback]
  );

  return (
    <>
      <Description />
      <Options totalFeedback={totalFeedback} updateFeedback={updateFeedback} />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
    </>
  );
}

export default App;
