import { useEffect } from "react";
import { connect, useSelector } from "react-redux";

// Action handler
import { handleInitialData } from "../actions/shared";

// Components
import UserPage from "./UserPage";
import Home from "./Home";

const authedUser = (state) => state.authedUser;

const App = (props) => {
  const loggedUser = useSelector(authedUser);
  console.log("Loggeduser", loggedUser);

  const handleInitData = () => {
    props.dispatch(handleInitialData());
  };

  const templateHandler = () => {
    if (loggedUser) {
      return <Home />;
    } else {
      return <UserPage user={props} />;
    }
  };

  useEffect(() => {
    handleInitData();
  }, []);

  return templateHandler();
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
