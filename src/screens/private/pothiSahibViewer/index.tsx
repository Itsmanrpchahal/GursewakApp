import React, { useState } from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { Dropdown } from "react-native-element-dropdown";
import { icSetting } from "../../../assets";

const data = [
  {
    item: 1,
  },
  {
    item: 1,
  },
  {
    item: 1,
  },
  {
    item: 1,
  },
  {
    item: 1,
  },
  {
    item: 1,
  },
  {
    item: 1,
  },
  {
    item: 1,
  },
  {
    item: 1,
  },
  {
    item: 1,
  },
];

const PothiSahibViewer = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  return (
    <MainWrapper>
      <HeaderWrapper>
        <VerticleWrapper>
          <TextWrapper>ਲਿਖਾਰੀ</TextWrapper>
          <TextWrapper>ਰਾਗ</TextWrapper>
        </VerticleWrapper>

        <TextWrapper>ਅੰਗ ੧੨੩੪</TextWrapper>
      </HeaderWrapper>

      <DropdownWrapper>
        <DropDownText>ਆਖਹਿ</DropDownText>
        <Dropdown
          data={data}
          search={false}
          maxHeight={300}
          labelField="item"
          valueField="item"
          placeholder={!isFocus ? "Select item" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.item);
            setIsFocus(false);
          }}
          renderLeftIcon={() => <Image source={icSetting} />}
        />
      </DropdownWrapper>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => {}}>
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
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].pothiTextDecs}px;
`;

const PothiTextDesc1 = styled.Text`
  color: ${({ theme }: any) => theme.colors.pothiTextTitle};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].pothiTextDecs}px;
`;

const PothiTextDesc = styled.Text`
  color: ${({ theme }: any) => theme.colors.pothiTextDecs};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].pothiTextDecs}px;
`;

const PothiTextSubTitle = styled.Text`
  color: ${({ theme }: any) => theme.colors.pothiTextSubTitle};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle}px;
`;

const ItemWrapper = styled.View`
  margin-top: 16px;
`;

const PothiTextTitle = styled.Text`
  color: ${({ theme }: any) => theme.colors.pothiTextTitle};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].text26}px;
`;

const TextWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.textWhite};
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
