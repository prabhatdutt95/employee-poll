import { useState } from "react";
import { useSelector } from "react-redux";
import PollList from "./PollList";

const QuestionTab = () => {
  const user = (state) => state.authedUser;
  const loggedUser = useSelector(user);

  const questionList = (state) => state.questions;
  const questions = useSelector(questionList);

  const [currentTab, setCurrentTab] = useState(2);
  const handleTab = (selectedTab) => {
    // console.log("Current tab", e, currentTab);
    setCurrentTab(selectedTab);
  };

  let unansweredQuestionIds = [];
  let answeredQuestionIds = [];
  Object.keys(questions).forEach((questionId) => {
    questions[questionId].optionOne.votes.includes(loggedUser.value) ||
    questions[questionId].optionTwo.votes.includes(loggedUser.value)
      ? answeredQuestionIds.push(questionId)
      : unansweredQuestionIds.push(questionId);
  });
  // console.log("Unanswered", unansweredQuestionIds);
  // console.log("answeredQuestionIds", answeredQuestionIds);

  return (
    <div className="container pt-5">
      <div className="d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-12" style={{ width: "550px" }}>
            <div className="card">
              <div className="card-body">
                <ul className="nav justify-content-center nav-tabs">
                  <li className="nav-item" onClick={() => handleTab(1)}>
                    <div
                      className={`nav-link cursor-pointer ${
                        currentTab === 1 ? "active" : ""
                      }`}
                    >
                      Unanswered
                    </div>
                  </li>
                  <li className="nav-item" onClick={() => handleTab(2)}>
                    <div
                      className={`nav-link cursor-pointer ${
                        currentTab === 2 ? "active" : ""
                      }`}
                    >
                      Answered
                    </div>
                  </li>
                </ul>
                <PollList
                  questionIdsList={
                    currentTab === 1
                      ? unansweredQuestionIds
                      : answeredQuestionIds
                  }
                  questionList={questions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionTab;
