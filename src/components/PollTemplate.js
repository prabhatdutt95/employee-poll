import { useMemo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";

import Unanswered from "./Unanswered";
import Answered from "./Answered";
import NotFoundPage from "./NotFoundPage";

const PollTemplate = () => {
  // Fetching data from store
  const userData = useSelector(
    (state) => ({
      authedUser: state.authedUser,
      tabs: state.tabs,
      users: state.users,
      questions: state.questions,
    }),
    shallowEqual
  );

  // Memoize the userData object
  const memoizedUserData = useMemo(() => userData, [userData]);
  const { authedUser, users, questions, tabs } = memoizedUserData;

  // Getting ID from route Params
  const { id } = useParams();

  const currentQuestion = questions[id];

  const handleTemplate = () => {
    if (currentQuestion) {
      if (tabs.selectedTab === 1) {
        return (
          <Unanswered
            author={users[currentQuestion.author]}
            question={currentQuestion}
            loggedUser={authedUser}
          />
        );
      } else {
        return (
          <Answered
            author={users[currentQuestion.author]}
            question={currentQuestion}
            loggedUser={authedUser}
          />
        );
      }
    } else {
      return <NotFoundPage />;
    }
  };

  return handleTemplate();
};

export default PollTemplate;
