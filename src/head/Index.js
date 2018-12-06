import React from "react";

import "./style.css";

const Index = props => (
  <index className="configStyleHeader">{props.childrem}</index>
);

Index.defaultProps = {
  childrem: "Lead noticioas"
};

export default Index;
