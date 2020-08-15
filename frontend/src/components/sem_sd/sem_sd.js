import React from 'react';

import './sem_sd.css';

export default class SemSD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // names of input fields for reuse
    this.nValue = 'n_value';
    this.semValue = 'semValue';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch('http://127.0.0.1:8000/rest_api/sem_to_sd/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sem: this.state[`${this.semValue}`],
          n_value: this.state[`${this.nValue}`],
        }),
      });
      const body = await res.json();
      this.setState({
        output_value: body.sd_result,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
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
        <output id="sd-output">{this.state.output_value}</output>
      </div>
    );
  }
}
