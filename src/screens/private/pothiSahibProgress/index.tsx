import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import styled, { withTheme } from "styled-components/native";
import {
  icDragMove,
  icThreeDots,
  icblueDots,
  icyellowDots,
} from "../../../assets";
import navigationStrings from "../../../navigations/navigationStrings";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import { useTheme } from "styled-components";
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
const PothiSahibProgress = ({ navigation }) => {
  const { modeState } = useTypedSelector((state) => state.mode);
  const { colors }: any = useTheme();
  const [dragData, setDragData] = useState(data);

  const onDragEnd = ({ data }) => {
    setDragData(data);
  };
  useEffect(() => {
    navigation.setOptions({ title: "Pothi Sahibs" });
  }, []);

  return (
    <MainWrapper>
      <DraggableFlatList
        onDragEnd={onDragEnd}
        keyExtractor={(item) => item.id}
        data={dragData}
        renderItem={({ item, drag, isActive }) => {
          return (
            <View style={{ height: 100 }}>
              <TouchableOpacity
                style={{ width: "100%" }}
                onPress={() => {
                  navigation.navigate(navigationStrings.POTHI_SHAIB_VIEW);
                }}
              >
                <ItemWrapper>
                  <VerticleWrapper>
                    <HorizontalWrapper1>
                      <TitleWrapper>Pothi Sahibs</TitleWrapper>
                      <TouchableOpacity>
                        <ImageWrapper1
                          source={modeState ? icyellowDots : icblueDots}
                        ></ImageWrapper1>
                      </TouchableOpacity>
                    </HorizontalWrapper1>
                    <TitleDecsWrapper>Description</TitleDecsWrapper>
                    <View style={{ position: "relative", width: "90%" }}>
                      <BackView
                        backgroundColor={
                          modeState ? colors.yellow : colors.primary
                        }
                      ></BackView>
                      <HorizontalWrapper>
                        <UpperView
                          backgroundColor={
                            modeState ? colors.yellow : colors.primary
                          }
                          width={"27%"}
                        >
                          <TextNumber
                            color={
                              modeState ? colors.textBlack : colors.textWhite
                            }
                          >
                            12
                          </TextNumber>
                        </UpperView>
                      </HorizontalWrapper>
                    </View>
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

export default withTheme(PothiSahibProgress);

type Props = {
  color: string;
  fontSize: string;
  backgroundColor: string;
  width: string;
};

const TextNumber = styled.Text`
    padding-right: 5px;
    text-align:right
    color: ${({ color }: any) => color};
    font-size: ${({ theme }: any) => theme.fontSize[0].cardSmallText};
  `;

const HorizontalWrapper1 = styled.View`
    width:100%
  flex-direction: row;
  justify-content:space-between
`;

const HorizontalWrapper = styled.View`
    width:100%
  flex-direction: row;
  position: absolute;
`;

const UpperView = styled.View<Props>`
    width:${({ width }: any) => width};
    margin-top:10px;
    border-radius:10px;
    height:15px
  background-color: ${({ backgroundColor }: any) => backgroundColor};

`;

const BackView = styled.View<Props>`
    width:100%
    margin-top:10px;
    border-radius:10px;
    height:15px
    opacity:0.3;
  background-color: ${({ backgroundColor }: any) => backgroundColor};

`;

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

const ImageWrapper1 = styled.Image`
  margin-left: -15px;
`;

const ImageWrapper = styled.Image`
  height: 14px;
  width: 14px;
  margin-left: -22px;
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
