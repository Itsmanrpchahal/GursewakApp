import {Text} from 'react-native';
import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {navigationTheme} from './src/theme/theme';
import {useTypedSelector} from './src/hooks/useTypedSelector';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Routes from './src/navigations/Routes';
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const {modeState} = useTypedSelector(state => state.mode);

  return (
    <ThemeProvider
      theme={modeState === true ? navigationTheme.dark : navigationTheme.light}>
      <Routes
        scheme={
          modeState === true ? navigationTheme.dark : navigationTheme.light
        }
      />
    </ThemeProvider>
  );
};

export default AppWrapper;
