import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { icDragMove, icblueDots, icyellowDots } from "../../../assets";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import { useIsFocused } from "@react-navigation/native";
import navigationStrings from "../../../navigations/navigationStrings";
import { navigationRef } from "../../../navigations/RootNavigations";
const data = [
  {
    title: "Hello",
  },
  {
    title: "Hello",
  },
  {
    title: "Hello",
  },
  {
    title: "Hello",
  },
  {
    title: "Hello",
  },
  {
    title: "Hello",
  },
  {
    title: "Hello",
  },
  {
    title: "Hello",
  },
];
const NotesTab = ({ navigation }) => {
  const { modeState } = useTypedSelector((state) => state.mode);

  return (
    <MainWrapper>
      <FlatList
        data={data}
        renderItem={() => {
          return (
            <View style={{ height: 80 }}>
              <TouchableOpacity
                onPress={() => {
                  navigationRef.current.navigate(navigationStrings.NOTES);
                }}
              >
                <ItemWrapper>
                  <VerticleWrapper>
                    <TitleWrapper>Folder Name</TitleWrapper>
                    <TitleDecsWrapper>Date Created</TitleDecsWrapper>
                  </VerticleWrapper>
                  <TouchableOpacity>
                    <ImageWrapper
                      source={modeState ? icyellowDots : icblueDots}
                    ></ImageWrapper>
                  </TouchableOpacity>
                </ItemWrapper>
              </TouchableOpacity>

              <Divider></Divider>
            </View>
          );
        }}
      ></FlatList>
    </MainWrapper>
  );
};

export default withTheme(NotesTab);

const Divider = styled.View`
  height: 1px;
  top: 16px;
  background-color: ${({ theme }: any) => theme.colors.textGray};
`;

const VerticleWrapper = styled.View`
  width: 100%;
`;

const ImageWrapper = styled.Image`
  margin-top: -45px;
`;

const TitleDecsWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.text};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle};
  margin-top: 5px;
`;

const TitleWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.blueYellow};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle};
`;

const ItemWrapper = styled.View`
  justify-content: space-between;
  padding-left: 10px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  align-items: flex-end;
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
