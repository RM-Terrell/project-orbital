import React from 'react';
import ciToSD from './modules/stats_conversions';

export default class CiToSD extends React.Component {
  render() {
    return (
      <div>
        <button type="submit" onClick={ciToSD}>CI Button</button>
      </div>
    );
  }
}
