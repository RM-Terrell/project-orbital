import React from 'react';
import { shallow } from 'enzyme';
import CiSd from './CiSd';

test('The CiSd component renders without error and has a button for submitting', () => {
  const wrapper = shallow(<CiSd />);
  expect(wrapper.find('button')).toHaveLength(1);
});