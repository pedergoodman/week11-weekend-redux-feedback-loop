import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// import Components
import CommentForm from "../CommentForm/CommentForm";
import FeelingForm from "../FeelingForm/FeelingForm";
import FormSubmitted from "../FormSubmitted/FormSubmitted";
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
        console.log(result.data);

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/feeling">Feeling</Link>
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
        <Home />
      </Route>

      <Route exact path="/feeling">
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
        <ReviewForm refreshReviewList={refreshReviewList}/>
      </Route>

      <Route exact path="/submitted">
        <FormSubmitted />
      </Route>

      <Route exact path="/admin">
        <Admin />
      </Route>
    </Router>
  );
}

export default App;
