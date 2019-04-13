import React from 'react';
import { nToPercent } from './modules/stats_conversions';

export default class NToPercent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.givenN = document.querySelector('input#given-n-value').value;
    this.totalN = document.querySelector('input#total-n-value').value;
    const resultObject = nToPercent(this.givenN, this.totalN);
    document.querySelector('output#result-given-perc-value').value = resultObject.givenPerc;
    document.querySelector('output#result-other-perc-value').value = resultObject.otherPerc;
  }

  render() {
    return (
      <div>
        <input type="number" required="True" placeholder="Given N Value" id="given-n-value" />=
        <output type="number" id="result-given-perc-value" />
        <input type="number" required="True" placeholder="Total N Value" id="total-n-value" />=
        <output type="number" id="result-other-perc-value" />
        <button type="submit" onClick={this.handleSubmit}>N to Percent</button>
      </div>
    );
  }
}
