import React from 'react';

import StatsRequests from '../../modules/StatsRequests';
import { serverErrorMessage } from '../../modules/messaging';

export default class NToPercent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      givenNPercentOutput: '',
      otherNPercentOutput: '',
      givenNInput: '',
      totalNInput: '',
      errorMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGivenNChange = (event) => {
    this.setState({ givenNInput: event.target.value });
  }

  handleTotalNChange = (event) => {
    this.setState({ totalNInput: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const statsRequests = new StatsRequests();
    const givenN = this.state.givenNInput;
    const totalN = this.state.totalNInput;
    const body = await statsRequests.nPercentConvert(givenN, totalN);

    if (!body) {
      const errorMessage = serverErrorMessage;
      // eslint-disable-next-line no-console
      console.error(errorMessage);
      this.setState({
        errorMessage: errorMessage,
      });
    } else {
      this.setState({
        givenNPercentOutput: body.given_percent,
        otherNPercentOutput: body.other_percent,
        errorMessage: body.error_message,
      });
    }
  }

  render() {
    return (
      <div id="n-to-percent-container" className="stats-component-container">
        <input required="True" placeholder="Given N Value" className="input-field"
          value={this.state.givenNInput}
          onChange={this.handleGivenNChange}
        />
        <input required="True" placeholder="Total N Value" className="input-field"
          value={this.state.totalNInput}
          onChange={this.handleTotalNChange}
        />
        <button className="convert-button" type="submit" onClick={this.handleSubmit}>Convert</button>
        <div title="Given N Percent" className="output-field">
          Given N Percent:
          <output>{this.state.givenNPercentOutput}</output>
        </div>
        <div title="Other N Percent" className="output-field">
          Other N Percent:
          <output>{this.state.otherNPercentOutput}</output>
        </div>
        <div className="conversion-error-message">{this.state.errorMessage}</div>
      </div>
    );
  }
}
