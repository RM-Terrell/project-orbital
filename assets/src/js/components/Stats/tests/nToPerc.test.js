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
  test('has a submit button', () => {
    const wrapper = shallow(<NToPercent />);
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button').prop('type')).toEqual('submit');
  });
  test('has the 2 needed outputs', () => {
    const wrapper = shallow(<NToPercent />);
    expect(wrapper.find('output')).toHaveLength(2);
  });
  test('has the 2 needed inputs', () => {
    const wrapper = shallow(<NToPercent />);
    expect(wrapper.find('input')).toHaveLength(2);
  });
});
