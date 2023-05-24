import React, { useState } from "react";
import { Appearance, View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";

import { Dropdown } from "react-native-element-dropdown";
import { useTheme } from "styled-components";
import FillBtn from "../../../component/FillBtn";
import navigationStrings from "../../../navigations/navigationStrings";
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

const NewNote = ({ navigation }) => {
  const mode = Appearance.getColorScheme();
  const { colors }: any = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <MainWrapper>
      <TextWrapperBlueYellow>Add Note</TextWrapperBlueYellow>
      <TextWrapperDesc>ਆਖਹਿ ਮੰਗਹਿ ਦੇਹਿ ਦੇਹਿ ਦਾਤਿ ਕਰੇ ਦਾਤਾਰੁ॥</TextWrapperDesc>
      <ImageWrapper></ImageWrapper>
      <DropdownWrapper>
        <Dropdown
          style={{ marginLeft: 5, marginRight: 5 }}
          data={data}
          search={false}
          maxHeight={300}
          activeColor={colors.primary}
          containerStyle={{
            backgroundColor: mode === "light" ? "white" : "gray",
          }}
          labelField="label"
          valueField="value"
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

      <FillBtn
        btntext={"Save"}
        onPress={() => {
          navigation.navigate(navigationStrings.SIGN_UP);
        }}
      />
    </MainWrapper>
  );
};

export default withTheme(NewNote);

const DropdownWrapper = styled.View`
  height: 45px;
  margin-left: 16px;
  margin-right: 16px;
  border-width: 0.5px;
  border-radius: 22px;
  padding:4px
  opacity:0.5;
  background-color: white;
`;
const ImageWrapper = styled.Image`
  height: 360px;
  border-radius: 10px;
  margin:20px
  border-color: gray;
  border-width: 1px;
  background-color: ${({ theme }: any) => theme.colors.backgroundAkhar};
`;

const TextWrapperDesc = styled.Text`
  color: ${({ theme }: any) => theme.colors.text};
  margin-top: 8px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle}px;
`;

const TextWrapperBlueYellow = styled.Text`
  color: ${({ theme }: any) => theme.colors.accentColor};
  margin-top: 8px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle}px;
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.backgroundAkhar};
`;
