import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom"
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(


  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>


);

