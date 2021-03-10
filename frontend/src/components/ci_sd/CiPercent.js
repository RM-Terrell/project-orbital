import React from 'react';
import PropTypes from 'prop-types';

export default function CiPercent(props) {
  return (
    <>
      <select required="True" title="CI Percent Selector" onChange={props.handleChange}
        value={props.percentValue}
      >
        <option value="90">90</option>
        <option value="95">95</option>
        <option value="98">98</option>
        <option value="99">99</option>
      </select>
    </>
  );
}

CiPercent.propTypes = {
  percentValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
