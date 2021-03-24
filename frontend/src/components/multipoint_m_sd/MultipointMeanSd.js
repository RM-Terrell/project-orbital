import React from 'react';

import StatsRequests from '../../modules/StatsRequests';
import { serverErrorMessage } from '../../modules/messaging';

export default class MultipointMeanSD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multipointValues: '',
      meanResult: '',
      sdResult: '',
      errorMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLowerBoundChange = (event) => {
    this.setState({ multipointValues: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const statsRequests = new StatsRequests();
    const multipointValues = this.state.multipointValues;
    // regex to handle either space separated or comma separated values
    const regexSplit = /[ ,]+/;
    const body = await statsRequests.multipointConvert(multipointValues.split(regexSplit));

    if (!body) {
      const errorMessage = serverErrorMessage;
      // eslint-disable-next-line no-console
      console.error(errorMessage);
      this.setState({
        errorMessage: errorMessage,
      });
    } else {
      this.setState({
        meanResult: body.mean_result,
        sdResult: body.sd_result,
        errorMessage: '',
      });
    }
  }

  render() {
    return (
      <div id="multipoint-mean-sd-container" className="stats-component-container">
        <input placeholder="Values" required="True" value={this.state.multipointValues}
          onChange={this.handleLowerBoundChange} className="input-field"
        />
        <button className="convert-button" type="submit" onClick={this.handleSubmit}>Convert</button>
        <div className="output-field">
          Mean:
          <output>{this.state.meanResult}</output>
        </div>
        <div className="output-field">
          Standard Deviation:
          <output>{this.state.sdResult}</output>
        </div>
        <div className="conversion-error-message">{this.state.errorMessage}</div>
      </div>
    );
  }
}
