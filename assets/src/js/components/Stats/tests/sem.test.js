import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SemToSD from '../SEMtoSD';

Enzyme.configure({ adapter: new Adapter() });

describe('SEM to SD component', () => {
  test('renders', () => {
    const wrapper = shallow(<SemToSD />);
    expect(wrapper.exists()).toBe(true);
  });
  test('has a submit button', () => {
    const wrapper = shallow(<SemToSD />);
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button').prop('type')).toEqual('submit');
  });
  test('has the 1 needed output', () => {
    const wrapper = shallow(<SemToSD />);
    expect(wrapper.find('output')).toHaveLength(2);
  });
  test('has the 2 needed inputs', () => {
    const wrapper = shallow(<SemToSD />);
    expect(wrapper.find('input')).toHaveLength(2);
  });
});
