// Shallow rendering
import React from 'react';
import { shallow } from 'enzyme';
import Button from '@/components/Button';

test('Button', () => {
  const text = 'Add';
  const wrapper = shallow(<Button>{text}</Button>);
  expect(wrapper.contains(text)).toEqual(true);
});
