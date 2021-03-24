import React from 'react';

import StatsRequests from '../../modules/StatsRequests';
import { serverErrorMessage } from '../../modules/messaging';

export default class SemSD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outputValue: '',
      semValue: '',
      nValue: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNChange = (event) => {
    this.setState({ nValue: event.target.value });
  }

  handleSemChange = (event) => {
    this.setState({ semValue: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const statsRequests = new StatsRequests();
    const semValue = this.state.semValue;
    const nValue = this.state.nValue;
    let outputValue;
    const body = await statsRequests.semToSdConvert(semValue, nValue);

    if (!body) {
      const errorMessage = serverErrorMessage;
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
      <div id="sem-to-sd-container" className="stats-component-container">
        <input required="True" placeholder="N Value" value={this.state.nValue}
          onChange={this.handleNChange} className="input-field"
        />
        <input required="True" placeholder="SEM Value" value={this.state.semValue}
          onChange={this.handleSemChange} className="input-field"
        />
        <button className="convert-button" type="submit" onClick={this.handleSubmit}>Convert</button>
        <div title="SEM SD Output" className="output-field">
          Standard Deviation:
          <output>{this.state.outputValue}</output>
        </div>
      </div>
    );
  }
}
