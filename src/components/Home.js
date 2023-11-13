import NavHeader from "./NavHeader";
import { useSelector } from "react-redux";
import QuestionTab from "./QuestionTab";

import { Routes, Route } from "react-router-dom";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import PollTemplate from "./PollTemplate";
import Loader from "./Loader";
import NotFoundPage from "./NotFoundPage";

const Home = () => {
  const loggedUser = useSelector((state) => state.authedUser);
  const loader = useSelector((state) => state.loadingBar);
  return (
    <>
      {loader.default === 1 && <Loader />}
      {loader.default === 0 && (
        <>
          <NavHeader loggedUser={loggedUser} />
          <Routes>
            <Route path="/" exact element={<QuestionTab />} />
            <Route path="/question/:id" exact element={<PollTemplate />} />
            <Route path="/leaderboard" exact element={<Leaderboard />} />
            <Route path="/new" exact element={<NewPoll />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default Home;
