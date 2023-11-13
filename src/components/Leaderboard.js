import { useSelector } from "react-redux";

const Leaderboard = () => {
  const users = (state) => state.users;
  const userList = useSelector(users);

  const sortedResults = Object.keys(userList)
    .map((user) => {
      return {
        ...userList[user],
        total:
          Object.keys(userList[user].answers).length +
          userList[user].questions.length,
      };
    })
    .sort((a, b) => b.total - a.total);
  console.log(sortedResults);

  return sortedResults.map((result) => (
    <div className="d-flex justify-content-center">
      <div className="card mt-2 w-50">
        <div className="card-header d-flex align-item-center">
          <img
            className="me-2"
            src={result.avatarURL}
            style={{ width: "5rem" }}
            alt={result.id}
          />
          <div className="d-flex flex-column justify-content-center m-3">
            <h5 className="mb-0">{result.name}</h5>
            <h6 className="text-muted">{result.id}</h6>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <h5>Answered: {Object.keys(result.answers).length}</h5>
              <h5>Asked: {result.questions.length}</h5>
            </div>
            <div className="col-6">
              <h3>
                Score: <span class="badge bg-success">{result.total}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Leaderboard;
