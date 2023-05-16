import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import Collapsible from "react-native-collapsible";
import {
  icArrowDown,
  icArrowUp,
  icMinus,
  icPlus,
  icSetting,
} from "../../../assets";
import { Dropdown } from "react-native-element-dropdown";
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

const PothiSetting = () => {
  const { colors }: any = useTheme();
  const [collapsedBlackSearch, setCollaspedBlackSearch] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
              <TextWrapperWhite>Background</TextWrapperWhite>
            </ItemWrapper1>
            <ImageWrapper
              source={collapsedBlackSearch ? icArrowDown : icArrowUp}
            />
          </TItleHorizontalView>
        </TouchableOpacity>
        <Collapsible collapsed={collapsedBlackSearch}>
          <View>
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
              />
            </DropdownWrapper>

            <DividerView />

            <TItleHorizontalView>
              <ItemWrapper1>
                <TextWrapperWhite>Gurmukhi</TextWrapperWhite>
              </ItemWrapper1>
            </TItleHorizontalView>

            <ToggleWrapper>
              <TextWrapper>Larrivaar</TextWrapper>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </ToggleWrapper>

            <ToggleWrapper style={{ marginTop: 8, marginBottom: 8 }}>
              <FontHorizontal>
                <TextWrapper>Font Size</TextWrapper>
                <PlusMinus>
                  <TouchableOpacity>
                    <ImageWrapper
                      style={{ marginLeft: -15 }}
                      source={icPlus}
                    ></ImageWrapper>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <ImageWrapper
                      style={{ marginLeft: 15 }}
                      source={icMinus}
                    ></ImageWrapper>
                  </TouchableOpacity>
                </PlusMinus>
              </FontHorizontal>
            </ToggleWrapper>

            <ToggleWrapper>
              <TextWrapper>Paragraph</TextWrapper>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </ToggleWrapper>
            <DividerView />

            <ToggleWrapper style={{ marginTop: 16 }}>
              <TextWrapperYellow>Bisrams</TextWrapperYellow>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </ToggleWrapper>

            <ToggleWrapper style={{ marginTop: 16, marginBottom: 8 }}>
              <TextWrapper>Colour</TextWrapper>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </ToggleWrapper>
            <DividerView />

            <ToggleWrapper style={{ marginTop: 16, marginBottom: 8 }}>
              <TextWrapperYellow>Pronunciation Tips</TextWrapperYellow>
              <PlusMinus>
                <TouchableOpacity>
                  <ImageWrapper
                    style={{ marginLeft: -15 }}
                    source={icPlus}
                  ></ImageWrapper>
                </TouchableOpacity>
                <TouchableOpacity>
                  <ImageWrapper
                    style={{ marginLeft: 15 }}
                    source={icMinus}
                  ></ImageWrapper>
                </TouchableOpacity>
              </PlusMinus>
            </ToggleWrapper>
            <DividerView />

            <ToggleWrapper style={{ marginTop: 16 }}>
              <TextWrapperYellow>Transliterations</TextWrapperYellow>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </ToggleWrapper>

            <ToggleWrapper style={{ marginTop: 8, marginBottom: 8 }}>
              <TextWrapper>Font Size</TextWrapper>
              <PlusMinus>
                <TouchableOpacity>
                  <ImageWrapper
                    style={{ marginLeft: -15 }}
                    source={icPlus}
                  ></ImageWrapper>
                </TouchableOpacity>
                <TouchableOpacity>
                  <ImageWrapper
                    style={{ marginLeft: 15 }}
                    source={icMinus}
                  ></ImageWrapper>
                </TouchableOpacity>
              </PlusMinus>
            </ToggleWrapper>
            <DividerView />

            <ToggleWrapper style={{ marginTop: 16 }}>
              <TextWrapperYellow>Akhri Arth</TextWrapperYellow>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </ToggleWrapper>

            <ToggleWrapper style={{ marginTop: 8, marginBottom: 8 }}>
              <TextWrapper>Font Size</TextWrapper>
              <PlusMinus>
                <TouchableOpacity>
                  <ImageWrapper
                    style={{ marginLeft: -15 }}
                    source={icPlus}
                  ></ImageWrapper>
                </TouchableOpacity>
                <TouchableOpacity>
                  <ImageWrapper
                    style={{ marginLeft: 15 }}
                    source={icMinus}
                  ></ImageWrapper>
                </TouchableOpacity>
              </PlusMinus>
            </ToggleWrapper>
            <DividerView />

            <ToggleWrapper style={{ marginTop: 16 }}>
              <TextWrapperYellow>Detailed Arth</TextWrapperYellow>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </ToggleWrapper>

            <ToggleWrapper style={{ marginTop: 8, marginBottom: 8 }}>
              <TextWrapper>Font Size</TextWrapper>
              <PlusMinus>
                <TouchableOpacity>
                  <ImageWrapper
                    style={{ marginLeft: -15 }}
                    source={icPlus}
                  ></ImageWrapper>
                </TouchableOpacity>
                <TouchableOpacity>
                  <ImageWrapper
                    style={{ marginLeft: 15 }}
                    source={icMinus}
                  ></ImageWrapper>
                </TouchableOpacity>
              </PlusMinus>
            </ToggleWrapper>
            <DividerView />

            <ToggleWrapper style={{ marginTop: 16 }}>
              <TextWrapperYellow>English Translations</TextWrapperYellow>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </ToggleWrapper>

            <ToggleWrapper style={{ marginTop: 8, marginBottom: 8 }}>
              <TextWrapper>Font Size</TextWrapper>
            </ToggleWrapper>
            <DividerView />
          </View>
        </Collapsible>
      </MainWrapper>
    </ScrollView>
  );
};

export default withTheme(PothiSetting);

const PlusMinus = styled.View`
  flex-direction: row;
  align-items: center;
`;

const FontHorizontal = styled.View`
width:100%
  flex-direction: row;
  justify-content: space-between;
`;

const TextWrapperYellow = styled.Text`
  color: ${({ theme }: any) => theme.colors.accentColor};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle}px;
`;

const TextWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.textWhite};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle}px;
`;

const ToggleWrapper = styled.View`
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  justify-content: space-between;
`;

const DividerView = styled.View`
  width: 100%;
  height: 1px;
  margin-top: 16px;
  background-color: ${({ theme }: any) => theme.colors.textWhite};
  opacity: 0.1;
`;

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

const ImageWrapper = styled.Image``;

const TextWrapperWhite = styled.Text`
  color: ${({ theme }: any) => theme.colors.accentColor};
  margin-top: 10px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle}px;
`;

const ItemWrapper1 = styled.View``;

const TItleHorizontalView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
`;

const MainWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;
