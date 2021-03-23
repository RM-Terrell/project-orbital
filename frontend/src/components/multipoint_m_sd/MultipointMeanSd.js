import React from 'react';

import StatsRequests from '../../modules/StatsRequests';

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
    const body = await statsRequests.multipointConvert(multipointValues.split(','));

    if (!body) {
      const errorMessage = 'No response returned by the server';
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
          onChange={this.handleLowerBoundChange}
        />
        <button className="btn" type="submit" onClick={this.handleSubmit}>Convert</button>
        <div>{this.state.meanResult}</div>
        <div>{this.state.sdResult}</div>
        <div>{this.state.errorMessage}</div>
      </div>
    );
  }
}
