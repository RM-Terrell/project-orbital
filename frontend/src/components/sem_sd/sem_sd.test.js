import React from 'react';
import { shallow } from 'enzyme';
import SemSD from './sem_sd';

test('The SemSD component renders without error and has a button for submitting', () => {
  const wrapper = shallow(<SemSD />);
  expect(wrapper.find('button')).toHaveLength(1);
});

// todo finish
// test('The SemSD submit button is clickable', () => {
//   const mockCallBack = jest.fn();
//   const wrapper = shallow(<SemSD />);
//   wrapper.find('button').simulate('click');
//   expect(mockCallBack.mock.calls.length).toEqual(1);
// });
