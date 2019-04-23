import React, { Component } from 'react';
import CiToSD from './ciToSD';
import MultipointMeanSD from './multiPointMeanSD';
import NToPercent from './nToPercent';
import SemToSD from './SEMtoSD';

class Stats extends Component {
  render() {
    return (
      <div>
        <h1>Stats</h1>
        <div id="stats-page-wrapper">
          Filler content for stats page
          <CiToSD />
          <MultipointMeanSD />
          <NToPercent />
          <SemToSD />
        </div>
      </div>
    );
  }
}

export default Stats;
