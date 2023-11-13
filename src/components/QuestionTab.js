import { useState } from "react";
import { useSelector } from "react-redux";
import PollList from "./PollList";

const QuestionTab = () => {
  const user = (state) => state.authedUser;
  const loggedUser = useSelector(user);

  const questionList = (state) => state.questions;
  const questions = useSelector(questionList);

  let sortedList = Object.entries(questions).sort(
    (a, b) => b[1].timestamp - a[1].timestamp
  );
  sortedList = Object.fromEntries(sortedList);

  const [currentTab, setCurrentTab] = useState(1);
  const handleTab = (selectedTab) => {
    setCurrentTab(selectedTab);
  };

  let unansweredQuestionIds = [];
  let answeredQuestionIds = [];
  Object.keys(sortedList).forEach((questionId) => {
    sortedList[questionId].optionOne.votes.includes(loggedUser.value) ||
    sortedList[questionId].optionTwo.votes.includes(loggedUser.value)
      ? answeredQuestionIds.push(questionId)
      : unansweredQuestionIds.push(questionId);
  });

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
                  currentTab={currentTab}
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
