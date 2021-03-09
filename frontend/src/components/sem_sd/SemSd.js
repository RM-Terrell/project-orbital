import React from 'react';

import './sem_sd.css';
import StatsRequests from '../../modules/StatsRequests';

export default class SemSD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output_value: '',
    };

    // names of input fields for reuse
    this.nValue = 'n_value';
    this.semValue = 'sem_value';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const statsRequests = new StatsRequests();
    const semValue = this.state[`${this.semValue}`];
    const nValue = this.state[`${this.nValue}`];
    const body = await statsRequests.semToSdConvert(semValue, nValue);
    // todo error handling for no body returned
    let outputValue;
    if (!body) {
      const errorMessage = 'No response returned by the server';
      outputValue = errorMessage;
      console.error(errorMessage);
    } else {
      outputValue = body.sd_result;
    }
    this.setState({
      output_value: outputValue,
    });
  }

  render() {
    return (
      <div id="sem-to-sd-container" className="stats-component-container">
        <input required="True" placeholder="N Value" id="n-value-sem-input"
          value={this.state.value} onChange={this.handleChange} name={this.nValue}
        />
        <input required="True" placeholder="SEM Value" id="sem-value-input"
          value={this.state.value} onChange={this.handleChange} name={this.semValue}
        />
        <button className="btn" type="submit" onClick={this.handleSubmit}>SEM to SD</button>
        <div id="sd-output" title="SEM SD Output">{this.state.output_value}</div>
      </div>
    );
  }
}
