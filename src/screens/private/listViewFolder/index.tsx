import React from "react";
import { Appearance, FlatList, TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import navigationStrings from "../../../navigations/navigationStrings";
import { navigationRef } from "../../../navigations/RootNavigations";
import { useTypedSelector } from "@root/hooks/useTypedSelector";

const data = [
  {
    title: "a",
  },
  {
    title: "a",
  },
  {
    title: "a",
  },
];
const ListViewFolder = ({ navigation }) => {
  const { colors }: any = useTheme();
  const mode = Appearance.getColorScheme();
  const { modeState } = useTypedSelector((state) => state.mode);

  return (
    <MainWrapper>
      <FlatList
        data={data}
        renderItem={(item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigationRef.current.navigate(navigationStrings.NOTE_DETAIL);
              }}
            >
              <View>
                <HeaderText
                  style={{ padding: 10, marginTop: 10 }}
                  color={modeState ? colors.yellow : colors.textBlack}
                  width={100}
                >
                  Content to be Added
                </HeaderText>

                <HeaderText
                  style={{ padding: 10, marginTop: -10 }}
                  color={colors.blueWhite}
                  width={100}
                >
                  Content to be Added
                </HeaderText>

                <DescText color={modeState ? colors.blue : colors.gold}>
                  Source, Ang 324, Pangti 9
                </DescText>

                <Divider></Divider>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </MainWrapper>
  );
};

export default withTheme(ListViewFolder);

type TextProps = {
  height: string;
  backgroundColor: string;
  width: string;
  color: string;
  textAlign: string;
};

const Divider = styled.View`
  background-color: #D1D1D1;
  height: 1px;
  margin-top:20px
  opacity:0.5
  width: 100%;
`;

const DescText = styled.Text<TextProps>`
  color: ${({ color }: any) => color};
  margin-left:10px
  fontsize: ${({ theme }: any) => theme.fontSize[0].cardSmallText}px;
`;

const HeaderText = styled.Text<TextProps>`
  width: ${({ width }: any) => width}%;
  text-align: ${({ textAlign }: any) => textAlign};
  color: ${({ color }: any) => color};
  font-size: 16px;
`;

const MainWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
