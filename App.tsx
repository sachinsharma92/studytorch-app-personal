/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { useColorScheme } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import {
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import { StyleConstants } from './src/styles/style-constants';
import { Provider as StoreProvider } from 'react-redux';
import reduxStore from './src/redux/store';
const { store, persistor } = reduxStore;

import { PersistGate } from 'redux-persist/integration/react';
import MainSwitchNavigator from './src/navigators/MainSwitchNavigator';


const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: StyleConstants.COLOR_PRIMARY,
    accent: StyleConstants.COLOR_ACCENT,
    background: StyleConstants.COLOR_BACKGROUND,
    surface: StyleConstants.COLOR_SURFACE,
    text: StyleConstants.COLOR_TEXT,
    disabled: StyleConstants.COLOR_TEXT_DISABLED,
    placeholder: StyleConstants.COLOR_TEXT_PLACEHOLDER,
    error: StyleConstants.COLOR_ERROR,
  },
};





const App = () => {

  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <MainSwitchNavigator />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
