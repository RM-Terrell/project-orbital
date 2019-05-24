import React from 'react';
import { multipointMeanSD } from './modules/stats_conversions';


export default class MultipointMeanSD extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.inputValues = document.querySelector('input#multipoint-input').value;
    this.inputValues = this.inputValues.split(',');
    const meanSDResultsObject = multipointMeanSD(this.inputValues);
    document.querySelector('output#multipoint-total-mean').value = meanSDResultsObject.totalMean;
    document.querySelector('output#multipoint-total-sd').value = meanSDResultsObject.totalSD;
  }

  render() {
    return (
      <div id="multipoint-mean-sd-container" className={`stats-component-container`}>
        <button className="btn" type="submit" onClick={this.handleSubmit}>
          Multipoint Mean SD
        </button>
        <output id="multipoint-total-mean" />
        <output id="multipoint-total-sd" />
        <input id="multipoint-input" placeholder="Values" />
      </div>
    );
  }
}
