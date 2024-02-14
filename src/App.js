// App.js
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PullSurveyApp from "./components/PullSurveyApp";
import PullSurveyResults from "./components/PullSurveyResults";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PullSurveyApp/>}/>
        <Route path="/PullSurveyResults" element={<PullSurveyResults/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
