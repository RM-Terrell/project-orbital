import React from 'react';

export default class CiSD extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.upperBound = document.querySelector('input#upper-bound-input').value;
    this.lowerBound = document.querySelector('input#lower-bound-input').value;
    this.nValue = document.querySelector('input#n-value-ci-input').value;
    const ciPercElement = document.querySelector('select#ci-percent-input');
    this.ciPercent = ciPercElement.options[ciPercElement.selectedIndex].value;
    // TODO tie this into REST API, used to be a JS calculation
    const result = 42;
    if (Number.isFinite(result)) {
      document.querySelector('output#sd-ci-output').value = result;
      // TODO TEST THIS CLEARING BEHAVIOR
      document.querySelector('div#ci-to-sd-container div#ci-sd-error-messages').innerHTML = '';
    } else {
      document.querySelector('div#ci-to-sd-container div#ci-sd-error-messages').innerHTML = result;
    }
  }

  render() {
    return (
      <div id="ci-to-sd-container" className="stats-component-container">
        <input required="True" placeholder="Upper Bound" id="upper-bound-input" />
        <input required="True" placeholder="Lower Bound" id="lower-bound-input" />
        <input required="True" placeholder="N Value" id="n-value-ci-input" />
        <select required="True" id="ci-percent-input" defaultValue="95">
          <option value="90">90</option>
          <option value="95">95</option>
          <option value="98">98</option>
          <option value="99">99</option>
        </select>
        <output id="sd-ci-output" />
        <button className="btn" type="submit" onClick={this.handleSubmit}>CI Button</button>
        <div id="ci-sd-error-messages" className="stats-error-messages" />
      </div>
    );
  }
}
