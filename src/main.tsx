/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import ReactDOM from 'react-dom';
import { registerSW } from 'virtual:pwa-register';
import { Provider } from 'react-redux';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import App from './App';
import { defaultTheme } from '@app/store/slices/themeSlice';
import { store } from '@app/store/store';
import '@app/config/config';
import './i18n';

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

const themes = {
  dark: `/themes/main-dark.css`,
  light: `/themes/main-light.css`,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeSwitcherProvider
        themeMap={themes}
        defaultTheme={defaultTheme}
        insertionPoint={document.getElementById('inject-styles-here')}
      >
        <App />
      </ThemeSwitcherProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
