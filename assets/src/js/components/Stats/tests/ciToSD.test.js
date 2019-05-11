import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CiToSD from '../ciToSD';

Enzyme.configure({ adapter: new Adapter() });

describe('CI to SD component', () => {
  test('renders', () => {
    const wrapper = shallow(<CiToSD />);
    expect(wrapper.exists()).toBe(true);
  });
});
