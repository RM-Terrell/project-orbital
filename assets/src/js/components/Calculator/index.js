import React from 'react';
import NumberButton from './NumberButton';

const Calculator = () => {
  return (
    <div>
      <h1 className="title">Calculator Title</h1>
      <div className="calc-grid-wrapper">
        <NumberButton numberValue={1} />
        <NumberButton numberValue={2} />
        <NumberButton numberValue={3} />
        <NumberButton numberValue={4} />
        <NumberButton numberValue={5} />
        <NumberButton numberValue={6} />
        <NumberButton numberValue={7} />
        <NumberButton numberValue={8} />
        <NumberButton numberValue={9} />
        <NumberButton numberValue={0} />
      </div>
    </div>
  );
};

export default Calculator;
