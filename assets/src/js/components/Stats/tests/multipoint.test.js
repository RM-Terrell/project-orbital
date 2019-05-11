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
});
