import React, { useEffect, useState } from "react";
import { Platform, ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import TextField from "../../../component/TextField";
import { useTheme } from "styled-components";
import { Dropdown } from "react-native-element-dropdown";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import { AMPM, Hours, Minutes } from "../../../utils/constants";
import FillBtn from "../../../component/FillBtn";
import DynamicallySelectedPicker from "../../../component/DynamicallySelectedPicker";

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

const days = [
  { label: "Mon", value: "1" },
  { label: "Tues", value: "2" },
  { label: "Wed", value: "3" },
  { label: "Thurs", value: "4" },
  { label: "Fri", value: "5" },
  { label: "Sat", value: "6" },
  { label: "Sun", value: "7" },
];

const NewReminder = () => {
  const { colors }: any = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const { modeState } = useTypedSelector((state) => state.mode);
  const [tab, setTab] = useState("Home");
  const [i, setI] = useState(0);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showTimepicker = () => {
    showMode("time");
  };
  const [selectedValue, setSelectedValue] = useState(0);
  useEffect(() => {
    showTimepicker();
  }, []);
  return (
    <ScrollView
      style={{ backgroundColor: colors.pankantiBC }}
      showsVerticalScrollIndicator={false}
    >
      <MainWrapper>
        <HorizontalWrapper>
          <DynamicallySelectedPicker
            color={modeState ? colors.textWhite : colors.primary}
            items={Hours}
            width={"30%"}
            height={300}
            onScroll={(selected) => setSelectedValue(selected.index)}
          />
          <DynamicallySelectedPicker
            color={modeState ? colors.textWhite : colors.primary}
            items={Minutes}
            width={"30%"}
            height={300}
            onScroll={(selected) => setSelectedValue(selected.index)}
          />

          <DynamicallySelectedPicker
            color={modeState ? colors.textWhite : colors.primary}
            items={AMPM}
            height={300}
            width={"30%"}
            onScroll={(selected) => setSelectedValue(selected.index)}
          />
        </HorizontalWrapper>

        <TitleWrappewr color={modeState ? colors.yellow : colors.primary}>
          Occurrence
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

        <TitleWrappewr color={modeState ? colors.yellow : colors.primary}>
          Repeat
        </TitleWrappewr>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          {days.map((item, index) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setTab(item.title);
                    setI(index);
                  }}
                >
                  <View
                    style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}
                  >
                    <TextWrapper
                      color={modeState ? colors.textWhite : colors.textBlack}
                    >
                      {item.label}
                    </TextWrapper>
                    {i === index ? (
                      <Divider
                        color={modeState ? colors.textWhite : colors.textBlack}
                      ></Divider>
                    ) : null}
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

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

        <TitleWrappewr color={modeState ? colors.yellow : colors.primary}>
          Alarm
        </TitleWrappewr>
        <TextField
          placeholder="Name of Alarm"
          keyboardType={"email-address"}
          autoCapitalize={"none"}
        />

        <TitleWrappewr color={modeState ? colors.yellow : colors.primary}>
          Link to Tracker
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

        <TitleWrappewr color={modeState ? colors.yellow : colors.primary}>
          Alarm Ringtone
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

        <FillBtn btntext={"Add Reminder"} onPress={() => {}} />
      </MainWrapper>
    </ScrollView>
  );
};

export default withTheme(NewReminder);

type Props = {
  color: string;
};

const Divider = styled.View<Props>`
  height: 1px;
  margin-top: 5px;
  background-color: ${({ color }: any) => color};
`;

const TextWrapper = styled.Text<Props>`
  color: ${({ color }: any) => color};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardDate};
`;

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
  justify-content: center;
  margin-right: -32px;
  margin-left: -32px;
  margin-top: -16px;
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
