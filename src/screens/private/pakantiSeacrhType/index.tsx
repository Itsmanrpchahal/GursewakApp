import React, { useState } from "react";
import styled, { withTheme } from "styled-components/native";
import { icArrowDown, icArrowUp, icSetting, ytIcon } from "../../../assets";
import CheckBox from "react-native-check-box";
import { Dropdown } from "react-native-element-dropdown";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components";
import Collapsible from "react-native-collapsible";

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
const PakantiSearchType = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const { colors }: any = useTheme();
  const [collapsedBlackSearch, setCollaspedBlackSearch] = useState(false);
  const [collapsedRaag, setRaagCollapsedRaag] = useState(false);
  const [collapsedGranth, setRaagCollapsedGranth] = useState(false);
  const [collapsedDoubleTap, setRaagCollapsedDoubleTap] = useState(false);

  return (
    <ScrollView style={{ backgroundColor: colors.primary }}>
      <MainWrapper>
        <TouchableOpacity
          onPress={() => {
            setCollaspedBlackSearch(!collapsedBlackSearch);
          }}
        >
          <TItleHorizontalView>
            <ItemWrapper1>
              <TextWrapperWhite>Blank Search</TextWrapperWhite>
            </ItemWrapper1>
            <ImageWrapper
              source={collapsedBlackSearch ? icArrowDown : icArrowUp}
            />
          </TItleHorizontalView>
        </TouchableOpacity>

        <Collapsible collapsed={collapsedBlackSearch}>
          <TextDesc>
            Blank search allows you to search different filters without
            searching a specific shabad. For example, if you would like to find
            shabads in Raag Basant by Guru Nanak Dev Ji, you can simply elect
            “Guru Nanak Dev Ji” in under Writer and “Basant” under Raag.
          </TextDesc>
        </Collapsible>

        <TouchableOpacity
          onPress={() => {
            setRaagCollapsedRaag(!collapsedRaag);
          }}
        >
          <TItleHorizontalView>
            <ItemWrapper1>
              <TextWrapperWhite>Raag</TextWrapperWhite>
            </ItemWrapper1>
            <ImageWrapper source={collapsedRaag ? icArrowDown : icArrowUp} />
          </TItleHorizontalView>
        </TouchableOpacity>

        <Collapsible collapsed={collapsedRaag}>
          <View>
            <CheckBox
              style={{ marginTop: 16 }}
              onClick={() => {
                setChecked(!checked);
              }}
              checkBoxColor="white"
              rightTextStyle={{ color: "white", fontSize: 14 }}
              isChecked={checked}
              rightText={"Raag"}
            />

            <CheckBox
              style={{ marginTop: 16 }}
              onClick={() => {
                setChecked(!checked);
              }}
              checkBoxColor="white"
              rightTextStyle={{ color: "white", fontSize: 14 }}
              isChecked={checked}
              rightText={"Raag"}
            />
          </View>
        </Collapsible>

        <TItleHorizontalView>
          <ItemWrapper1>
            <TextWrapperWhite>Writer</TextWrapperWhite>
          </ItemWrapper1>
          <ImageWrapper source={icArrowUp} />
        </TItleHorizontalView>

        <TouchableOpacity
          onPress={() => {
            setRaagCollapsedGranth(!collapsedGranth);
          }}
        >
          <TItleHorizontalView>
            <ItemWrapper1>
              <TextWrapperWhite>Granth</TextWrapperWhite>
            </ItemWrapper1>
            <ImageWrapper source={collapsedGranth ? icArrowDown : icArrowUp} />
          </TItleHorizontalView>
        </TouchableOpacity>

        <Collapsible collapsed={collapsedGranth}>
          <CheckBox
            style={{ marginTop: 16 }}
            onClick={() => {
              setChecked(!checked);
            }}
            checkBoxColor="white"
            rightTextStyle={{ color: "white", fontSize: 14 }}
            isChecked={checked}
            rightText={"Sri Guru Granth Sahib Ji"}
          />

          <CheckBox
            style={{ marginTop: 16 }}
            onClick={() => {
              setChecked(!checked);
            }}
            checkBoxColor="white"
            rightTextStyle={{ color: "white", fontSize: 14 }}
            isChecked={checked}
            rightText={"Sri Dasam Guru Granth Sahib Ji"}
          />

          <CheckBox
            style={{ marginTop: 16 }}
            onClick={() => {
              setChecked(!checked);
            }}
            checkBoxColor="white"
            rightTextStyle={{ color: "white", fontSize: 14 }}
            isChecked={checked}
            rightText={"Vaaran Bhai Gurdas Ji"}
          />
        </Collapsible>

        <TouchableOpacity
          onPress={() => {
            setRaagCollapsedDoubleTap(!collapsedDoubleTap);
          }}
        >
          <TItleHorizontalView>
            <ItemWrapper1>
              <TextWrapperWhite>Double Tap</TextWrapperWhite>
            </ItemWrapper1>
            <ImageWrapper
              source={collapsedDoubleTap ? icArrowDown : icArrowUp}
            />
          </TItleHorizontalView>
        </TouchableOpacity>

        <Collapsible collapsed={collapsedDoubleTap}>
          <TextDesc>
            By enabling double tap, you can apply a shortcut toggle for your
            most used setting.
          </TextDesc>

          <DropdownWrapper>
            <Dropdown
              data={data}
              search={false}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select item" : "..."}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => <Image source={icSetting} />}
            />
          </DropdownWrapper>
        </Collapsible>
      </MainWrapper>
    </ScrollView>
  );
};

export default withTheme(PakantiSearchType);

const DropdownWrapper = styled.View`
  height: 45px;
  margin-top: 16px;
  border-width: 0.5px;
  border-radius: 22px;
  padding:4px
  opacity:0.5;
  background-color: white;
`;

const TextDesc = styled.Text`
  color: ${({ theme }: any) => theme.colors.textWhite};
  margin-top: 16px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardDate}px;
  font-weight: 500;
`;

const ImageWrapper = styled.Image``;

const DecsTextWrapperWhite = styled.Text`
  color: ${({ theme }: any) => theme.colors.textWhite};
  margin-top: 10px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardDate}px;
`;

const TextWrapperWhite = styled.Text`
  color: ${({ theme }: any) => theme.colors.accentColor};
  margin-top: 10px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle}px;
`;

const ItemWrapper1 = styled.View``;

const TItleHorizontalView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;
