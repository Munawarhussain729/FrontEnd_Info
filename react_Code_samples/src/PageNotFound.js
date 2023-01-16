import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh" }}
    >
      <h1>404 Page Not Found</h1>
      <Link to="/">
      <Button>Back To Home</Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
