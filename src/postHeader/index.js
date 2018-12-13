import React from "react";

import PropTypes from "prop-types";

import "./style.css";

const Index = props => (
  <index>
    <img src={props.avatar} />
    <div className="display-div">
      {props.nome}
      <br />
      {props.tempo}
    </div>
  </index>
);

Index.propTypes = {
  nome: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default Index;
