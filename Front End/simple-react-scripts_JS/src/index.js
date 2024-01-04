
// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import {  Provider as ReduxProvider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// contexts
import { SettingsProvider } from './contexts/SettingsContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';
//
import App from './App';
import Store from './Redux/Store.';



// ----------------------------------------------------------------------

ReactDOM.render(

  <HelmetProvider>
    <SettingsProvider>
      <CollapseDrawerProvider>
        <BrowserRouter>

          <ReduxProvider store={Store}>
            <App />
          </ReduxProvider>


        </BrowserRouter>
      </CollapseDrawerProvider>
    </SettingsProvider>

  </HelmetProvider>


  ,
  document.getElementById('root')
);
