import React from 'react';

import StatsRequests from '../../modules/StatsRequests';

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
      const errorMessage = 'No response returned by the server';
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
        <input required="True" placeholder="Given N Value" value={this.state.givenNInput}
          onChange={this.handleGivenNChange}
        />
        <input required="True" placeholder="Total N Value" value={this.state.totalNInput}
          onChange={this.handleTotalNChange}
        />
        <div title="Given N Percent">{this.state.givenNPercentOutput}</div>
        <div title="Other N Percent">{this.state.otherNPercentOutput}</div>
        <button className="btn" type="submit" onClick={this.handleSubmit}>Convert</button>
        <div>{this.state.errorMessage}</div>
      </div>
    );
  }
}
