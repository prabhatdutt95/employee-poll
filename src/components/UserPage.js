import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";

import { setAuthedUser } from "../actions/authedUser";

// Custom Component
import CustomSelect from "../custom-component/custom-select/CustomSelect";

const userList = (state) => state.users;

const UserPage = () => {
  const dispatch = useDispatch();

  const [loggedUser, setLoggedUser] = useState(null);

  const users = useSelector(userList);
  const userOptions = Object.keys(users).map((userId) => users[userId]);

  const handleSelect = (user) => {
    setLoggedUser(user);
  };

  const navigateToHome = () => {
    dispatch(setAuthedUser(loggedUser));
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Card className="text-center" style={{ width: "40rem" }}>
        <Card.Header>
          <span>Welcome to</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>Would you Rather</Card.Title>
          <div className="d-flex justify-content-center">
            <div className="w-50">
              {userOptions && userOptions.length > 0 && (
                <CustomSelect options={userOptions} onSelect={handleSelect} />
              )}
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="mt-2">
            <button
              type="button"
              className="btn btn-success me-1 w-50"
              disabled={loggedUser === null}
              onClick={navigateToHome}
            >
              Login
            </button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default UserPage;
