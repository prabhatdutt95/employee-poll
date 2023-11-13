import { useSelector } from "react-redux";
import { formatDate } from "../utils/helpers";
import Unanswered from "./Unanswered";
import Answered from "./Answered";

const Poll = ({ question, currentTab }) => {
  const users = (state) => state.users;
  const userList = useSelector(users);

  const user = (state) => state.authedUser;
  const loggedUser = useSelector(user);

  const author = userList[question.author];

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

          {currentTab === 1 && (
            <Unanswered
              author={author}
              question={question}
              loggedUser={loggedUser}
            />
          )}

          {currentTab === 2 && (
            <Answered
              author={author}
              question={question}
              loggedUser={loggedUser}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Poll;