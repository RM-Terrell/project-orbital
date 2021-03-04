import React from 'react';
import { shallow } from 'enzyme';
import Navbar from 'react-bootstrap/Navbar';
import App from './app';

it('renders', () => {
  shallow(<App />);
});

it('renders a Navbar', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Navbar)).toHaveLength(1);
});
