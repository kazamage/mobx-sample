// Static rendering
import React from 'react';
import { Provider } from 'mobx-react';
import { render } from 'enzyme';
import Counter from './Counter';
import CountStore from '../stores/CountStore';
const stores = {
  count: new CountStore(),
};

test('Count', () => {
  const wrapper = render(<Provider {...stores}><Counter /></Provider>);
  expect(wrapper.find('button').length).toBe(3);
});
