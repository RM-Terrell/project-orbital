import React from 'react';
import { multipointMeanSD } from './modules/stats_conversions';

/* Multipoint is not inside of a stats-component-container (a grid) because when dynamically
adding input fields, the outer grid from stats-component-container will stretch in length and
resize the button and output elements vertically which is undesirable. Thus three separate
grids are used with no wrapping grid. */

class MultipointInput extends React.Component {
  render() {
    return (
      <div className="multipoint-input-container">
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
    this.inputs = Array.from(document.querySelectorAll('div#multipoint-inputs-container input'));
    this.inputValues = this.inputs.map(input => input.value);
    const meanSDResultsObject = multipointMeanSD(this.inputValues);
    document.querySelector('output#multipoint-total-mean').value = meanSDResultsObject.totalMean;
    document.querySelector('output#multipoint-total-sd').value = meanSDResultsObject.totalSD;
  }

  render() {
    return (
      <div id="multipoint-mean-sd-container">
        <div id="multipoint-buttons-container">
          <button className="btn" type="submit" onClick={this.handleSubmit}>Multipoint Mean SD</button>
          <button className="btn" type="button" id="add-multipoint-input">Add Input</button>
          <button className="btn" type="button" id="delete-multipoint-input">Delete Input</button>
        </div>
        <div id="multipoint-outputs-container">
          <output id="multipoint-total-mean" />
          <output id="multipoint-total-sd" />
        </div>
        <div id="multipoint-inputs-container">
          <MultipointInput />
          <MultipointInput />
          <MultipointInput />
        </div>
      </div>
    );
  }
}
