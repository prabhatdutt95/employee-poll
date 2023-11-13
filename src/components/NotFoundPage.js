import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Not Found!</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>You can always go back to the homepage.</p>
      <button className="btn btn-primary w-25" onClick={navigateToHome}>
        Back
      </button>
    </div>
  );
};

export default NotFoundPage;
