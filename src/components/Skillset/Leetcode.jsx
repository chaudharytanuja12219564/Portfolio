import React from "react";
import ReactMarkdown from 'react-markdown'
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">LeetCode</strong> Stat
      </h1>
      <ReactMarkdown>
      ![LeetCode Stats](https://leetcard.jacoblin.cool/tanujachaudhary821?theme=dark&font=Noto%20Sans%20Math)
      </ReactMarkdown>
    </Row>
  );
}

export default Leetcode;
