// @ts-ignore
import React, { useEffect, useState } from "react";
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
import {
  Appearance,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  icEditYellow,
  icFilter,
  icFullScreen,
  icNote,
  icOptionYellow,
  icOptions,
  icQuestionMark,
  icThreeDots,
  icarrowCircle,
  icdeleteYellow,
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
import folderView from "../screens/private/folderView";
import { Dropdown } from "react-native-element-dropdown";
import noteDetail from "../screens/private/noteDetail";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import { useActions } from "@root/hooks/useActions";
import newTracker from "../screens/private/newTracker";
import path from "../screens/private/path";
import pothiSahib from "../screens/private/pothiSahib";
import pothiSahibProgress from "../screens/private/pothiSahibProgress";
import sehajPathList from "../screens/private/sehajPathList";
import pathList from "../screens/private/pathList";
import sundarGutka from "../screens/private/sundarGutka";
import favouriteTab from "../screens/private/favouriteTab";
type RouteProps = {
  scheme: any;
};
const Stack = createNativeStackNavigator();
const dropdown = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];
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
  const [visible1, setVisible1] = useState(false);
  const [visibleTracker, setVisibleTracker] = useState(false);

  const [visibleNote, setVisibleNote] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const hideMenu = () => setVisible(false);
  const hideMenuNote = () => setVisibleNote(false);
  const hideMenuTracker = () => setVisibleTracker(false);

  const hideMenu1 = () => setVisible1(false);

  const showMenu = () => setVisible(true);
  const { colors }: any = useTheme();
  const mode = Appearance.getColorScheme();
  const [value, setValue] = useState(null);
  const { modeState } = useTypedSelector((state) => state.mode);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
  }, []);
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
                    // navigationRef.current.navigate(navigationStrings.ABOUT_APP);
                    setVisible1(!visible1);
                  }}
                >
                  <Image source={icQuestionMark} />
                  <Menu
                    style={{
                      backgroundColor: colors.yellow,
                      width: 260,
                      height: 180,
                    }}
                    visible={visible1}
                    onRequestClose={hideMenu1}
                  >
                    <MenuWrapper
                      style={{ backgroundColor: colors.yellow, height: 180 }}
                    >
                      <TitleWrapper style={{ color: colors.secondary }}>
                        Topic Heading
                      </TitleWrapper>
                      <NoteText
                        style={{
                          color: colors.secondary,
                          marginTop: 10,
                          fontSize: 12,
                        }}
                      >
                        This is where the body text can go, in this style. You
                        can also add images, diagrams, animations or whatever
                        else you need to elaborate
                      </NoteText>

                      <NoteText
                        style={{
                          color: colors.secondary,
                          marginTop: 10,
                          fontSize: 12,
                        }}
                      >
                        Here is some secondary text style that you may want to
                        use as examples, etc.
                      </NoteText>
                    </MenuWrapper>
                  </Menu>
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
            headerShown: show,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
            headerRight: (route: any) => {
              return (
                <HorizontalView>
                  <TouchableOpacity
                    onPress={() => {
                      setShow(!show);
                    }}
                  >
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
            headerShown: true,
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
          name={navigationStrings.NEW_TRACKER}
          component={newTracker}
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
            headerShown: true,
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
            headerRight: (route: any) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setVisibleTracker(!visibleTracker);
                  }}
                >
                  <Image source={icThreeDots} />
                  <View style={{ flexDirection: "row" }}>
                    <Menu
                      style={{
                        backgroundColor: modeState
                          ? colors.darkBlue
                          : colors.gray,
                        width: 260,
                      }}
                      visible={visibleTracker}
                      onRequestClose={hideMenuTracker}
                    >
                      <MenuWrapper1
                        backgroundColor={modeState ? "#0D1C39" : "#EDEDED"}
                      >
                        <NoteText>Share</NoteText>
                        <DividerNoteView
                          backgroundColor={
                            modeState ? colors.textWhite : "#17428E"
                          }
                        ></DividerNoteView>
                        <NoteText>Delete</NoteText>
                        <DividerNoteView
                          backgroundColor={
                            modeState ? colors.textWhite : "#17428E"
                          }
                        ></DividerNoteView>
                        <NoteText>Archive</NoteText>
                      </MenuWrapper1>
                    </Menu>
                  </View>
                </TouchableOpacity>
              );
            },
          }}
        />

        <Stack.Screen
          name={navigationStrings.NOTES}
          component={folderView}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
            headerRight: (route: any) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setVisible(!visible);
                  }}
                >
                  <Image source={icFilter} />
                  <Menu
                    style={{ backgroundColor: colors.primary, width: 260 }}
                    visible={visible}
                    onRequestClose={hideMenu}
                  >
                    <MenuWrapper>
                      <TitleWrapper>View Mode</TitleWrapper>
                      <DropdownWrapper>
                        <Dropdown
                          data={dropdown}
                          search={false}
                          maxHeight={300}
                          activeColor={colors.primary}
                          containerStyle={{
                            backgroundColor:
                              mode === "light" ? "white" : "gray",
                          }}
                          labelField="label"
                          valueField="value"
                          placeholderStyle={{ color: "black" }}
                          selectedTextStyle={{ color: "black" }}
                          placeholder={!isFocus ? "Select item" : "..."}
                          value={value}
                          onFocus={() => setIsFocus(true)}
                          onBlur={() => setIsFocus(false)}
                          onChange={(item) => {
                            setValue(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </DropdownWrapper>
                    </MenuWrapper>

                    <MenuWrapper style={{ marginTop: -15 }}>
                      <TitleWrapper>Sort By</TitleWrapper>
                      <DropdownWrapper>
                        <Dropdown
                          data={dropdown}
                          search={false}
                          maxHeight={300}
                          activeColor={colors.primary}
                          containerStyle={{
                            backgroundColor:
                              mode === "light" ? "white" : "gray",
                          }}
                          labelField="label"
                          valueField="value"
                          placeholderStyle={{ color: "black" }}
                          selectedTextStyle={{ color: "black" }}
                          placeholder={!isFocus ? "Select item" : "..."}
                          value={value}
                          onFocus={() => setIsFocus(true)}
                          onBlur={() => setIsFocus(false)}
                          onChange={(item) => {
                            setValue(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </DropdownWrapper>
                    </MenuWrapper>
                  </Menu>
                </TouchableOpacity>
              );
            },
          }}
        />

        <Stack.Screen
          name={navigationStrings.NOTE_DETAIL}
          component={noteDetail}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
            headerRight: (route: any) => {
              return (
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity onPress={() => {}}>
                    <ImageWrapper source={icEditYellow} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setVisibleNote(!visibleNote);
                    }}
                  >
                    <ImageWrapper source={icOptionYellow} />
                    <Menu
                      style={{
                        backgroundColor: modeState
                          ? colors.darkBlue
                          : colors.gray,
                        width: 260,
                      }}
                      visible={visibleNote}
                      onRequestClose={hideMenuNote}
                    >
                      <MenuWrapper1
                        backgroundColor={modeState ? "#0D1C39" : "#EDEDED"}
                      >
                        <NoteText>Share</NoteText>
                        <DividerNoteView
                          backgroundColor={
                            modeState ? colors.textWhite : "#17428E"
                          }
                        ></DividerNoteView>
                        <NoteText>Copy</NoteText>
                        <DividerNoteView
                          backgroundColor={
                            modeState ? colors.textWhite : "#17428E"
                          }
                        ></DividerNoteView>
                        <NoteText>Download Note</NoteText>
                      </MenuWrapper1>
                    </Menu>
                  </TouchableOpacity>
                </View>
              );
            },
          }}
        />
        <Stack.Screen
          name={navigationStrings.PATH}
          component={path}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.POTHIS_SAHIBS}
          component={pothiSahib}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name={navigationStrings.POTHI_SAHIBS_1}
          component={pothiSahibProgress}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name={navigationStrings.SEHAJ_PATH}
          component={sehajPathList}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name={navigationStrings.PATH_LIST}
          component={pathList}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name={navigationStrings.SUNDAR_GUTKA}
          component={sundarGutka}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name={navigationStrings.FAVOURITE}
          component={favouriteTab}
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

type Props = {
  backgroundColor: string;
};

const DividerNoteView = styled.View<Props>`
  height: 1px;
  opacity: 0.2;
  margin-top:10px
  margin-bottom:10px;
  margin-right:-14px
  margin-left:-14px
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const DropdownWrapper = styled.View`
  height: 40px;
  margin-top: 10px;
  border-width: 0.5px;
  border-radius: 22px;
  background-color: white;
  padding-left: 5px;
  padding-top: 3px;
  padding-right: 5px;
  opacity: 0.5;
`;

const NoteText = styled.Text`
  color: ${({ theme }: any) => theme.colors.blueYellow};
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
`;

const TitleWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.yellow};
`;

const MenuText = styled.Text`
  padding: 16px;
`;

const MenuWrapper1 = styled.View<Props>`
  padding: 16px;
  border-radius:10px
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const MenuWrapper = styled.View`
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.secondary};
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
