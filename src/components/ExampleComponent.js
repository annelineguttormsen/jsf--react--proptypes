import React from 'react';
// import PropTypes
import PropTypes from 'prop-types';

export default function ExampleComponent(props) {
  // we want passing in the number to be optional, so we need to check if it was passed in
  let optionalNumber = "not passed in";
  // if numberToDisplay is undefined then it wasn't passed in
  if (typeof props.numberToDisplay !== "undefined") {
    optionalNumber = props.numberToDisplay;
  }

  return (
    <div className="ExampleComponent">
      <h2 className="examplecomponent__heading">{props.heading}</h2>
      <div className="examplecomponent__content">
        {props.children}
      </div>
      <div className="examplecomponent__number">an optional number: {optionalNumber}</div>
      <div className="examplecomponent__bool">Is this component amazing: {props.isAmazingComponent ? "Yes" : "No"}</div>
    </div>
  );
}

/*
  Setup prop type validation
*/
ExampleComponent.propTypes = {
  // validate child nodes are passed in
  children: PropTypes.node.isRequired,
  // heading must be a string and is required
  heading: PropTypes.string.isRequired,
  // numberToDisplay is optional so we havent used .isRequired
  numberToDisplay: PropTypes.number,
  // isAmazingComponent must be a bool and is required
  isAmazingComponent: PropTypes.bool.isRequired,
};