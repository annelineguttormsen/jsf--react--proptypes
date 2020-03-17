import React from 'react';
import PropTypes from 'prop-types';

export default function Heading(props) {
  return (
    <h1 className="Heading">{props.text}</h1>
  );
}

/*
  Setup prop type validation
*/
Heading.propTypes = {
  text: PropTypes.string.isRequired,
};