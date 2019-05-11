import React from 'react';
import { semToSD } from './modules/stats_conversions';

export default class SemToSD extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.nValue = document.querySelector('input#n-value-sem-input').value;
    this.semValue = document.querySelector('input#sem-value-input').value;
    const result = semToSD(this.semValue, this.nValue);
    document.querySelector('output#sem-sd-result-output').value = result;
  }

  render() {
    return (
      <div id="sem-to-sd-container" className={`stats-component-container`}>
        <input required="True" placeholder="N Value" id="n-value-sem-input" />
        <input required="True" placeholder="SEM Value" id="sem-value-input" />
        <output id="sem-sd-result-output" />
        <button className="btn" type="submit" onClick={this.handleSubmit}>SEM to SD</button>
      </div>
    );
  }
}
