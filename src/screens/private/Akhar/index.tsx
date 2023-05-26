import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "styled-components";
import styled, { withTheme } from "styled-components/native";
import { data } from "../../../utils/constants";

const Akhar = () => {
  const [tab, setTab] = useState(0);
  const { colors }: any = useTheme();
  const [view, setView] = useState(35);
  const [show, setShow] = useState(false);

  return (
    <MainWrapper>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <ButtonWrapper>
        <TouchableOpacity
          style={{ width: "50%", marginRight: 3 }}
          onPress={() => {
            setTab(0);
            setView(35);
          }}
        >
          <ButtonVerticle>
            <TextWrapperBottom color={colors.akharTextBtnColor}>
              Learn Mode
            </TextWrapperBottom>
            <ViewDivider
              backgroundColor={
                tab === 0 ? colors.akharTextBtnColor : colors.textWhite
              }
            />
          </ButtonVerticle>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ width: "50%", marginLeft: 3 }}
          onPress={() => {
            setTab(1);
            setView(35);
          }}
        >
          <ButtonVerticle>
            <TextWrapperBottom color={colors.akharTextBtnColor}>
              Test Mode
            </TextWrapperBottom>
            <ViewDivider
              backgroundColor={
                tab === 1 ? colors.akharTextBtnColor : colors.textWhite
              }
            />
          </ButtonVerticle>
        </TouchableOpacity>
      </ButtonWrapper>

      <ScrollView>
        <View>
          <HorizontalWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={view === 0 ? colors.inactive : colors.LightTheme}
            >
              <TouchableOpacity
                onPress={() => {
                  setView(0);
                }}
              >
                <AkharText>{data[0].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={view === 1 ? colors.inactive : colors.LightTheme}
            >
              <TouchableOpacity
                onPress={() => {
                  setView(1);
                }}
              >
                <AkharText>{data[1].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={view === 2 ? colors.inactive : colors.LightTheme}
            >
              <TouchableOpacity
                onPress={() => {
                  setView(2);
                }}
              >
                <AkharText>{data[2].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={view === 3 ? colors.inactive : colors.LightTheme}
            >
              <TouchableOpacity
                onPress={() => {
                  setView(3);
                }}
              >
                <AkharText>{data[3].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={view === 4 ? colors.inactive : colors.LightTheme}
            >
              <TouchableOpacity
                onPress={() => {
                  setView(4);
                }}
              >
                <AkharText>{data[4].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
          </HorizontalWrapper>

          {view === 0 ||
          view === 1 ||
          view === 2 ||
          view === 3 ||
          view === 4 ? (
            <HiddenView>
              <TitleText>Content to be added</TitleText>
            </HiddenView>
          ) : null}

          <HorizontalWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={view === 5 ? colors.inactive : colors.LightTheme}
            >
              <TouchableOpacity
                onPress={() => {
                  setView(5);
                }}
              >
                <AkharText>{data[5].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={view === 6 ? colors.inactive : colors.LightTheme}
            >
              <TouchableOpacity
                onPress={() => {
                  setView(6);
                }}
              >
                <AkharText>{data[6].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={view === 7 ? colors.inactive : colors.LightTheme}
            >
              <TouchableOpacity
                onPress={() => {
                  setView(7);
                }}
              >
                <AkharText>{data[7].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={view === 8 ? colors.inactive : colors.LightTheme}
            >
              <TouchableOpacity
                onPress={() => {
                  setView(8);
                }}
              >
                <AkharText>{data[8].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={view === 9 ? colors.inactive : colors.LightTheme}
            >
              <TouchableOpacity
                onPress={() => {
                  setView(9);
                }}
              >
                <AkharText>{data[9].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
          </HorizontalWrapper>
          {view === 5 ||
          view === 6 ||
          view === 7 ||
          view === 8 ||
          view === 9 ? (
            <HiddenView>
              <TitleText>Content to be added</TitleText>
            </HiddenView>
          ) : null}

          <HorizontalWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 10 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(10);
                }}
              >
                <AkharText>{data[10].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 11 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(11);
                }}
              >
                <AkharText>{data[11].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 12 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(12);
                }}
              >
                <AkharText>{data[12].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 13 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(13);
                }}
              >
                <AkharText>{data[13].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 14 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(14);
                }}
              >
                <AkharText>{data[14].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
          </HorizontalWrapper>

          {view === 10 ||
          view === 11 ||
          view === 12 ||
          view === 13 ||
          view === 14 ? (
            <HiddenView>
              <TitleText>Content to be added</TitleText>
            </HiddenView>
          ) : null}

          <HorizontalWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 15 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(15);
                }}
              >
                <AkharText>{data[15].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 16 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(16);
                }}
              >
                <AkharText>{data[16].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 17 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(17);
                }}
              >
                <AkharText>{data[17].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 18 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(18);
                }}
              >
                <AkharText>{data[18].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 19 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(19);
                }}
              >
                <AkharText>{data[19].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
          </HorizontalWrapper>

          {view === 15 ||
          view === 16 ||
          view === 17 ||
          view === 18 ||
          view === 19 ? (
            <HiddenView>
              <TitleText>Content to be added</TitleText>
            </HiddenView>
          ) : null}

          <HorizontalWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 20 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(20);
                }}
              >
                <AkharText>{data[20].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 21 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(21);
                }}
              >
                <AkharText>{data[21].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 22 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(22);
                }}
              >
                <AkharText>{data[22].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 23 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(23);
                }}
              >
                <AkharText>{data[23].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 24 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(24);
                }}
              >
                <AkharText>{data[24].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
          </HorizontalWrapper>

          {view === 20 ||
          view === 21 ||
          view === 22 ||
          view === 23 ||
          view === 24 ? (
            <HiddenView>
              <TitleText>Content to be added</TitleText>
            </HiddenView>
          ) : null}

          <HorizontalWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 25 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(25);
                }}
              >
                <AkharText>{data[25].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 26 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(26);
                }}
              >
                <AkharText>{data[26].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 27 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(27);
                }}
              >
                <AkharText>{data[27].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 28 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(28);
                }}
              >
                <AkharText>{data[28].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 29 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(29);
                }}
              >
                <AkharText>{data[29].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
          </HorizontalWrapper>

          {view === 25 ||
          view === 26 ||
          view === 27 ||
          view === 28 ||
          view === 29 ? (
            <HiddenView>
              <TitleText>Content to be added</TitleText>
            </HiddenView>
          ) : null}

          <HorizontalWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 30 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(30);
                }}
              >
                <AkharText>{data[30].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 31 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(31);
                }}
              >
                <AkharText>{data[31].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 32 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(32);
                }}
              >
                <AkharText>{data[32].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 33 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(33);
                }}
              >
                <AkharText>{data[33].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
            <AkharWrapper
              width={"18%"}
              backgroundColor={
                view === 34 ? colors.inactive : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setView(34);
                }}
              >
                <AkharText>{data[34].title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
          </HorizontalWrapper>

          {view === 20 ||
          view === 31 ||
          view === 32 ||
          view === 33 ||
          view === 34 ? (
            <HiddenView>
              <TitleText>Content to be added</TitleText>
            </HiddenView>
          ) : null}
        </View>
      </ScrollView>
    </MainWrapper>
  );
};

export default withTheme(Akhar);

type ColorProps = {
  color: string;
  backgroundColor: string;
  height: string;
  width: string;
};

const HorizontalWrapper = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const HiddenView = styled.View`
  width: 90%;
  height: 50px;
  margin:0px 16px;
  border-radius:20px
  background-color: ${({ theme }: any) => theme.colors.textWhite};
`;

const TitleText = styled.Text`
  width: 100%;
  margin-left: 5px;
  margin-top: 5px;
  color: ${({ theme }: any) => theme.colors.blueYellow};
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
`;

const AkharText = styled.Text`
  width: 100%;
  text-align: center;
  color: ${({ theme }: any) => theme.colors.text};
  font-size: ${({ theme }: any) => theme.fontSize[0].akharText};
`;

const AkharWrapper = styled.View<ColorProps>`
  justify-content: center;
  height: 70px;
  width: ${({ width }: any) => width};
  margin: 3px;
  padding: 5px;
  border-radius: 55px;
  background-color: ${({ backgroundColor }: any) => backgroundColor};
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

const SearchWrapper = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

const MainWrapper = styled.View`
  align-items: center;
  flex: 1;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.backgroundAkhar};
`;
