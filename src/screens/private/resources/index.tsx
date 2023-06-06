import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import {
  icBack,
  icSearchYellow,
  icplusYellow,
  icshareYellow,
} from "../../../assets";
import KamaiyiTab from "../kamaiyiTab";
import ReminderTab from "../reminderTab";
import SomeTab from "../homeTab";
import DailyDoseTab from "../dailyDoseTab";
import NotesTab from "../notesTab";
import FavouriteTab from "../favouriteTab";
import navigationStrings from "../../../navigations/navigationStrings";

const data = [
  {
    title: "Home",
  },
  {
    title: "Daily Dose",
  },
  {
    title: "Notes",
  },
  {
    title: "Favourites",
  },
  {
    title: "Kamaiyi",
  },
  {
    title: "Reminders",
  },
];
const Resources = ({ navigation }) => {
  const { colors }: any = useTheme();
  const [tab, setTab] = useState("Home");
  const [i, setI] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      title: tab,
      headerRight: () => (
        <View style={{ marginRight: 10 }}>
          {tab === "Home" ? null : tab === "Daily Dose" ? (
            <HorizontalWrapper>
              <ImageWrapper source={icSearchYellow}></ImageWrapper>
            </HorizontalWrapper>
          ) : tab === "Notes" ? (
            <HorizontalWrapper>
              <ImageWrapper source={icplusYellow}></ImageWrapper>
              <ImageWrapper source={icSearchYellow}></ImageWrapper>
            </HorizontalWrapper>
          ) : tab === "Reminders" ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.NEW_REMINDER);
              }}
            >
              <ImageWrapper source={icplusYellow}></ImageWrapper>
            </TouchableOpacity>
          ) : tab === "Kamaiyi" ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.NEW_TRACKER);
              }}
            >
              <ImageWrapper source={icplusYellow}></ImageWrapper>
            </TouchableOpacity>
          ) : null}
        </View>
      ),
    });
  }, [tab]);
  return (
    <MainWrapper>
      <View
        style={{
          flexDirection: "row",
          display: "flex",
        }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
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
        </ScrollView>
      </View>

      {tab === "Home" ? (
        <SomeTab />
      ) : tab === "Daily Dose" ? (
        <DailyDoseTab />
      ) : tab === "Notes" ? (
        <NotesTab />
      ) : tab === "Favourites" ? (
        <FavouriteTab />
      ) : tab === "Kamaiyi" ? (
        <KamaiyiTab />
      ) : tab === "Reminders" ? (
        <ReminderTab />
      ) : null}
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

export default withTheme(Resources);

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
