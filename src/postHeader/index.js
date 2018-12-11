import React from "react";

import PropTypes from "prop-types";

import "./style.css";

const Index = props => (
  <index>
    <img src="" />
    <div>{props.nome}</div>
    <div>{props.tempo}</div>
  </index>
);

Index.propTypes = {
  nome: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired
};

export default Index;
