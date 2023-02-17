import React from "react";
import { Button } from "react-bootstrap";

import report from "../assets/report.png";

const FilesAndDoc = () => {
  return (
    <div className="fileanddoc__container">
      <h4 style={{ margin: "50px 5px" }}>Files / Documents</h4>
      <Button variant="outline-dark">
        <img src={report} alt="report" /> Check Up Results.pdf
      </Button>
      <Button variant="outline-dark">
        <img src={report} alt="report" /> Check Up Results.pdf
      </Button>
      <Button variant="outline-dark">
        <img src={report} alt="report" /> Check Up Results.pdf
      </Button>
      <Button variant="outline-dark">
        <img src={report} alt="report" /> Check Up Results.pdf
      </Button>
    </div>
  );
};

export default FilesAndDoc;
