import Poll from "./Poll";

const PollList = ({ questionIdsList, questionList, currentTab }) => {
  if (questionIdsList.length === 0) {
    if (currentTab === 1) {
      return (
        <p className="mt-3 text-center">
          All the questions have been answered!
        </p>
      );
    }
    if (currentTab === 2) {
      return <p className="mt-3 text-center">No questions answered yet!</p>;
    }
  }
  return questionIdsList.map((questionId) => (
    <Poll
      key={questionId}
      question={questionList[questionId]}
      currentTab={currentTab}
    />
  ));
};

export default PollList;
