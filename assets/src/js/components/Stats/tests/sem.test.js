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
});
