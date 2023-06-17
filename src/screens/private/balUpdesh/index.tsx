import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import styled, { withTheme } from "styled-components/native";
import { icDragMove } from "../../../assets";
import navigationStrings from "../../../navigations/navigationStrings";
import DraggableFlatList from "react-native-draggable-flatlist";

const data = [
  {
    id: "1",
    title: "Hello",
  },
  {
    id: "2",
    title: "Hello",
  },
  {
    id: "3",
    title: "Hello",
  },
  {
    id: "4",
    title: "Hello",
  },
  {
    id: "5",
    title: "Hello",
  },
  {
    id: "6",
    title: "Hello",
  },
  {
    id: "7",
    title: "Hello",
  },
  {
    id: "8",
    title: "Hello",
  },
];
const BalUpdesh = ({ navigation }) => {
  const [dragData, setDragData] = useState(data);

  const onDragEnd = ({ data }) => {
    setDragData(data);
  };
  return (
    <MainWrapper>
      <DraggableFlatList
        onDragEnd={onDragEnd}
        keyExtractor={(item) => item.id}
        data={dragData}
        renderItem={({ item, drag, isActive }) => {
          return (
            <View style={{ height: 80 }}>
              <TouchableOpacity
                style={{ width: "95%" }}
                onPress={() => {
                  navigation.navigate(navigationStrings.AKHAR);
                }}
              >
                <ItemWrapper>
                  <VerticleWrapper>
                    <TitleWrapper>Raag</TitleWrapper>
                    <TitleDecsWrapper>Description</TitleDecsWrapper>
                  </VerticleWrapper>
                  <TouchableOpacity onLongPress={drag}>
                    <ImageWrapper source={icDragMove}></ImageWrapper>
                  </TouchableOpacity>
                </ItemWrapper>
              </TouchableOpacity>

              <Divider></Divider>
            </View>
          );
        }}
      ></DraggableFlatList>
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
  padding-left: 16px;
  padding-right: 16px;
  align-items: flex-end;
`;

const MainWrapper = styled.View`
  flex: 1;
  padding-top: 16px;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
