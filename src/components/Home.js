import NavHeader from "./NavHeader";
import { useSelector } from "react-redux";
import QuestionTab from "./QuestionTab";

import { Routes, Route } from "react-router-dom";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import Answered from "./Answered";

const Home = () => {
  const loggedUser = useSelector((state) => state.authedUser);
  return (
    <>
      <NavHeader loggedUser={loggedUser} />

      <Routes>
        <Route path="/" exact element={<QuestionTab />} />
        {/* <Route path="/question/:id" exact element={<Answered />} /> */}
        <Route path="/leaderboard" exact element={<Leaderboard />} />
        <Route path="/new" exact element={<NewPoll />} />
      </Routes>
    </>
  );
};

export default Home;
