// @ts-ignore
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// @ts-ignore
import { navigationRef } from "@root/navigations/RootNavigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/private/MainScreen";
import SplashWithSearchBar from "../screens/private/splashWithSearchBar";
import navigationStrings from "./navigationStrings";
import Login from "../screens/public/login";
import styled, { useTheme } from "styled-components/native";
import SignUp from "../screens/public/signUp";
import SettingScreen from "../screens/private/settingScreen";
import AppUpdate from "../screens/private/appUpdate";
import Akhar from "../screens/private/Akhar";
import aboutApp from "../screens/private/aboutApp";
import { Image, TouchableOpacity } from "react-native";
import {
  icFilter,
  icFullScreen,
  icNote,
  icOptions,
  icQuestionMark,
} from "../assets";
import searchScreen from "../screens/private/searchScreen";
import pakantiSeacrhType from "../screens/private/pakantiSeacrhType";
import downloadResource from "../screens/private/downloadResource";
import pothiSahibViewer from "../screens/private/pothiSahibViewer";

type RouteProps = {
  scheme: any;
};
const Stack = createNativeStackNavigator();
const Routes: React.FC<RouteProps> = ({ scheme }) => {
  const { colors }: any = useTheme();
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <NavigationContainer ref={navigationRef} theme={scheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen
          name={navigationStrings.SPLASH_WITH_SEARCH}
          component={SplashWithSearchBar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={navigationStrings.LOGIN}
          component={Login}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.SIGN_UP}
          component={SignUp}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.SETTINGS}
          component={SettingScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.APP_UPDATE}
          component={AppUpdate}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.DOWNLOAD_RESOURCE}
          component={downloadResource}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.AKHAR}
          component={Akhar}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.SEARCH_SCREEN}
          component={searchScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
            headerRight: (route: any) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigationRef.current.navigate(navigationStrings.ABOUT_APP);
                  }}
                >
                  <Image source={icQuestionMark} />
                </TouchableOpacity>
              );
            },
          }}
        />

        <Stack.Screen
          name={navigationStrings.ABOUT_APP}
          component={aboutApp}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.PAKANTI_SEARCH}
          component={pakantiSeacrhType}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name={navigationStrings.POTHI_SHAIB_VIEW}
          component={pothiSahibViewer}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
            headerRight: (route: any) => {
              return (
                <HorizontalView>
                  <ImageWrapper source={icFullScreen} />
                  <ImageWrapper source={icFilter} />
                  <ImageWrapper source={icNote} />
                  <ImageWrapper style={{ marginTop: 6 }} source={icOptions} />
                </HorizontalView>
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;

const ImageWrapper = styled.Image`
  margin: 4px;
`;

const HorizontalView = styled.View`
  flex-direction: row;
`;
