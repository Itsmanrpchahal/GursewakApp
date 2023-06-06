import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { icDragMove, icblueDots, icyellowDots } from "../../../assets";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import { useIsFocused } from "@react-navigation/native";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { useTheme } from "styled-components";
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

const SehajPathList = ({ navigation }) => {
  const { modeState } = useTypedSelector((state) => state.mode);
  const isFocused = useIsFocused();
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const { colors }: any = useTheme();
  useEffect(() => {
    if (isFocused) {
    }
  }, []);
  return (
    <MainWrapper>
      <FlatList
        data={data}
        renderItem={() => {
          return (
            <View style={{ height: 80 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(navigationStrings.PATH_LIST);
                }}
              >
                <ItemWrapper>
                  <VerticleWrapper>
                    <TitleWrapper>Path Name</TitleWrapper>
                    <TitleDecsWrapper>Path Name</TitleDecsWrapper>
                  </VerticleWrapper>
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

export default withTheme(SehajPathList);

type Props = {
  backgroundColor: string;
};

const DividerNoteView = styled.View<Props>`
  height: 1px;
  opacity: 0.2;
  margin-top:10px
  margin-bottom:10px;
  margin-right:-14px
  margin-left:-14px
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const NoteText = styled.Text`
  color: ${({ theme }: any) => theme.colors.blueYellow};
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
`;

const MenuWrapper1 = styled.View<Props>`
  padding: 16px;
  border-radius:10px
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const Divider = styled.View`
  height: 1px;
  top: 16px;
  background-color: ${({ theme }: any) => theme.colors.textGray};
`;

const VerticleWrapper = styled.View`
  width: 100%;
`;

const ImageWrapper = styled.Image`
  margin-right: 16px;
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
  padding-top: 16px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
