import React from 'react';

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

export default NumberButton;
