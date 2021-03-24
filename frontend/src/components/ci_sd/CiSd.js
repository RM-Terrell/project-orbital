import React from 'react';

import StatsRequests from '../../modules/StatsRequests';
import CiPercent from './CiPercent';
import { serverErrorMessage } from '../../modules/messaging';

export default class CiSD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outputValue: '',
      lowerBound: '',
      upperBound: '',
      nValue: '',
      ciPercent: '95',
      errorMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLowerBoundChange = (event) => {
    this.setState({ lowerBound: event.target.value });
  }

  handleUpperBoundChange = (event) => {
    this.setState({ upperBound: event.target.value });
  }

  handleNValueChange = (event) => {
    this.setState({ nValue: event.target.value });
  }

  handleCiPercentChange = (event) => {
    this.setState({ ciPercent: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const statsRequests = new StatsRequests();
    const upperBound = this.state.upperBound;
    const lowerBound = this.state.lowerBound;
    const nValue = this.state.nValue;
    const ciPercent = this.state.ciPercent;

    const body = await statsRequests.ciToSdConvert(upperBound, lowerBound, nValue, ciPercent);

    if (!body) {
      const errorMessage = serverErrorMessage;
      // eslint-disable-next-line no-console
      console.error(errorMessage);
      this.setState({
        errorMessage: errorMessage,
      });
    } else {
      this.setState({
        outputValue: body.sd_result,
        errorMessage: body.error_message,
      });
    }
  }


  render() {
    return (
      <div id="ci-to-sd-container" className="stats-component-container">
        <input required="True" placeholder="Upper Bound" value={this.state.upperBound}
          onChange={this.handleUpperBoundChange} className="input-field"
        />
        <input required="True" placeholder="Lower Bound" value={this.state.lowerBound}
          onChange={this.handleLowerBoundChange} className="input-field"
        />
        <input required="True" placeholder="N Value" value={this.state.nValue}
          onChange={this.handleNValueChange} className="input-field"
        />
        <CiPercent handleChange={this.handleCiPercentChange} percentValue={this.state.ciPercent} />
        <button className="convert-button" type="submit" onClick={this.handleSubmit}>Convert</button>
        <div title="CI to SD Output" className="output-field">
          Standard Deviation:
          <output>{this.state.outputValue}</output>
        </div>
        <div className="conversion-error-message">{this.state.errorMessage}</div>
      </div>
    );
  }
}
