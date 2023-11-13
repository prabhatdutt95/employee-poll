import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Answered = ({ author, question, loggedUser }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   Votes calculation
  const htmlTemplate = (option) => {
    const totalVotes =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    const optionLength = question[option].votes.length;
    const votes = (optionLength / totalVotes) * 100;
    const userSelection = question[option].votes.includes(loggedUser.value);
    return (
      <div className="card mt-2 w-75">
        {userSelection && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
            <img
              src="/assets/images/check.png"
              alt="check"
              style={{ width: 30 }}
            />
            <span className="visually-hidden">Your selection</span>
          </span>
        )}
        <div className="card-body">
          <h6 className="card-title">{question[option].text}</h6>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${votes}%` }}
            >
              {votes}%
            </div>
          </div>
        </div>
        <div className="card-footer">
          <h6 className="card-text text-center">
            {optionLength + " out of " + totalVotes + " votes"}
          </h6>
        </div>
      </div>
    );
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary w-50"
        onClick={handleShow}
      >
        Results
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
          {htmlTemplate("optionOne")}
          {htmlTemplate("optionTwo")}
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Back
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Answered;
