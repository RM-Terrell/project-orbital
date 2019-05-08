import React from 'react';
import { multipointMeanSD } from './modules/stats_conversions';

class MultipointInput extends React.Component {
  render() {
    return (
      <div>
        <input className="multipoint-input" />
      </div>
    );
  }
}

export default class MultipointMeanSD extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.inputs = Array.from(document.querySelectorAll('div#multipoint-input-wrapper input'));
    this.inputValues = this.inputs.map(input => input.value);
    const meanSDResultsObject = multipointMeanSD(this.inputValues);
    document.querySelector('output#multipoint-total-mean').value = meanSDResultsObject.totalMean;
    document.querySelector('output#multipoint-total-sd').value = meanSDResultsObject.totalSD;
  }

  render() {
    return (
      <div id="multipoint-mean-sd-container" className="stats-component-container">
        <button className="btn" type="submit" onClick={this.handleSubmit}>Multipoint Mean SD</button>
        <button className="btn" type="button">Add Input</button>
        <output id="multipoint-total-mean" />
        <output id="multipoint-total-sd" />
        <div id="multipoint-input-wrapper">
          <MultipointInput />
          <MultipointInput />
        </div>
      </div>
    );
  }
}
