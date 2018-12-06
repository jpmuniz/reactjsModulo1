import React from "react";

import PropTypes from "prop-types";

const Index = props => (
  <index>
    {props.nome}
    {props.tempo}
    <img src />
  </index>
);

Index.propTypes = {
  nome: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired
};
