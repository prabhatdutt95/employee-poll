import Poll from "./Poll";

const PollList = ({ questionIdsList, questionList }) => {
  console.log("QuestionIds List", questionIdsList);
  return questionIdsList.map((questionId) => (
    <Poll question={questionList[questionId]} />
  ));
};

export default PollList;
