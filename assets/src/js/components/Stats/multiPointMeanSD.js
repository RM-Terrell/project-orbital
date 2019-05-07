import React from 'react';
import { multipointMeanSD } from './modules/stats_conversions';

class MultipointInput extends React.Component {
  render() {
    return (
      <div>
        <input type="number" className="multipoint-input" />
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
      <div id="multipoint-mean-sd-container">
        <button type="submit" onClick={this.handleSubmit}>Multipoint Mean SD</button>
        <button type="button">Add Input</button>
        Mean = <output type="number" id="multipoint-total-mean" />
        Standard Deviation = <output type="number" id="multipoint-total-sd" />
        <div id="multipoint-input-wrapper">
          <MultipointInput />
          <MultipointInput />
        </div>
      </div>
    );
  }
}
