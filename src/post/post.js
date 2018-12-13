import React from "react";
import PropTypes from "prop-types";

import HeaderPost from "../postHeader/index";
import "./style.css";

const Post = props => (
  <post className="configPost">
    <HeaderPost
      nome={props.data.nome}
      tempo={props.data.tempo}
      avatar={props.data.avatar}
    />
    <hr />
    {props.data.msg}
  </post>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    tempo: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired
  })
};

export default Post;
