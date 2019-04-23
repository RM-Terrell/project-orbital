import React from 'react';
import { ciToSD } from './modules/stats_conversions';

export default class CiToSD extends React.Component {
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
    let result;

    try {
      result = ciToSD(this.upperBound, this.lowerBound, this.nValue, this.ciPercent);
    } catch (error) {
      document.querySelector('div#ciToSdWrapper div.errorMessages').innerHTML = error.message;
    }
    document.querySelector('output#sd-ci-output').value = result;
  }

  render() {
    return (
      <div id="ciToSdWrapper">
        <input type="number" required="True" placeholder="Upper Bound" id="upper-bound-input" />
        <input type="number" required="True" placeholder="Lower Bound" id="lower-bound-input" />
        <input type="number" required="True" placeholder="N Value" id="n-value-ci-input" />
        <select type="number" required="True" id="ci-percent-input" defaultValue={'95'}>
          <option value="90">90</option>
          <option value="95">95</option>
          <option value="98">98</option>
          <option value="99">99</option>
        </select>
        <output type="number" id="sd-ci-output" />
        <button type="submit" onClick={this.handleSubmit}>CI Button</button>
        <div className="errorMessages" />
      </div>
    );
  }
}
