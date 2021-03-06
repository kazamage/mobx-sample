import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from '@/App';
import CountStore from '@/stores/CountStore';
const stores = {
  count: new CountStore(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider {...stores}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
