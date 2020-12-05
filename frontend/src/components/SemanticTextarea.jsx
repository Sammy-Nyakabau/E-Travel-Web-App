import React from "react";
import { Form, TextArea } from "semantic-ui-react";

const SemanticTextArea = ({ onChange, value }) => (
  <Form>
    <TextArea
      placeholder="Write a review..."
      onChange={onChange}
      value={value}
    />
  </Form>
);

export default SemanticTextArea;
