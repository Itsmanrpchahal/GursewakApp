import React, { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { Dropdown } from "react-native-element-dropdown";
import { Appearance } from "react-native";
import { useTheme } from "styled-components";
import navigationStrings from "../../../navigations/navigationStrings";
import MusicComponent from "../../../component/musicComponent";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const PothiSahibViewer = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const mode = Appearance.getColorScheme();
  const { colors }: any = useTheme();
  return (
    <MainWrapper>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <DropdownWrapper>
        <DropDownText>ਆਖਹਿ</DropDownText>
        <Dropdown
          data={data}
          search={false}
          maxHeight={300}
          activeColor={colors.primary}
          containerStyle={{
            backgroundColor: mode === "light" ? "white" : "gray",
          }}
          labelField="label"
          valueField="value"
          activeColor={colors.primary}
          placeholderStyle={{ color: "black" }}
          selectedTextStyle={{ color: "black" }}
          placeholder={!isFocus ? "Select item" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </DropdownWrapper>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.PATH);
              }}
            >
              <ItemWrapper>
                <PothiTextTitle>Content to be added</PothiTextTitle>
                <PothiTextSubTitle>Content to be added</PothiTextSubTitle>
                <PothiTextDesc>Content to be added</PothiTextDesc>
                <PothiTextDesc1>Content to be added</PothiTextDesc1>
                <PothiTextSubDesc>Content to be added</PothiTextSubDesc>
              </ItemWrapper>
            </TouchableOpacity>
          );
        }}
      />
    </MainWrapper>
  );
};

export default withTheme(PothiSahibViewer);

const DropDownText = styled.Text`
  padding-left:8px
  color: ${({ theme }: any) => theme.colors.textBlack};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].text26}px;
`;

const DropdownWrapper = styled.View`
  height: 80px;
  border-radius: 22px;
  margin-top:16px;
  padding:4px
  opacity:0.5;
  background-color: white;
`;

const PothiTextSubDesc = styled.Text`
  color: ${({ theme }: any) => theme.colors.PothiTextSubDesc};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle};
`;

const PothiTextDesc1 = styled.Text`
  color: ${({ theme }: any) => theme.colors.pothiTextTitle};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle};
`;

const PothiTextDesc = styled.Text`
  color: ${({ theme }: any) => theme.colors.pothiTextDecs};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle};
`;

const PothiTextSubTitle = styled.Text`
  color: ${({ theme }: any) => theme.colors.pothiTextSubTitle};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle};
`;

const ItemWrapper = styled.View`
  margin-top: 16px;
`;

const PothiTextTitle = styled.Text`
  color: ${({ theme }: any) => theme.colors.pothiTextTitle};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].text26}px;
`;

const VerticleWrapper = styled.View``;

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 55px;
  padding: 8px;
  margin-left: -16px;
  margin-right: -16px;
  margin-top:-16px
  background-color: ${({ theme }: any) => theme.colors.header};
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
