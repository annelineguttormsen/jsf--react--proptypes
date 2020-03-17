import React from 'react';

export default function Image(props) {
  return (
    <img className="Image" src={props.source} alt={props.alternativeText} />
  );
}
