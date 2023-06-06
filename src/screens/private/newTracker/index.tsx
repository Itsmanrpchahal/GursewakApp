import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import TextField from "../../../component/TextField";
import { useTheme } from "styled-components";
import { icAddGold, icAddPink } from "../../../assets";
import { Dropdown } from "react-native-element-dropdown";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import FillBtn from "../../../component/FillBtn";

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

const NewTracker = () => {
  const { colors }: any = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const { modeState } = useTypedSelector((state) => state.mode);

  return (
    <ScrollView
      style={{ backgroundColor: colors.pankantiBC }}
      showsVerticalScrollIndicator={false}
    >
      <MainWrapper>
        <TitleWrappewr color={modeState ? colors.textWhite : colors.primary}>
          Tracker Name
        </TitleWrappewr>
        <TextField
          placeholder="Name of Tracker"
          keyboardType={"email-address"}
          autoCapitalize={"none"}
        />

        <HorizontalWrapper>
          <TitleWrappewr color={modeState ? colors.yellow : colors.pink}>
            Activity
          </TitleWrappewr>
          <ImageWrapper source={icAddPink}></ImageWrapper>
        </HorizontalWrapper>

        <DropdownWrapper>
          <Dropdown
            data={data}
            search={false}
            maxHeight={300}
            activeColor={colors.primary}
            containerStyle={{
              backgroundColor: modeState ? "gray" : "white",
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

        <TitleWrappewr color={modeState ? colors.yellow : colors.pink}>
          Activity
        </TitleWrappewr>

        <DropdownWrapper>
          <Dropdown
            data={data}
            search={false}
            maxHeight={300}
            activeColor={colors.primary}
            containerStyle={{
              backgroundColor: modeState ? "gray" : "white",
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

        <HorizontalWrapper>
          <TitleWrappewr color={modeState ? colors.lightTheme : colors.gold}>
            Tracker
          </TitleWrappewr>
          <ImageWrapper source={icAddGold}></ImageWrapper>
        </HorizontalWrapper>

        <DropdownWrapper>
          <Dropdown
            data={data}
            search={false}
            maxHeight={300}
            activeColor={colors.primary}
            containerStyle={{
              backgroundColor: modeState ? "gray" : "white",
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

        <TitleWrappewr color={modeState ? colors.lightTheme : colors.gold}>
          Overall Counter Goal
        </TitleWrappewr>
        <TextField
          placeholder="Total number you want to achieve"
          keyboardType={"email-address"}
          autoCapitalize={"none"}
        />

        <TitleWrappewr color={modeState ? colors.lightTheme : colors.gold}>
          Daily Counter Goall
        </TitleWrappewr>
        <TextField
          placeholder="Number you want to achieve daily"
          keyboardType={"email-address"}
          autoCapitalize={"none"}
        />

        <TitleWrappewr color={modeState ? colors.lightTheme : colors.gold}>
          Achieve Goal By
        </TitleWrappewr>
        <TextField
          placeholder="August 19, 2021 [this should open a calendar]"
          keyboardType={"email-address"}
          autoCapitalize={"none"}
        />

        <TitleWrappewr color={modeState ? colors.lightTheme : colors.gold}>
          Daily Duration Goal
        </TitleWrappewr>
        <TextField
          placeholder="10:00"
          keyboardType={"email-address"}
          autoCapitalize={"none"}
        />

        <FillBtn btntext={"Create Tracker"} onPress={() => {}} />
      </MainWrapper>
    </ScrollView>
  );
};

export default withTheme(NewTracker);

type Props = {
  color: string;
};

const DropdownWrapper = styled.View`
  height: 45px;
  border-width: 0.5px;
  border-radius: 22px;
  margin-top:16px;
  padding:4px
  opacity:0.5;
  background-color: white;
`;

const ImageWrapper = styled.Image`
  margin-top: 16px;
`;

const HorizontalWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TitleWrappewr = styled.Text<Props>`
  color: ${({ color }: any) => color};
  margin-top: 16px;
  font-size: ${({ theme }: any) => theme.fontSize[0].cardSubTitle};
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
