// Full Dom rendering
import React from 'react';
import { mount } from 'enzyme';
import EntryEMail from '@/components/EntryEMail';

it('EntryEMail', () => {
  const mockFunc = jest.fn();
  const wrapper = mount(<EntryEMail onClick={mockFunc} />);
  wrapper.find('button').simulate('click');
  expect(mockFunc).toHaveBeenCalled();
});
