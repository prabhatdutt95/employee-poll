import { formatDate } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const Answered = ({ author, question, loggedUser }) => {
  const navigate = useNavigate();

  //   Votes calculation
  const htmlTemplate = (option) => {
    const totalVotes =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    const optionLength = question[option].votes.length;
    const votes = Math.round((optionLength / totalVotes) * 100);
    const userSelection = question[option].votes.includes(loggedUser.id);
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

  const navigateToHome = () => {
    navigate("/");
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
          {htmlTemplate("optionOne")}
          {htmlTemplate("optionTwo")}
        </div>
        <div className="card-footer">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => navigateToHome()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Answered;
