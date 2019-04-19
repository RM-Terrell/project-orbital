import React from 'react';
import { multipointMeanSD } from './modules/stats_conversions';

export default class MultipointMeanSD extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={multipointMeanSD}>Multipoint Mean SD</button>
      </div>
    );
  }
}
