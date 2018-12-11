import React from "react";
import PropTypes from "prop-types";

import HeaderPost from "../postHeader/index";
import "./style.css";

const nome = "jp";
const tempo = "20min";

const Post = props => (
  <post className="configPost">
    <HeaderPost nome={nome} tempo={tempo} />
    <hr />
    {props.childrem}
  </post>
);

Post.propTypes = {
  childrem: PropTypes.string.isRequired
};

export default Post;
