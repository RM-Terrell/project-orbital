import React from 'react';
import PropTypes from 'prop-types';

class NumberButton extends React.Component {
  render() {
    return (
      <div>
        <button type="button" className="number-button-wrapper" id={`number-button-${this.props.numberValue}`}>
          {this.props.numberValue}
        </button>
      </div>
    );
  }
}

NumberButton.propTypes = {
  numberValue: PropTypes.number.isRequired,
};

export default NumberButton;
