import React, { useState, Fragment } from "react";
import "./Review.css";
import axios from "axios";
import reviewService from "../../services/review.service";

const Review = () => {
  //validation
  const initialValues = {
    rating: "",
    feedback: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const alpha = /^[0-9]+$/;
    let errors = {};
    if (!values.rating) {
      errors.rating = "Rating is required";
    }
    if (!values.feedback) {
      errors.feedback = "Feedback is required";
    }
    const flag = alpha.test(values.name);
    if (flag == true) {
      errors.feedback = "Feedback cannot be just Numerical!";
    }
    return errors;
  };

  const addReview = async (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    let error = await validate(formValues);
    await setFormErrors(error);
    if (Object.keys(error).length == 0) {
      await reviewService
        .postUserReview(formValues)
        .then((data) => {
          setSuccess("Review added successfully !");
        })
        .catch((e) => {
          setError(`Opps, something went wrong :${e}`);
        });
    }
  };

  return (
    <div>
      <form className="place1" onSubmit={addReview}>
        <h3 className="pl">Like our app? Leave a feedback</h3>
        <fieldset className="rating" onChange={handleChange}>
          <input type="radio" id="star5" name="rating" value="5" />
          <label className="full" for="star5" title="Awesome - 5 stars"></label>
          <input type="radio" id="star4half" name="rating" value="4.5" />
          <label
            className="half"
            for="star4half"
            title="Pretty good - 4.5 stars"
          ></label>
          <input type="radio" id="star4" name="rating" value="4" />
          <label
            className="full"
            for="star4"
            title="Pretty good - 4 stars"
          ></label>
          <input type="radio" id="star3half" name="rating" value="3.5" />
          <label
            className="half"
            for="star3half"
            title="Meh - 3.5 stars"
          ></label>
          <input type="radio" id="star3" name="rating" value="3" />
          <label className="full" for="star3" title="Meh - 3 stars"></label>
          <input type="radio" id="star2half" name="rating" value="2.5" />
          <label
            className="half"
            for="star2half"
            title="Kinda bad - 2.5 stars"
          ></label>
          <input type="radio" id="star2" name="rating" value="2" />
          <label
            className="full"
            for="star2"
            title="Kinda bad - 2 stars"
          ></label>
          <input type="radio" id="star1half" name="rating" value="1.5" />
          <label
            className="half"
            for="star1half"
            title="Meh - 1.5 stars"
          ></label>
          <input type="radio" id="star1" name="rating" value="1" />
          <label
            className="full"
            for="star1"
            title="Sucks big time - 1 star"
          ></label>
          <input type="radio" id="starhalf" name="rating" value="0.5" />
          <label
            className="half"
            for="starhalf"
            title="Sucks big time - 0.5 stars"
          ></label>
          <p className="disError">{formErrors ? formErrors.rating : ""}</p>
        </fieldset>
        <div className="mb-3">
          <input
            id="msg"
            type="text"
            className="form-control-position validate[required,length[6,300]] feedback-input"
            name="feedback"
            placeholder="Feedback"
            value={formValues.feedback}
            onChange={handleChange}
          />
        </div>
        <p className="disError">{formErrors ? formErrors.feedback : ""}</p>
        <button type="submit" className="btn btn-primary" value="Submit">
          Submit
        </button>
        <div>{error != "" ? error : success}</div>
      </form>
    </div>
  );
};

export default Review;
