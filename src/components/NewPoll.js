import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { saveNewQuestion } from "../actions/questions";

const NewPoll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = {
      optionOneText: option1,
      optionTwoText: option2,
    };

    dispatch(saveNewQuestion(question));

    setOption1("");
    setOption2("");

    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card mt-2 w-50">
        <div className="card-header d-flex align-item-center flex-column text-center">
          <h5>Create Your Own Poll</h5>
        </div>
        <div className="card-body">
          <h5>Would You Rather ?</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="option1" className="form-label">
                First Option
              </label>
              <input
                type="text"
                className="form-control"
                id="option1"
                placeholder="Enter Option One"
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="option2" className="form-label">
                Second Option
              </label>
              <input
                type="text"
                className="form-control"
                id="option2"
                placeholder="Enter Option Two"
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success w-25"
              disabled={option1 === "" || option2 === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPoll;
