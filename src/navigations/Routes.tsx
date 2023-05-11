// @ts-ignore
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// @ts-ignore
import {navigationRef} from '@root/navigations/RootNavigations';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/private/MainScreen';
import SplashWithSearchBar from '../screens/private/splashWithSearchBar';
import navigationStrings from './navigationStrings';
import Login from '../screens/public/login';
import {useTheme} from 'styled-components';
import SignUp from '../screens/public/signUp';
import SettingScreen from '../screens/private/settingScreen';
import AppUpdate from "../screens/private/appUpdate";
import DownloadResource from "../screens/downloadResource";

type RouteProps = {
  scheme: any;
};
const Stack = createNativeStackNavigator();
const Routes: React.FC<RouteProps> = ({scheme}) => {
  const {colors}: any = useTheme();
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <NavigationContainer ref={navigationRef} theme={scheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.SPLASH_WITH_SEARCH}
          component={SplashWithSearchBar}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={navigationStrings.LOGIN}
          component={Login}
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: colors.secondary},
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name={navigationStrings.SIGN_UP}
          component={SignUp}
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: colors.secondary},
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name={navigationStrings.SETTINGS}
          component={SettingScreen}
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: colors.secondary},
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name={navigationStrings.APP_UPDATE}
          component={AppUpdate}
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: colors.secondary},
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name={navigationStrings.DOWNLOAD_RESOURCE}
          component={DownloadResource}
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: colors.secondary},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
