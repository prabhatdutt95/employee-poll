import NavHeader from "./NavHeader";
import { useSelector } from "react-redux";

const Home = () => {
  const loggedUser = useSelector((state) => state.authedUser);
  return (
    <>
      <NavHeader loggedUser={loggedUser} />
    </>
  );
};

export default Home;
