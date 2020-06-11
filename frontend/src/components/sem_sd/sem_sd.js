import React from 'react';

export default class SemSD extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.nValue = document.querySelector('input#n-value-sem-input').value;
    this.semValue = document.querySelector('input#sem-value-input').value;
    // TODO tie this into REST API, used to be a JS calculation
    const result = 42;
    document.querySelector('output#sem-sd-output').value = result;
  }

  render() {
    return (
      <div id="sem-to-sd-container" className="stats-component-container">
        <input required="True" placeholder="N Value" id="n-value-sem-input" />
        <input required="True" placeholder="SEM Value" id="sem-value-input" />
        <output id="sem-sd-output" />
        <button className="btn" type="submit" onClick={this.handleSubmit}>SEM to SD</button>
      </div>
    );
  }
}
