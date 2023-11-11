import { useSelector } from "react-redux";
import { formatDate } from "../utils/helpers";

const Poll = ({ question }) => {
  const users = (state) => state.users;
  const userList = useSelector(users);

  const author = userList[question.author];
  console.log("Recieved Question", question);

  return (
    <div className="d-flex justify-content-center">
      <div className="card mt-2 w-100">
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
        <div className="card-body text-center">
          <h5>Would You Rather ?</h5>
          <p className="mb-0">{question.optionOne.text}</p>
          <p>or ...</p>
          {/* <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={question.id}
              id={question.id + "_1"}
              disabled
            />
            <label className="form-check-label" for={question.id + "_1"}>
              {question.optionOne.text}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={question.id}
              id={question.id + "_2"}
              disabled
            />
            <label className="form-check-label" for={question.id + "_2"}>
              {question.optionTwo.text}
            </label>
          </div> */}
          <button type="button" className="btn btn-outline-success w-50">
            Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poll;
