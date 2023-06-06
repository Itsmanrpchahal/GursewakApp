import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import styled, { withTheme } from "styled-components/native";
import { icDragMove } from "../../../assets";
import navigationStrings from "../../../navigations/navigationStrings";

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
const PothiSahib = ({ navigation }) => {
  return (
    <MainWrapper>
      <FlatList
        data={data}
        renderItem={() => {
          return (
            <View style={{ height: 80 }}>
              <TouchableOpacity
                style={{ width: "95%" }}
                onPress={() => {
                  navigation.navigate(navigationStrings.POTHI_SAHIBS_1);
                }}
              >
                <ItemWrapper>
                  <VerticleWrapper>
                    <TitleWrapper>Pothi Sahibs</TitleWrapper>
                    <TitleDecsWrapper>Description</TitleDecsWrapper>
                  </VerticleWrapper>
                  <TouchableOpacity>
                    <ImageWrapper source={icDragMove}></ImageWrapper>
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

export default withTheme(PothiSahib);

const Divider = styled.View`
  height: 1px;
  margin-right: -10px;
  margin-left: -10px;
  top: 16px;
  background-color: ${({ theme }: any) => theme.colors.textGray};
`;

const VerticleWrapper = styled.View`
  width: 100%;
`;

const ImageWrapper = styled.Image`
  height: 14px;
  width: 14px;
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
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 8px;
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
