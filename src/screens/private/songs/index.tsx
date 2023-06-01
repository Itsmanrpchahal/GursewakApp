import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import styled, { withTheme } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import { useTheme } from "styled-components";
import {
  icBack,
  icSearchYellow,
  icplusYellow,
  icshareYellow,
} from "../../../assets";
import { Platform } from "react-native";
import SongsTab from "../songsTab";
import AlbumTab from "../albumTab";
import MyPlaylistTab from "../myPlaylistTab";
import DownloadTab from "../downloadTab";
import VideoTab from "../videoTab";
import MusicComponent from "../../../component/musicComponent";
import navigationStrings from "../../../navigations/navigationStrings";
import { SafeAreaView } from "react-navigation";
import DeviceInfo from "react-native-device-info";

const data = [
  {
    title: "Songs",
  },
  {
    title: "Albums",
  },
  {
    title: "My Playlists",
  },
  {
    title: "Download",
  },
  {
    title: "Video",
  },
];
const Tab = createMaterialTopTabNavigator();
const SongsScreen = ({ navigation }) => {
  const { colors }: any = useTheme();
  const [tab, setTab] = useState("Songs");

  const [i, setI] = useState(0);

  useEffect(() => {}, []);
  return (
    <MainWrapper>
      <SafeAreaView
        style={{ backgroundColor: colors.secondary }}
      ></SafeAreaView>
      <HeaderWrapper>
        <View style={{ flexDirection: "row" }}>
          <HorizontalWrapper1 marginTop={Platform.OS === "android" ? -5 : 16}>
            <HorizontalWrapper>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <ImageWrapper source={icBack}></ImageWrapper>
              </TouchableOpacity>
              <TitleWrapper>{tab}</TitleWrapper>
            </HorizontalWrapper>
            {tab === "Songs" ? (
              <HorizontalWrapper>
                <ImageWrapper source={icshareYellow}></ImageWrapper>
                <ImageWrapper source={icSearchYellow}></ImageWrapper>
              </HorizontalWrapper>
            ) : tab === "Albums" || tab === "Video" || tab === "Download" ? (
              <HorizontalWrapper>
                <ImageWrapper source={icSearchYellow}></ImageWrapper>
              </HorizontalWrapper>
            ) : tab === "My Playlists" ? (
              <HorizontalWrapper>
                <ImageWrapper source={icplusYellow}></ImageWrapper>
                <ImageWrapper source={icSearchYellow}></ImageWrapper>
              </HorizontalWrapper>
            ) : null}
          </HorizontalWrapper1>
        </View>
      </HeaderWrapper>

      <View
        style={{
          flexDirection: "row",
          display: "flex",
          marginTop: Platform.OS === "android" ? -15 : -5,
        }}
      >
        {data.map((item, index) => {
          return (
            <View style={{ backgroundColor: colors.pankantiBC }}>
              <TouchableOpacity
                onPress={() => {
                  setTab(item.title);
                  setI(index);
                }}
              >
                <View
                  style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}
                >
                  <TextWrapper>{item.title}</TextWrapper>
                  {i === index ? <Divider></Divider> : null}
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      {tab === "Songs" ? (
        <SongsTab />
      ) : tab === "Albums" ? (
        <AlbumTab />
      ) : tab === "My Playlists" ? (
        <MyPlaylistTab />
      ) : tab === "Download" ? (
        <DownloadTab />
      ) : (
        <VideoTab />
      )}
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate(navigationStrings.NOW_PLAYING);
        }}
      >
        <MusicComponent></MusicComponent>
      </TouchableOpacity> */}
    </MainWrapper>
  );
};

export default withTheme(SongsScreen);

type heightProps = {
  height: string;
  marginTop: string;
};
const Divider = styled.View`
  height: 1px;
  margin-top: 5px;
  background-color: ${({ theme }: any) => theme.colors.blueYellow};
`;

const TextWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.blueYellow};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardDate};
`;

const HorizontalWrapper1 = styled.View<heightProps>`
  flex-direction: row;
  width: 98%;
  margin-top: ${({ marginTop }: any) => marginTop}px;
  align-items: center;
  justify-content: space-between;
`;

const HorizontalWrapper = styled.View`
  flex-direction: row;
`;

const TitleWrapper = styled.Text`
  margin-left: 16px;
  color: ${({ theme }: any) => theme.colors.textWhite};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle};
`;

const ImageWrapper = styled.Image`
  margin-left: 16px;
  top: 2px;
`;

const HeaderWrapper = styled.View`
  height: 70px;
  flex-direction: row;
  background-color: ${({ theme }: any) => theme.colors.secondary};
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
