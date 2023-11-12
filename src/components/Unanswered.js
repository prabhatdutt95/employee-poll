import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveAnswerToQuestion } from "../actions/questions";

const Unanswered = ({ author, question }) => {
  const dispatch = useDispatch();
  const user = (state) => state.authedUser;
  const loggedUser = useSelector(user);
  const [option, setOption] = useState(null);
  const [show, setShow] = useState(false);

  const handleOption = (option) => {
    setOption(option);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    dispatch(saveAnswerToQuestion(loggedUser.value, question.id, option));
    setShow(false);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success w-50"
        onClick={handleShow}
      >
        Answer
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>{author.name} asks:</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Would You Rather ?</h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={question.id}
              id={question.id + "_1"}
              onClick={() => handleOption("optionOne")}
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
              onClick={() => handleOption("optionTwo")}
            />
            <label className="form-check-label" htmlFor={question.id + "_2"}>
              {question.optionTwo.text}
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSubmit}
            disabled={option === null}
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Unanswered;
