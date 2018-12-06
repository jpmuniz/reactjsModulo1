import React from "react";
import PropTypes from "prop-types";

import HeaderPost from "../head/Index";
import "./style.css";

const Index = props => (
  <index>
    <hr />
    {props.childrem}
  </index>
);

Index.propTypes = {
  childrem: PropTypes.string.isRequired
};
