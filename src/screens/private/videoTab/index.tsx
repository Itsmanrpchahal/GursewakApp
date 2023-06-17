import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import {
  icWhiteBC,
  icblueDots,
  icblueDownload,
  icyellowDots,
  icyellowDownoad,
} from "../../../assets";

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

const VideoTab = () => {
  const { modeState } = useTypedSelector((state) => state.mode);

  return (
    <MainWrapper>
      <FlatList
        data={data}
        renderItem={() => {
          return (
            <View style={{ marginTop: 15 }}>
              <ItemWrapper>
                <HorizontalWrapper>
                  <Horizontal>
                    <ImageWrapper source={icWhiteBC}></ImageWrapper>
                    <VerticleWrapper>
                      <TitleWrapper>Track Name</TitleWrapper>
                      <TitleDecsWrapper>Description</TitleDecsWrapper>
                      <TImeWrapper>00:00:00</TImeWrapper>
                    </VerticleWrapper>
                  </Horizontal>
                  <TouchableOpacity>
                    <ImageWrapper1
                      source={modeState ? icyellowDots : icblueDots}
                    ></ImageWrapper1>
                  </TouchableOpacity>
                </HorizontalWrapper>
              </ItemWrapper>
              <Divider></Divider>
            </View>
          );
        }}
      ></FlatList>
    </MainWrapper>
  );
};

export default withTheme(VideoTab);

const HorizontalWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const TImeWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.blueYellow};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardDate};
  margin-top: 15px;
`;

const Horizontal = styled.View`
  flex-direction: row;
`;

const Divider = styled.View`
  height: 1px;
  top: 16px;
  background-color: ${({ theme }: any) => theme.colors.textGray};
`;

const VerticleWrapper = styled.View`
  align-items: flex-start;
  top: -4px;
  left: 10px;
`;

const ImageWrapper1 = styled.Image`
  margin-top: 5px;
`;

const ImageWrapper = styled.Image`
  border-radius: 10px;
  background-color: "white";
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
  flex-direction:row
  space-between:space-between;
  padding-left: 10px;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: flex-end;
  width:100%;
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
