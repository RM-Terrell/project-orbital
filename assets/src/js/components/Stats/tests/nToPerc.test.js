import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NToPercent from '../nToPercent';

Enzyme.configure({ adapter: new Adapter() });

describe('N to Percent component', () => {
  test('renders', () => {
    const wrapper = shallow(<NToPercent />);
    expect(wrapper.exists()).toBe(true);
  });
});
