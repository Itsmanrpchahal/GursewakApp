// @ts-ignore
import React, { useState } from "react";
import styled, { withTheme } from "styled-components/native";
import { Image, ScrollView, Switch, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import {
  icCanada,
  icEmail,
  icFacebook,
  icInstagram,
  icPaypal,
  icSetting,
  icsoundCloud,
  icweb,
  icyoutube,
  ytIcon,
} from "../../../assets";
import { Dropdown } from "react-native-element-dropdown";
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
const SettingScreen = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const { colors }: any = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView style={{ height: "100%", backgroundColor: colors.primary }}>
      <MainWrapper>
        <ItemWrapper>
          <TextWrapper>Language</TextWrapper>
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
        </ItemWrapper>
        <DividerView />

        <ItemWrapper>
          <TextWrapper>App Mode</TextWrapper>
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
        </ItemWrapper>
        <DividerView />
        <ToggleWrapper>
          <TextWrapper>Other Apps’ Notifications</TextWrapper>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </ToggleWrapper>
        <WhiteTextWrapper>
          By turning this on, all other notifications will be on while you are
          using this app.
        </WhiteTextWrapper>
        <DividerView />

        <ToggleWrapper>
          <TextWrapper>Daily Dose Notifications</TextWrapper>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </ToggleWrapper>
        <WhiteTextWrapper>
          By turning this on, you will receive all Daily Dose notifications from
          Resources.
        </WhiteTextWrapper>
        <DividerView />

        <ToggleWrapper>
          <TextWrapper>Offline Media</TextWrapper>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </ToggleWrapper>
        <WhiteTextWrapper>
          A short description about this option can go here.
        </WhiteTextWrapper>
        <DividerView />

        <ToggleWrapper>
          <TextWrapper>Home Screen Introduction</TextWrapper>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </ToggleWrapper>
        <WhiteTextWrapper>
          This option allows you to turn on and turn off the introduction
          animation and audio.
        </WhiteTextWrapper>
        <DividerView />

        <ToggleWrapper>
          <ItemWrapper1>
            <TextWrapper>Learn to Navigaten</TextWrapper>
            <TextWrapperWhite>Watch the Youtube Tutorials</TextWrapperWhite>
            <TextWrapperWhite>Take me on a tour of the app</TextWrapperWhite>
            <TextWrapperWhite>What is a Translation Index</TextWrapperWhite>
          </ItemWrapper1>
          <ImageWrapper source={icyoutube} />
        </ToggleWrapper>
        <DividerView />

        <ToggleWrapper>
          <ItemWrapper1>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.ABOUT_APP);
              }}
            >
              <TextWrapper>About Us</TextWrapper>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.ABOUT_APP);
              }}
            >
              <TextWrapperWhite>About the Gursevak App</TextWrapperWhite>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.ABOUT_APP);
              }}
            >
              <TextWrapperWhite>About Gursevak and Bhagat Ji</TextWrapperWhite>
            </TouchableOpacity>
            <TextWrapperWhite>Acknowledgements</TextWrapperWhite>
          </ItemWrapper1>
          <ImageWrapper source={icyoutube} />
        </ToggleWrapper>
        <DividerView />
        <TextWrapper
          style={{
            marginTop: 16,
            marginRight: 16,
            marginLeft: 16,
            marginBottom: -16,
          }}
        >
          Contact Us
        </TextWrapper>
        <ToggleWrapper>
          <ItemWrapper1>
            <TextWrapperWhite>Email</TextWrapperWhite>
            <DecsTextWrapperWhite>hello@gursevak.com</DecsTextWrapperWhite>
          </ItemWrapper1>
          <ImageWrapper source={icEmail} />
        </ToggleWrapper>
        <ToggleWrapper style={{ marginTop: -10 }}>
          <ItemWrapper1>
            <TextWrapperWhite>Website</TextWrapperWhite>
            <DecsTextWrapperWhite>gursevak.com</DecsTextWrapperWhite>
          </ItemWrapper1>
          <ImageWrapper source={icweb} />
        </ToggleWrapper>

        <ToggleWrapper style={{ marginTop: -10 }}>
          <ItemWrapper1>
            <TextWrapperWhite>Facebook</TextWrapperWhite>
            <DecsTextWrapperWhite>
              facebook.com/gursevaksevadar
            </DecsTextWrapperWhite>
          </ItemWrapper1>
          <ImageWrapper source={icFacebook} />
        </ToggleWrapper>

        <ToggleWrapper style={{ marginTop: -10 }}>
          <ItemWrapper1>
            <TextWrapperWhite>Instagram</TextWrapperWhite>
            <DecsTextWrapperWhite>
              instagram.com/gursevaksevadar
            </DecsTextWrapperWhite>
          </ItemWrapper1>
          <ImageWrapper source={icInstagram} />
        </ToggleWrapper>

        <ToggleWrapper style={{ marginTop: -10 }}>
          <ItemWrapper1>
            <TextWrapperWhite>SoundCloud</TextWrapperWhite>
            <DecsTextWrapperWhite>
              soundcloud.com/gursevaksevadar
            </DecsTextWrapperWhite>
          </ItemWrapper1>
          <ImageWrapper source={icsoundCloud} />
        </ToggleWrapper>

        <ToggleWrapper style={{ marginTop: -10 }}>
          <ItemWrapper1>
            <TextWrapperWhite>YouTube</TextWrapperWhite>
            <DecsTextWrapperWhite>
              youtube.com/gursevaksevadar
            </DecsTextWrapperWhite>
          </ItemWrapper1>
          <ImageWrapper source={ytIcon} />
        </ToggleWrapper>
        <DividerView />

        <ItemWrapper>
          <TextWrapper>Daily Dose Notifications</TextWrapper>
          <DecsTextWrapperWhite>
            A small blurb about donating can go here.
          </DecsTextWrapperWhite>
          <ToggleWrapper>
            <ImageWrapper source={icPaypal} />
            <ImageWrapper source={icCanada} />
            <UnderLineText style={{ textDecorationLine: "underline" }}>
              Other Options
            </UnderLineText>
          </ToggleWrapper>
        </ItemWrapper>
        <DividerView />

        <ItemWrapper>
          <TextWrapper>Legal</TextWrapper>
          <DecsTextWrapperWhite>Privacy Policy</DecsTextWrapperWhite>
          <DecsTextWrapperWhite>Name of Policy</DecsTextWrapperWhite>
        </ItemWrapper>
        <DividerView />

        <ItemWrapper>
          <TextWrapper>App Updates</TextWrapper>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navigationStrings.APP_UPDATE);
            }}
          >
            <DecsTextWrapperWhite>App Updates</DecsTextWrapperWhite>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navigationStrings.DOWNLOAD_RESOURCE);
            }}
          >
            <DecsTextWrapperWhite>Download Sources</DecsTextWrapperWhite>
          </TouchableOpacity>
        </ItemWrapper>

        <DividerView />

        <ItemWrapper>
          <TextWrapper>App Updates</TextWrapper>
          <TextWrapperWhite style={{ marginTop: 16 }}>
            Export App Data
          </TextWrapperWhite>
          <ToggleWrapper style={{ margin: -16 }}>
            <TextWrapperWhite>Auto Backup</TextWrapperWhite>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </ToggleWrapper>
        </ItemWrapper>
      </MainWrapper>
    </ScrollView>
  );
};

export default withTheme(SettingScreen);

const UnderLineText = styled.Text`
  color: ${({ theme }: any) => theme.colors.textWhite};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle}px;
`;

const DecsTextWrapperWhite = styled.Text`
  color: ${({ theme }: any) => theme.colors.textWhite};
  margin-top: 10px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardDate}px;
`;

const ImageWrapper = styled.Image``;

const ItemWrapper1 = styled.View``;

const TextWrapperWhite = styled.Text`
  color: ${({ theme }: any) => theme.colors.textWhite};
  margin-top: 10px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle}px;
`;

const WhiteTextWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.textLightTheme};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardDate}px;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
`;

const ToggleWrapper = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

const DividerView = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }: any) => theme.colors.textWhite};
  opacity: 0.1;
`;

const DropdownWrapper = styled.View`
  height: 45px;
  margin-top: 16px;
  border-width: 0.5px;
  border-radius: 22px;
  background-color: white;
  padding: 8px;
`;

const ItemWrapper = styled.View`
  padding: 16px;
`;

const TextWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.accentColor};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle}px;
`;

const MainWrapper = styled.View`
  flex: 1;
  margin-top: 10px;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;
