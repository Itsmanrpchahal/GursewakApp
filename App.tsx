import { Appearance, LogBox, StatusBar, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { navigationTheme } from "./src/theme/theme";
import { useTypedSelector } from "./src/hooks/useTypedSelector";
import { Provider } from "react-redux";
import { store } from "./src/store";
import Routes from "./src/navigations/Routes";
import { useTheme } from "styled-components/native";
import GlobalFont from "react-native-global-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const AppWrapper = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <App />
      </Provider>
    </GestureHandlerRootView>
  );
};

const App = () => {
  const { modeState } = useTypedSelector((state) => state.mode);

  const mode = Appearance.getColorScheme();
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  <StatusBar
    barStyle="default"
    // dark-content, light-content and default
    hidden={false}
    //To hide statusBar
    backgroundColor="#FFFFFF"
    //Background color of statusBar only works for Android
    translucent={false}
    //allowing light, but not detailed shapes
    networkActivityIndicatorVisible={true}
  />;
  return (
    <ThemeProvider
      theme={modeState === true ? navigationTheme.dark : navigationTheme.light}
    >
      <Routes
        scheme={
          modeState === true ? navigationTheme.dark : navigationTheme.light
        }
      />
    </ThemeProvider>
  );
};

export default AppWrapper;
