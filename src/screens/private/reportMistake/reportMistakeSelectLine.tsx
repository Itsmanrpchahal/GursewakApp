import React, { useState } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { withTheme } from "styled-components/native";
import CheckBox from "react-native-check-box";
import navigationStrings from "../../../navigations/navigationStrings";
import FillBtn from "../../../component/FillBtn";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 1", value: "1" },
  { label: "Item 1", value: "1" },
  { label: "Item 1", value: "1" },
  { label: "Item 1", value: "1" },
  { label: "Item 1", value: "1" },
];

const ReportMistakeSelectLine = ({ navigation }) => {
  const { colors }: any = useTheme();
  const [checked, setChecked] = useState(false);

  return (
    <MainWrapper>
      <HeaderWrapper>
        <TextWrapper>
          Please select the lines you would like to report.
        </TextWrapper>
      </HeaderWrapper>

      <FlatList
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => {}}>
              <HorizontalWrapper>
                <CheckBox
                  style={{ marginTop: 26 }}
                  onClick={() => {
                    setChecked(!checked);
                  }}
                  checkBoxColor="#2451A0"
                  isChecked={checked}
                />

                <ItemWrapper>
                  <PothiTextTitle>
                    ਆਖਹਿ ਮੰਗਹਿ ਦੇਹਿ ਦੇਹਿ ਦਾਤਿ ਕਰੇ ਦਾਤਾਰੁ॥
                  </PothiTextTitle>
                  <PothiTextSubTitle>
                    ਆਖਹਿ ਮੰਗਹਿ ਦੇਹਿ ਦੇਹਿ ਦਾਤਿ ਕਰੇ ਦਾਤਾਰੁ॥
                  </PothiTextSubTitle>
                  <PothiTextDesc>
                    ਆਖਹਿ ਮੰਗਹਿ ਦੇਹਿ ਦੇਹਿ ਦਾਤਿ ਕਰੇ ਦਾਤਾਰੁ॥
                  </PothiTextDesc>
                  <PothiTextDesc1>
                    ਆਖਹਿ ਮੰਗਹਿ ਦੇਹਿ ਦੇਹਿ ਦਾਤਿ ਕਰੇ ਦਾਤਾਰੁ॥
                  </PothiTextDesc1>
                  <PothiTextSubDesc>
                    ਆਖਹਿ ਮੰਗਹਿ ਦੇਹਿ ਦੇਹਿ ਦਾਤਿ ਕਰੇ ਦਾਤਾਰੁ॥
                  </PothiTextSubDesc>
                </ItemWrapper>
              </HorizontalWrapper>
            </TouchableOpacity>
          );
        }}
      />
      <BtnWrapper>
        <FillBtn
          btntext={"Next"}
          onPress={() => {
            navigation.navigate(navigationStrings.REPORT_MISTAKE);
          }}
        />
      </BtnWrapper>
    </MainWrapper>
  );
};

export default withTheme(ReportMistakeSelectLine);

const BtnWrapper = styled.View`
  position: static;
  bottom: 0;
  margin-bottom: 80px;
`;

const ListWrapper = styled.View`
  height: 80%;
`;

const HorizontalWrapper = styled.View`
  flex-direction: row;
`;

const TextWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.blueYellow};
  text-align: center;
  justify-content: center;
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
  width: 95%;
  margin-left: 10px;
`;

const PothiTextTitle = styled.Text`
  color: ${({ theme }: any) => theme.colors.pothiTextTitle};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].text26}px;
`;

const HeaderWrapper = styled.View`
  height: 45px;
  margin: -16px;
  justify-content: center;
  background-color: ${({ theme }: any) => theme.colors.blueYellowBC};
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
