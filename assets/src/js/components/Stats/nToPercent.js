import React from 'react';
import nToPercent from './modules/stats_conversions';

export default class NToPercent extends React.Component {
  render() {
    return (
      <div>
        <button type="submit" onClick={nToPercent}>N to Percent</button>
      </div>
    );
  }
}
