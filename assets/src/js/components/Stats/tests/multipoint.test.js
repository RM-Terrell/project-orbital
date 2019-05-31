import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MultipointMeanSD from '../multiPointMeanSD';

Enzyme.configure({ adapter: new Adapter() });

describe('Multipoint SD component', () => {
  test('renders', () => {
    const wrapper = shallow(<MultipointMeanSD />);
    expect(wrapper.exists()).toBe(true);
  });
  test('has the 2 needed outputs', () => {
    const wrapper = shallow(<MultipointMeanSD />);
    expect(wrapper.find('output')).toHaveLength(2);
  });
  test('has the 1 needed input', () => {
    const wrapper = shallow(<MultipointMeanSD />);
    expect(wrapper.find('input')).toHaveLength(1);
  });
  test('has a submit button', () => {
    const wrapper = shallow(<MultipointMeanSD />);
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button').prop('type')).toEqual('submit');
  });
});
