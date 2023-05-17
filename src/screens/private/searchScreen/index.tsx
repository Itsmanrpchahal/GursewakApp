import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";
import styled, { withTheme } from "styled-components/native";
import CheckBox from "react-native-check-box";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { useTheme } from "styled-components";
import {
  icAccentStart,
  icArrow,
  icRoundBack,
  icSearch,
  icThreeDots,
} from "../../../assets";
import TextField from "../../../component/TextField";
import navigationStrings from "../../../navigations/navigationStrings";
import { FlatList } from "react-native";
import PankatiView from "../../../component/pakantiView";

var radio_props = [
  { label: "First Letter Start", value: 0 },
  { label: "First Letter Anywhere", value: 1 },
  { label: "Ang/Vaar", value: 1 },
  { label: "Gurmukhi", value: 1 },
  { label: "English", value: 1 },
];

var data = [
  {
    title: "Title",
    subTitle: "SubTtitle",
    desc: "Description",
    raag: "Raag",
  },
  {
    title: "Title",
    subTitle: "SubTtitle",
    desc: "Description",
    raag: "Raag",
  },
  {
    title: "Title",
    subTitle: "SubTtitle",
    desc: "Description",
    raag: "Raag",
  },
  {
    title: "Title",
    subTitle: "SubTtitle",
    desc: "Description",
    raag: "Raag",
  },
  {
    title: "Title",
    subTitle: "SubTtitle",
    desc: "Description",
    raag: "Raag",
  },
];

const SearchScreen = ({ navigation }) => {
  const [initial, setInitial] = useState(0);
  const { colors }: any = useTheme();
  const [theme, setTheme] = useState<any>(false);
  const [tab, setTab] = useState(0);
  const toggleRememberPin = (value) => {
    setTheme(value);
  };
  return (
    <MainWrapper style={{ marginBottom: -16 }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <ScrollView
        style={{ marginBottom: 130 }}
        showsVerticalScrollIndicator={false}
      >
        <MainWrapper>
          <TextWrapper>Search Type</TextWrapper>
          <RadioForm
            style={{ marginTop: 10 }}
            radio_props={radio_props}
            buttonInnerColor={colors.text}
            buttonOuterColor={colors.text}
            buttonColor={colors.text}
            animation={true}
            labelColor={colors.text}
            labelStyle={{
              fontSize: 14,
              color: colors.text,
            }}
            initial={0}
            onPress={(value) => {
              setInitial(value);
            }}
          />

          <TextDesc>Similar Letters</TextDesc>
          <TextDesc style={{ marginTop: 5 }}>
            For example, if you are unsure whether the shabad you’re searching
            has bIcwr or vIcwr, enabling Similar Letters will display results
            for both.
          </TextDesc>

          <HorizontalViewMain>
            <HorizontalView>
              <TextDesc>v</TextDesc>

              <ImageWrapper
                style={{ marginLeft: -30 }}
                source={icArrow}
              ></ImageWrapper>
              <Switch
                trackColor={{ false: "gray", true: "yellow" }}
                onValueChange={toggleRememberPin}
                value={theme}
              />
            </HorizontalView>

            <HorizontalView>
              <TextDesc>.K </TextDesc>
              <ImageWrapper
                style={{ marginLeft: -30 }}
                source={icArrow}
              ></ImageWrapper>
              <Switch
                trackColor={{ false: "gray", true: "yellow" }}
                onValueChange={toggleRememberPin}
                value={theme}
              />
            </HorizontalView>
          </HorizontalViewMain>

          <HorizontalViewMain style={{ marginTop: -10 }}>
            <HorizontalView>
              <TextDesc>.x </TextDesc>

              <ImageWrapper
                style={{ marginLeft: -30 }}
                source={icArrow}
              ></ImageWrapper>
              <Switch
                trackColor={{ false: "gray", true: "yellow" }}
                onValueChange={toggleRememberPin}
                value={theme}
              />
            </HorizontalView>

            <HorizontalView>
              <TextDesc>ikR kr</TextDesc>
              <ImageWrapper
                style={{ marginLeft: -30 }}
                source={icArrow}
              ></ImageWrapper>
              <Switch
                trackColor={{ false: "gray", true: "yellow" }}
                onValueChange={toggleRememberPin}
                value={theme}
              />
            </HorizontalView>
          </HorizontalViewMain>

          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(navigationStrings.POTHI_SHAIB_VIEW);
                  }}
                >
                  <PankatiView item={item} />
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </MainWrapper>
      </ScrollView>

      <MainWrapper1>
        <BottomWrapper>
          <ButtonWrapper>
            <TouchableOpacity
              style={{ width: "50%", marginRight: 3 }}
              onPress={() => {
                setTab(0);
              }}
            >
              <ButtonVerticle>
                <TextWrapperBottom
                  color={tab === 0 ? colors.accentColor : colors.textWhite}
                >
                  Gurbani Search
                </TextWrapperBottom>
                <ViewDivider
                  backgroundColor={
                    tab === 0 ? colors.accentColor : colors.textWhite
                  }
                />
              </ButtonVerticle>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ width: "50%", marginLeft: 3 }}
              onPress={() => {
                setTab(1);
              }}
            >
              <ButtonVerticle>
                <TextWrapperBottom
                  color={tab === 1 ? colors.accentColor : colors.textWhite}
                >
                  Hukamnama Sahib
                </TextWrapperBottom>
                <ViewDivider
                  backgroundColor={
                    tab === 1 ? colors.accentColor : colors.textWhite
                  }
                />
              </ButtonVerticle>
            </TouchableOpacity>
          </ButtonWrapper>
          <SearchWrapper>
            <InputWrapper>
              <TouchableOpacity onPress={() => {}}>
                <TextField
                  autoCapitalize={"none"}
                  placeholder="Search"
                  secureTextEntry={false}
                  editable={true}
                  icon={icSearch}
                />
              </TouchableOpacity>
            </InputWrapper>

            <ImageWrapper style={{ marginLeft: 3 }} source={icRoundBack} />
            <ImageWrapper source={icAccentStart} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.PAKANTI_SEARCH);
              }}
            >
              <Image style={{ marginRight: 10 }} source={icThreeDots} />
            </TouchableOpacity>
          </SearchWrapper>
        </BottomWrapper>
      </MainWrapper1>
    </MainWrapper>
  );
};

export default withTheme(SearchScreen);

type ColorProps = {
  color: string;
  backgroundColor: string;
};

const InputWrapper = styled.View`
  width: 70%;
`;

const ViewDivider = styled.View<ColorProps>`
  height: 1px;
  width: 100%;
  margin-top: 5px;
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const TextWrapperBottom = styled.Text<ColorProps>`
  width: 100%;
  color: ${({ color }: any) => color};
  text-align: center;
`;

const ButtonVerticle = styled.View`
  width: 100%;
`;

const SearchWrapper = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const ImageWrapper = styled.Image``;
const HorizontalView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 40%;
  align-content: center;
  align-items: center;
  margin-top: 16px;
`;

const BottomWrapper = styled.View`
  position: absolute;
  bottom: 28px;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;

const HorizontalViewMain = styled.View`
  justify-content: space-evenly;
  flex-direction: row;
  margin-top: 16px;
  margin-left: -18px;
`;

const TextDesc = styled.Text`
  color: ${({ theme }: any) => theme.colors.text};
  margin-top: 8px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardDate}px;
  font-weight: 500;
`;

const TextWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.blueYellow};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle}px;
`;

const MainWrapper1 = styled.View`
  flex: 1;
  height: 100%;
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: -20px;
  align-items: center;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 8px;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
