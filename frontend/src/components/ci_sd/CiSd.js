import React from 'react';

import StatsRequests from '../../modules/StatsRequests';
import CiPercent from './CiPercent';

export default class CiSD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outputValue: '',
      lowerBound: '',
      upperBound: '',
      nValue: '',
      ciPercent: '95',

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
    let outputValue;

    const body = await statsRequests.ciToSdConvert(upperBound, lowerBound, nValue, ciPercent);

    if (!body) {
      const errorMessage = 'No response returned by the server';
      outputValue = errorMessage;
      // eslint-disable-next-line no-console
      console.error(errorMessage);
    } else {
      outputValue = body.sd_result;
    }
    this.setState({
      outputValue: outputValue,
    });
  }


  render() {
    return (
      <div id="ci-to-sd-container" className="stats-component-container">
        <input required="True" placeholder="Upper Bound" value={this.state.upperBound}
          onChange={this.handleUpperBoundChange}
        />
        <input required="True" placeholder="Lower Bound" value={this.state.lowerBound}
          onChange={this.handleLowerBoundChange}
        />
        <input required="True" placeholder="N Value" value={this.state.nValue}
          onChange={this.handleNValueChange}
        />
        <CiPercent handleChange={this.handleCiPercentChange} percentValue={this.state.ciPercent} />
        <button className="btn" type="submit" onClick={this.handleSubmit}>Convert</button>
        <div title="CI to SD Output">{this.state.outputValue}</div>
      </div>
    );
  }
}
