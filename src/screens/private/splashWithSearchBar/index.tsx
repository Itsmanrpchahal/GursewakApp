// @ts-ignore
import React, { useEffect, useState } from "react";
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
  LayoutChangeEvent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import navigationStrings from "../../../navigations/navigationStrings";
import { useTheme } from "styled-components";
import TextField from "../../../component/TextField";
import { useTypedSelector } from "@root/hooks/useTypedSelector";

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
  const { modeState } = useTypedSelector((state) => state.mode);
  const [height, setHeight] = useState<number>();
  const [delayedData, setDelayedData] = useState([]);
  const onLayout = ({
    nativeEvent: {
      layout: { x, y, width: w, height: h },
    },
  }: LayoutChangeEvent) => {
    console.log("onLayout: ", x, y, w, h);
    setHeight(h);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedData(data);
    }, 300); // Delay of 1 second (adjust as needed)

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <MainWrapper>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <SafeAreaView>
        <MainWrapper1>
          <TopWrapper>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.LOGIN);
              }}
            >
              <ImageWrapper source={icUser} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.SETTINGS);
              }}
            >
              <ImageWrapper source={icSetting} />
            </TouchableOpacity>
          </TopWrapper>

          {/* <TextWrapper>Content to be added</TextWrapper> */}
          {/* Image is cropped */}
          <Image style={{ marginTop: 0 }} source={icGoldenTemple} />
          <TextWrapperAccent>Learn Shudh Gurbani</TextWrapperAccent>

          <FlatList
            style={{
              marginTop: -10,
              marginBottom: 110,
            }}
            data={delayedData}
            scrollEnabled={false}
            numColumns={2}
            onLayout={onLayout}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: "50%",
                  }}
                  onPress={() =>
                    item.title === "Bal Updesh"
                      ? navigation.navigate(navigationStrings.BAL_UPDESH)
                      : item.title === "Resources"
                      ? navigation.navigate(navigationStrings.RESOURCES)
                      : item.title === "MultiMedia"
                      ? navigation.navigate(navigationStrings.SONGS)
                      : item.title === "Literature"
                      ? navigation.navigate(navigationStrings.POTHIS_SAHIBS)
                      : item.title === "Sehaj Path"
                      ? navigation.navigate(navigationStrings.SEHAJ_PATH)
                      : item.title === "Sundar Gutka"
                      ? navigation.navigate(navigationStrings.SUNDAR_GUTKA)
                      : null
                  }
                >
                  <ListView height={height && height}>
                    <ImageView>
                      <ImageWrapper1 source={item.iamge} />
                    </ImageView>

                    <TextWrapper style={{ marginTop: 5 }}>
                      {item.title}
                    </TextWrapper>
                  </ListView>
                </TouchableOpacity>
              );
            }}
          />
        </MainWrapper1>
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
        {tab === 0 ? (
          <SearchWrapper>
            <InputWrapper width={70}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(navigationStrings.SEARCH_SCREEN, {
                    searchType: 0,
                  });
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.POTHI_SHAIB_VIEW);
              }}
            >
              <ImageWrapper
                style={{
                  marginLeft: 10,
                  height: 23,
                  width: 23,
                  paddingRight: 15,
                }}
                source={icRoundBack}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.FAVOURITE);
              }}
            >
              <ImageWrapper source={icAccentStart} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.PAKANTI_SEARCH);
              }}
            >
              <Image source={icThreeDots} />
            </TouchableOpacity>
          </SearchWrapper>
        ) : (
          <SearchWrapper>
            <InputWrapper width={70}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(navigationStrings.SEARCH_SCREEN, {
                    searchType: 1,
                  });
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

            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.FAVOURITE);
              }}
            >
              <ImageWrapper source={icAccentStart} />
            </TouchableOpacity>
          </SearchWrapper>
        )}
      </BottomWrapper>
    </MainWrapper>
  );
};

export default withTheme(SplashWithSearchBar);

type ColorProps = {
  color: string;
  backgroundColor: string;
  width: string;
  height: string;
};

const VerticleWrapper = styled.View`
  align-items: flex-start;
  justify-content: space-evenly;
  bottom: 0px;
  background-color: ${({ backgroundColor }: any) => "red"};
`;
const ListTile = styled.View`
  align-items: center;
`;

const InputWrapper = styled.View<ColorProps>`
  width: ${({ width }: any) => width}%;
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
  margin-top: -15px;
`;

const BottomWrapper = styled.View`
  position: absolute;
  bottom: 0px;
  height: 110px;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;

const ImageView = styled.View`
  height: 40px;
  align-items: center;
  width: 50%;
`;

const ListView = styled.View<ColorProps>`
  width:100%
  justify-content:center;
  align-items:center;
  height: ${({ height }: any) => height / 3}px;

`;

const TextWrapperAccent = styled.Text`
  width: 100%;
  top: -25px;
  text-align: center;
  color: ${({ theme }: any) => theme.colors.accentColor};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle}px;
`;

const TextWrapper = styled.Text`
  margin-top: 20px;
  text-align: center;
  color: ${({ theme }: any) => theme.colors.textWhite};
`;

const ImageWrapper1 = styled.Image``;

const ImageWrapper = styled.Image`
  margin-right: 15px;
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
  flex: 1;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;
