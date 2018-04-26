import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/style.css';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
	</MuiThemeProvider>,
	document.getElementById('root')
);
registerServiceWorker();
