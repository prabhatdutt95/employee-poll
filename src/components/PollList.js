import Poll from "./Poll";

const PollList = ({ questionIdsList, questionList, currentTab }) => {
  // console.log("QuestionIds List", questionIdsList);
  return questionIdsList.map((questionId) => (
    <Poll
      key={questionId}
      question={questionList[questionId]}
      currentTab={currentTab}
    />
  ));
};

export default PollList;
