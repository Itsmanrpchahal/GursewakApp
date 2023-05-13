// @ts-ignore
import React, { useState } from "react";
import styled, { withTheme } from "styled-components/native";
import FillBtn from "../../../component/FillBtn";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components";
import navigationStrings from "../../../navigations/navigationStrings";
import CheckBox from "react-native-check-box";

const DownloadResource = () => {
  const { colors }: any = useTheme();
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView style={{ backgroundColor: colors.primary }}>
      <MainWrapper>
        <TextWrapper>Downloaded Sources</TextWrapper>
        <CheckBoxWrapper>
          <CheckBox
            onClick={() => {
              setChecked(!checked);
            }}
            checkBoxColor="white"
            rightTextStyle={{ color: "white", fontSize: 15 }}
            isChecked={checked}
            rightText={"Sri Guru Granth Sahib Ji"}
          />

          <CheckBox
            style={{ marginTop: 10 }}
            onClick={() => {
              setChecked(!checked);
            }}
            checkBoxColor="white"
            rightTextStyle={{ color: "white", fontSize: 15 }}
            isChecked={checked}
            rightText={"Sri Dasam Guru Granth Sahib Ji"}
          />

          <CheckBox
            style={{ marginTop: 10 }}
            onClick={() => {
              setChecked(!checked);
            }}
            checkBoxColor="white"
            rightTextStyle={{ color: "white", fontSize: 15 }}
            isChecked={checked}
            rightText={"Vaaran Bhai Gurdas Ji"}
          />
        </CheckBoxWrapper>

        <TextWrapper>Available for Download</TextWrapper>
        <CheckBoxWrapper>
          <CheckBox
            onClick={() => {
              setChecked(!checked);
            }}
            checkBoxColor="white"
            rightTextStyle={{ color: "white", fontSize: 15 }}
            isChecked={checked}
            rightText={"Bhai Gurdas Ji Kabit Savaeiay"}
          />

          <CheckBox
            style={{ marginTop: 10 }}
            onClick={() => {
              setChecked(!checked);
            }}
            checkBoxColor="white"
            rightTextStyle={{ color: "white", fontSize: 15 }}
            isChecked={checked}
            rightText={"Sri Sabloh Granth"}
          />

          <CheckBox
            style={{ marginTop: 10 }}
            onClick={() => {
              setChecked(!checked);
            }}
            checkBoxColor="white"
            rightTextStyle={{ color: "white", fontSize: 15 }}
            isChecked={checked}
            rightText={"Vaaran Bhai Nand Laal Ji"}
          />

          <CheckBox
            style={{ marginTop: 10 }}
            onClick={() => {
              setChecked(!checked);
            }}
            checkBoxColor="white"
            rightTextStyle={{ color: "white", fontSize: 15 }}
            isChecked={checked}
            rightText={"Vaaran Bhai Burdas Singh Ji"}
          />
        </CheckBoxWrapper>

        <FillBtn btntext={"Update Sources"} onPress={() => {}} />
      </MainWrapper>
    </ScrollView>
  );
};

export default withTheme(DownloadResource);

const CheckBoxWrapper = styled.View`
  margin-top: 16px;
`;

const TextWrapper = styled.Text`
  margin-top: 16px;
  color: ${({ theme }: any) => theme.colors.accentColor};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle}px;
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;
