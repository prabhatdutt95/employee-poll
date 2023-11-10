import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";

// Action handler
import { handleInitialData } from "../actions/shared";

// Components
import Nav from "./Nav";
import UserPage from "./UserPage";
import Home from "./Home";

const App = (props) => {
  // console.log("App", props);
  const handleInitData = () => {
    props.dispatch(handleInitialData());
  };
  useEffect(() => {
    handleInitData();
  }, []);

  return (
    <Fragment>
      {/* <LoadingBar /> */}
      <div className="container">
        {/* <Nav /> */}
        {/* {props.loading === true ? null : ( */}
        <Routes>
          <Route path="/" exact element={<UserPage user={props} />} />
          <Route path="/home" exact element={<Home />} />
          {/* <Route path="/tweet/:id" exact element={<TweetPage />} />
              <Route path="/new" exact element={<NewTweet />} /> */}
        </Routes>
        {/* )} */}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
