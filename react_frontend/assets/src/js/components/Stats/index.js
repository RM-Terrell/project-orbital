import React, { Component } from 'react';
import CiToSD from './ciToSD';
import MultipointMeanSD from './multiPointMeanSD';
import NToPercent from './nToPercent';
import SemToSD from './SEMtoSD';

class Stats extends Component {
  render() {
    return (
      <div>
        <h2>Statistical Conversions</h2>
        <div id="stats-page-container">
          <div id="stats-tools-container">
            <CiToSD />
            <NToPercent />
            <SemToSD />
            <MultipointMeanSD />
          </div>
          <div id="stats-tooltips-container" />
        </div>
      </div>
    );
  }
}

export default Stats;
