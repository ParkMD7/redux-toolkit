import "bulma/css/bulma.css"
import "./styles.css";

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';

import App from './App.tsx'
import { store } from './store/index.ts';

const rootEl = document.getElementById('root')!;
const root = createRoot(rootEl);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

