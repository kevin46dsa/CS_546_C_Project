import React, { useState, useEffect } from "react";
import "./Feedback.css";
import reviewService from "../../services/review.service";

const Feedback = () => {
  const [feedback, setfeedback] = useState("");
  const [rating, setrating]=useState("");
  useEffect(() => {
    reviewService.getUserReview().then((response) => {
      if(response){
        setfeedback(response.data.Review.feedback);
        setrating(response.data.Review.Rating);
      }
      else{
        setfeedback(undefined);
        setrating(0);
      } })
    }, []);
    
    

  return (
    <div className="feedback-div">
      <div >
        <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
          
          <h1
            className="font-cond-b fg-text-d lts-md"
            contenteditable="false">
            Customer Reviews
          </h1>
        </div>
        <div>
          <p>Rating: {rating} <br></br>
          Feedback: {feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
