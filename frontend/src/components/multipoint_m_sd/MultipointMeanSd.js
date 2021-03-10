import React from 'react';

import StatsRequests from '../../modules/StatsRequests';

export default class MultipointMeanSD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multipointValue: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const statsRequests = new StatsRequests();
    const multipointValue = this.state.multipointValue;
    await statsRequests.semToSdConvert(multipointValue);

    // this.inputValues = document.querySelector('input#multipoint-input').value;
    // this.inputValues = this.inputValues.split(',');

    // document.querySelector('output#multipoint-total-mean').value = meanSDResultsObject.totalMean;
    // document.querySelector('output#multipoint-total-sd').value = meanSDResultsObject.totalSD;
  }

  render() {
    return (
      <div id="multipoint-mean-sd-container" className="stats-component-container">
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
