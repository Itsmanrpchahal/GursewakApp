// @ts-ignore
import React, { useState } from "react";
import { withTheme } from "styled-components/native";
import styled from "styled-components/native";
import {
  icAccentStart,
  icBalUpdesh,
  icGoldenTemple,
  icLitreature,
  icMultiMedia,
  icResources,
  icRoundBack,
  icSearch,
  icSehajPath,
  icSetting,
  icSundarGutka,
  icThreeDots,
  icUser,
} from "../../../assets";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import navigationStrings from "../../../navigations/navigationStrings";
import { useTheme } from "styled-components";
import TextField from "../../../component/TextField";

const data = [
  {
    title: "Sehaj Path",
    iamge: icSehajPath,
  },
  {
    title: "Sundar Gutka",
    iamge: icSundarGutka,
  },
  {
    title: "Bal Updesh",
    iamge: icBalUpdesh,
  },
  {
    title: "Literature",
    iamge: icLitreature,
  },
  {
    title: "MultiMedia",
    iamge: icMultiMedia,
  },
  {
    title: "Resources",
    iamge: icResources,
  },
];
const SplashWithSearchBar = ({ navigation }) => {
  const [tab, setTab] = useState(0);
  const { colors }: any = useTheme();
  return (
    <MainWrapper>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <SafeAreaView>
        <ScrollView style={{ marginBottom: 150 }}>
          <MainWrapper1>
            <TopWrapper>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(navigationStrings.SETTINGS);
                }}
              >
                <ImageWrapper source={icSetting} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(navigationStrings.LOGIN);
                }}
              >
                <ImageWrapper source={icUser} />
              </TouchableOpacity>
            </TopWrapper>

            <TextWrapper>Content to be added</TextWrapper>
            <Image source={icGoldenTemple} />
            <TextWrapperAccent>Learn Shudh Gurbani</TextWrapperAccent>

            <FlatList
              data={data}
              numColumns={2}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{ width: "50%" }}
                    onPress={() =>
                      item.title === "Bal Updesh"
                        ? navigation.navigate(navigationStrings.BAL_UPDESH)
                        : item.title === "Resources"
                        ? navigation.navigate(navigationStrings.RESOURCES)
                        : null
                    }
                  >
                    <ListView>
                      <ImageWrapper1 source={item.iamge} />
                      <TextWrapper style={{ marginTop: 5 }}>
                        {item.title}
                      </TextWrapper>
                    </ListView>
                  </TouchableOpacity>
                );
              }}
            />
          </MainWrapper1>
        </ScrollView>
      </SafeAreaView>

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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.SEARCH_SCREEN);
              }}
            >
              <TextField
                defaultValue={"Search"}
                autoCapitalize={"none"}
                placeholder="Search"
                secureTextEntry={false}
                editable={false}
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
    </MainWrapper>
  );
};

export default withTheme(SplashWithSearchBar);

type ColorProps = {
  color: string;
  backgroundColor: string;
};

const InputWrapper = styled.View`
  width: 70%;
`;

const SearchWrapper = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
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

const ButtonWrapper = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const BottomWrapper = styled.View`
  position: absolute;
  bottom: 10px;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;

const ListView = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 30px;
  justify-content: space-between;
`;

const TextWrapperAccent = styled.Text`
  width: 100%;
  text-align: center;
  color: ${({ theme }: any) => theme.colors.accentColor};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle}px;
`;

const TextWrapper = styled.Text`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  color: ${({ theme }: any) => theme.colors.textWhite};
`;

const ImageWrapper1 = styled.Image``;

const ImageWrapper = styled.Image`
  height: 25px;
  width: 25px;
  margin-right: 16px;
`;

const TopWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
  margin-top: 10px;
`;

const MainWrapper1 = styled.View`
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;
const MainWrapper = styled.View`
  align-items: center;
  flex: 1;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;
