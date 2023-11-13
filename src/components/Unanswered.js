import { useState } from "react";
import { useDispatch } from "react-redux";
import { formatDate } from "../utils/helpers";
import { saveAnswerToQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const Unanswered = ({ author, question, loggedUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [option, setOption] = useState(null);
  const navigateToHome = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    dispatch(saveAnswerToQuestion(loggedUser.id, question.id, option));
    navigateToHome();
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card mt-2 w-50">
        <div className="card-header d-flex align-item-center">
          <img
            className="me-2"
            src={author.avatarURL}
            style={{ width: "5rem" }}
            alt={author.id}
          />
          <div className="d-flex flex-column justify-content-center">
            <h5>{author.name} asks:</h5>
            <span className="text-muted">{formatDate(question.timestamp)}</span>
          </div>
        </div>
        <div className="card-body">
          <h5>Would You Rather ?</h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={question.id}
              id={question.id + "_1"}
              onClick={() => setOption("optionOne")}
            />
            <label className="form-check-label" htmlFor={question.id + "_1"}>
              {question.optionOne.text}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={question.id}
              id={question.id + "_2"}
              onClick={() => setOption("optionTwo")}
            />
            <label className="form-check-label" htmlFor={question.id + "_2"}>
              {question.optionTwo.text}
            </label>
          </div>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => navigateToHome()}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleSubmit()}
            disabled={option === null}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unanswered;
