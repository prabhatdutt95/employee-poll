import NavHeader from "./NavHeader";
import { useSelector } from "react-redux";
import QuestionTab from "./QuestionTab";

const Home = () => {
  const loggedUser = useSelector((state) => state.authedUser);
  return (
    <>
      <NavHeader loggedUser={loggedUser} />
      <QuestionTab />
    </>
  );
};

export default Home;
