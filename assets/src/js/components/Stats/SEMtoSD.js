import React from 'react';
import { semToSD } from './modules/stats_conversions';

export default class SemToSD extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.nValue = document.querySelector('input#n-value-input').value;
    this.semValue = document.querySelector('input#sem-value-input').value;
    const result = semToSD(this.semValue, this.nValue);
    document.querySelector('output#sd-result-output').value = result;
  }

  render() {
    return (
      <div>
        <input output="number" required="True" placeholder="N Value" id="n-value-input" />
        <input output="number" required="True" placeholder="SEM Value" id="sem-value-input" />=
        <output output="number" id="sd-result-output" />
        <button type="submit" onClick={this.handleSubmit}>SEM to SD</button>
      </div>
    );
  }
}
