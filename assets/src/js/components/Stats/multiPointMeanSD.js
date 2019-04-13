import React from 'react';
import { multipointMeanSD } from './modules/stats_conversions';

export default class MultipointMeanSD extends React.Component {
  render() {
    return (
      <div>
        <button type="submit" onClick={multipointMeanSD}>Multipoint Mean SD</button>
      </div>
    );
  }
}
