import { useMemo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";

import Unanswered from "../../components/Unanswered";
import Answered from "../../components/Answered";

const CustomModal = () => {
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
  };

  return handleTemplate();
};

export default CustomModal;
