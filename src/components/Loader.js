import React from "react";

const spinnerStyle = {
  border: "10px solid #f3f3f3" /* Light grey */,
  borderTop: "10px solid #3498db" /* Blue */,
  borderRadius: "50%",
  width: "150px",
  height: "150px",
  animation: "spin 2s linear infinite",
};

const globalStyle = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loader = () => (
  <div
    className="align-items-center d-flex justify-content-center"
    style={{ height: "100vh" }}
  >
    <style>{globalStyle}</style>
    <div style={spinnerStyle}></div>
  </div>
);

export default Loader;
