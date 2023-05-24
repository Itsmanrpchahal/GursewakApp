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
const BalUpdesh = ({ navigation }) => {
  return (
    <MainWrapper>
      <FlatList
        data={data}
        renderItem={() => {
          return (
            <View style={{ height: 80 }}>
              <ItemWrapper>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(navigationStrings.AKHAR);
                  }}
                >
                  <VerticleWrapper>
                    <TitleWrapper>Raag</TitleWrapper>
                    <TitleDecsWrapper>Description</TitleDecsWrapper>
                  </VerticleWrapper>
                </TouchableOpacity>
                <TouchableOpacity>
                  <ImageWrapper source={icDragMove}></ImageWrapper>
                </TouchableOpacity>
              </ItemWrapper>
              <Divider></Divider>
            </View>
          );
        }}
      ></FlatList>
    </MainWrapper>
  );
};

export default withTheme(BalUpdesh);

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
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 16px;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
