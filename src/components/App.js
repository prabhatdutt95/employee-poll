import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// Action handler
import { handleInitialData } from "../actions/shared";

// Components
import UserPage from "./UserPage";
import Home from "./Home";

const App = (props) => {
  const dispatch = useDispatch();

  const authedUser = (state) => state.authedUser;
  const loggedUser = useSelector(authedUser);

  const handleInitData = useCallback(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const templateHandler = () => {
    if (loggedUser) {
      return <Home />;
    } else {
      return <UserPage user={props} />;
    }
  };

  useEffect(() => {
    handleInitData();
  }, [handleInitData]);

  return templateHandler();
};

export default App;
