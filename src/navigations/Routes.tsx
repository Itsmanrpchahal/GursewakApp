// @ts-ignore
import React, { useState } from "react";
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
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import {
  icFilter,
  icFullScreen,
  icNote,
  icOptions,
  icQuestionMark,
  icarrowCircle,
} from "../assets";
import searchScreen from "../screens/private/searchScreen";
import pakantiSeacrhType from "../screens/private/pakantiSeacrhType";
import downloadResource from "../screens/private/downloadResource";
import pothiSahibViewer from "../screens/private/pothiSahibViewer";
import pothiSahibSideMenu from "../screens/private/pothiSahibViewer/pothiSahibSideMenu";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import help from "../screens/private/help";
import reportMistake from "../screens/private/reportMistake";
import pothiSetting from "../screens/private/pothiSetting";
import addNotes from "../screens/private/addNotes";
import newNote from "../screens/private/newNote";
import reportMistakeSelectLine from "../screens/private/reportMistake/reportMistakeSelectLine";
import balUpdesh from "../screens/private/balUpdesh";
import pageTitle from "../screens/private/pageTitle";
import songs from "../screens/private/songs";
import mediaPlayer from "../screens/private/mediaPlayer";
import downloadTab from "../screens/private/downloadTab";
import resources from "../screens/private/resources";
import newReminder from "../screens/private/newReminder";

type RouteProps = {
  scheme: any;
};
const Stack = createNativeStackNavigator();

const data = [
  {
    title: "ਛੱਕਾ ੧",
  },
  {
    title: "ਛੱਕਾ ੨",
  },
  {
    title: "ਛੱਕਾ ੩",
  },
  {
    title: "ਛੱਕਾ ੪",
  },
  {
    title: "ਛੱਕਾ ੫",
  },
  {
    title: "ਛੱਕਾ ੬",
  },
  {
    title: "ਛੱਕਾ ੭",
  },
  {
    title: "ਛੱਕਾ ੮",
  },
  {
    title: "ਛੱਕਾ ੯",
  },
  {
    title: "ਛੱਕਾ ੧੦",
  },
  {
    title: "ਛੱਕਾ ੧੧",
  },
  {
    title: "ਛੱਕਾ ੧੨",
  },
  {
    title: "ਛੱਕਾ ੧੩",
  },
];

const menu = [
  {
    title: "Help",
  },
  {
    title: "Open Audio Playlist",
  },
  {
    title: "Download Audio",
  },
  {
    title: "Share Screenshot",
  },
  {
    title: "Share Text",
  },
  {
    title: "Report Mistake",
  },
];
const Routes: React.FC<RouteProps> = ({ scheme }) => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
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
            headerRight: (route: any) => {
              return (
                <TouchableOpacity onPress={() => {}}>
                  <Image source={icarrowCircle} />
                </TouchableOpacity>
              );
            },
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
          name={navigationStrings.POTHI_SIDE_MENU}
          component={pothiSahibSideMenu}
          options={{
            headerShown: false,
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
                  <TouchableOpacity onPress={() => {}}>
                    <ImageWrapper source={icFullScreen} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigationRef.current.navigate(
                        navigationStrings.POTHI_SETTING
                      );
                    }}
                  >
                    <ImageWrapper source={icFilter} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigationRef.current.navigate(
                        navigationStrings.ADD_NOTES
                      );
                    }}
                  >
                    <ImageWrapper source={icNote} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setVisible(!visible);
                    }}
                  >
                    <ImageWrapper style={{ marginTop: 6 }} source={icOptions} />
                    <Menu
                      style={{ backgroundColor: colors.primary, width: 260 }}
                      visible={visible}
                      onRequestClose={hideMenu}
                    >
                      <FlatList
                        data={menu}
                        renderItem={({ item, index }) => {
                          return (
                            <View>
                              {/* <MenuItem onPress={hideMenu}> */}
                              <TouchableOpacity
                                onPress={() => {
                                  if (item.title === "Help") {
                                    navigationRef.current.navigate(
                                      navigationStrings.HELP
                                    );
                                  } else if (item.title === "Report Mistake") {
                                    navigationRef.current.navigate(
                                      navigationStrings.REPORT_MISTAKE_LIST
                                    );
                                  } else if (
                                    item.title === "Open Audio Playlist"
                                  ) {
                                    navigationRef.current.navigate(
                                      navigationStrings.SONGS
                                    );
                                  } else if (item.title === "Download Audio") {
                                    navigationRef.current.navigate(
                                      navigationStrings.DOWNLOAD_AUDIOS
                                    );
                                  }
                                  setVisible(false);
                                }}
                              >
                                <MenuText style={{ color: colors.textWhite }}>
                                  {item.title}
                                </MenuText>
                              </TouchableOpacity>
                              {/* </MenuItem> */}
                              <MenuDivider />
                            </View>
                          );
                        }}
                      />
                    </Menu>
                  </TouchableOpacity>
                </HorizontalView>
              );
            },
          }}
        />

        <Stack.Screen
          name={navigationStrings.HELP}
          component={help}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.REPORT_MISTAKE}
          component={reportMistake}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.POTHI_SETTING}
          component={pothiSetting}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.ADD_NOTES}
          component={addNotes}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.NEW_NOTE}
          component={newNote}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.REPORT_MISTAKE_LIST}
          component={reportMistakeSelectLine}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.BAL_UPDESH}
          component={balUpdesh}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.PAGE_TITLE}
          component={pageTitle}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.SONGS}
          component={songs}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name={navigationStrings.NOW_PLAYING}
          component={mediaPlayer}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.DOWNLOAD_AUDIOS}
          component={downloadTab}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.RESOURCES}
          component={resources}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.NEW_REMINDER}
          component={newReminder}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;

const MenuText = styled.Text`
  padding: 16px;
`;

const DividerView = styled.View`
  height: 0.5px;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;

const ImageWrapper = styled.Image`
  margin: 4px;
`;

const HorizontalView = styled.View`
  flex-direction: row;
`;
