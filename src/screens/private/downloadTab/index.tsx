import React from "react";
import { Text } from "react-native";
import styled, { withTheme } from "styled-components/native";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import {
  icblueDots,
  icblueDownload,
  icyellowDots,
  icyellowDownoad,
} from "../../../assets";
import { FlatList, TouchableOpacity, View } from "react-native";

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

const DownloadTab = () => {
  const { modeState } = useTypedSelector((state) => state.mode);

  return (
    <MainWrapper>
      <FlatList
        data={data}
        renderItem={() => {
          return (
            <View style={{ height: 80 }}>
              <ItemWrapper>
                <VerticleWrapper>
                  <TitleWrapper>Track or Folder Name</TitleWrapper>
                  <TitleDecsWrapper>
                    Artist name or description
                  </TitleDecsWrapper>
                </VerticleWrapper>
                <Horizontal>
                  <TouchableOpacity>
                    <ImageWrapper
                      source={modeState ? icyellowDownoad : icblueDownload}
                    ></ImageWrapper>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <ImageWrapper1
                      source={modeState ? icyellowDots : icblueDots}
                    ></ImageWrapper1>
                  </TouchableOpacity>
                </Horizontal>
              </ItemWrapper>
              <Divider></Divider>
            </View>
          );
        }}
      ></FlatList>
    </MainWrapper>
  );
};

export default withTheme(DownloadTab);

const Horizontal = styled.View`
  flex-direction: row;
`;

const Divider = styled.View`
  height: 1px;
  top: 16px;
  background-color: ${({ theme }: any) => theme.colors.textGray};
`;

const VerticleWrapper = styled.View`
  width: 100%;
`;

const ImageWrapper1 = styled.Image`
  margin-top: -38px;
  margin-right: 15px;
`;

const ImageWrapper = styled.Image`
  margin-top: -40px;
  margin-right: 15px;
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
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: flex-end;
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
