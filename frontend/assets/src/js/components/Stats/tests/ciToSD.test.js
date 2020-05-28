import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CiToSD from '../ciToSD';

Enzyme.configure({ adapter: new Adapter() });

describe('CI to SD component', () => {
  test('renders', () => {
    const wrapper = shallow(<CiToSD />);
    expect(wrapper.exists()).toBe(true);
  });
  test('has the 3 needed inputs and one selector for CI conversions', () => {
    const wrapper = shallow(<CiToSD />);
    expect(wrapper.find('input')).toHaveLength(3);
    expect(wrapper.find('select')).toHaveLength(1);
  });
  test('CI percent select has the 4 needed percent values', () => {
    const wrapper = shallow(<CiToSD />);
    expect(wrapper.find('select option')).toHaveLength(4);
  });
  test('has a output', () => {
    const wrapper = shallow(<CiToSD />);
    expect(wrapper.find('output').exists()).toBeTruthy();
  });
  test('has a submit button', () => {
    const wrapper = shallow(<CiToSD />);
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button').prop('type')).toEqual('submit');
  });
});
