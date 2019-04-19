import React from 'react';
import { ciToSD } from './modules/stats_conversions';

export default class CiToSD extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={ciToSD}>CI Button</button>
      </div>
    );
  }
}
