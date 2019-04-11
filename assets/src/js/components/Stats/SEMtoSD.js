import React from 'react';
import semToSD from './modules/stats_conversions';

export default class SemToSD extends React.Component {
  render() {
    return (
      <div>
        <button type="submit" onClick={semToSD}>SEM to SD</button>
      </div>
    );
  }
}
