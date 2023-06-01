import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View, Switch } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { icDragMove, icblueDots, icyellowDots } from "../../../assets";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import { useIsFocused } from "@react-navigation/native";
import navigationStrings from "../../../navigations/navigationStrings";
import { useTheme } from "styled-components/native";

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
const ReminderTab = () => {
  const { modeState } = useTypedSelector((state) => state.mode);
  const [isEnabled, setIsEnabled] = useState(false);
  const { colors }: any = useTheme();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <MainWrapper>
      <FlatList
        data={data}
        renderItem={(i) => {
          return (
            <ChildWrapper>
              <ItemWrapper>
                <VerticleWrapper>
                  <TitleWrapper>4:00 AM</TitleWrapper>
                  <TitleDecsWrapper>Amritvelad</TitleDecsWrapper>
                </VerticleWrapper>
                {i.index === 0 ||
                  (i.index === 1 && (
                    <Switch
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      thumbColor={isEnabled ? colors.primary : colors.secondary}
                      ios_backgroundColor={colors.lightTheme}
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  ))}
              </ItemWrapper>
              <Divider></Divider>
            </ChildWrapper>
          );
        }}
      ></FlatList>
    </MainWrapper>
  );
};

export default withTheme(ReminderTab);

const Divider = styled.View`
  height: 1px;
  top: 16px;
  margin-left: -16px;
  margin-right: -16px;
  background-color: ${({ theme }: any) => theme.colors.textGray};
`;

const ChildWrapper = styled.View`
  padding: 16px;
`;

const VerticleWrapper = styled.View`
  width: 80%;
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
  padding-left: 16px;
  padding-right: 16px;
  align-items: flex-end;
  flex-direction: row;
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
