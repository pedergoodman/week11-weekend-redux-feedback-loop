import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// import Components
import CommentForm from "../CommentForm/CommentForm";
import FeelingForm from "../FeelingForm/FeelingForm";
import Submitted from "../Submitted/Submitted";
import Home from "../Home/Home";
import ReviewForm from "../ReviewForm/ReviewForm";
import SupportedForm from "../SupportedForm/SupportedForm";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";
import Header from "../Header/Header";
import Admin from "../Admin/Admin";

function App() {
  const dispatch = useDispatch();

  const refreshReviewList = () => {
    axios
      .get("/reviews")
      .then(result => {
        // send DB list in to save in store
        dispatch({
          type: "SET_REVIEW_LIST",
          payload: result.data,
        });
      })
      .catch(err => {
        console.log("Error GETing review data", err);
      });
  };

  useEffect(() => {
    refreshReviewList();
  }, []);

  return (
    <Router>
      {/* TEMP Nav bar to help facilitate  */}
      <nav>
        <ul id="temp-nav">
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/">Feeling</Link>
          </li>
          <li>
            <Link to="/understanding">Understanding</Link>
          </li>
          <li>
            <Link to="/supported">Supported</Link>
          </li>
          <li>
            <Link to="/comment">Comment</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
          <li>
            <Link to="/submitted">Submitted</Link>
          </li>
        </ul>
      </nav>

      <Header />
      
      <Route exact path="/">
        <FeelingForm />
      </Route>

      <Route exact path="/understanding">
        <UnderstandingForm />
      </Route>

      <Route exact path="/supported">
        <SupportedForm />
      </Route>

      <Route exact path="/comment">
        <CommentForm />
      </Route>

      <Route exact path="/review">
        <ReviewForm refreshReviewList={refreshReviewList} />
      </Route>

      <Route exact path="/submitted">
        <Submitted />
      </Route>

      <Route exact path="/admin">
        <Admin  refreshReviewList={refreshReviewList} />
      </Route>
    </Router>
  );
}

export default App;
