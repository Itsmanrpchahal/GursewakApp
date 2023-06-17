import React from "react";
import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { icDragMove, icblueDots, icshareYellow } from "../../../assets";
import { data } from "../../../utils/constants";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import ProgressBar from "react-native-progress/Bar";
import { useTheme } from "styled-components";

const HomeTab = () => {
  const { modeState } = useTypedSelector((state) => state.mode);
  const { colors }: any = useTheme();
  return (
    <MainWrapper>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => {
          return (
            <ItemWrapper
              style={{
                shadowOffset: { width: -2, height: 4 },
                shadowColor: "#52006A",
                shadowOpacity: 0.2,
                shadowRadius: 7,
              }}
            >
              <HorizontalWrapper>
                <TitleWrapper>DAILY DOSE</TitleWrapper>
                <ImageWrapper
                  source={modeState ? icshareYellow : icblueDots}
                ></ImageWrapper>
              </HorizontalWrapper>
              {item.index === 4 ? (
                <View>
                  <TitleWrapper style={{ marginLeft: 10, marginTop: 10 }}>
                    Mool Mantar Jaap
                  </TitleWrapper>
                  <View style={{ position: "relative", padding: 10 }}>
                    <BackView
                      backgroundColor={
                        modeState ? colors.yellow : colors.primary
                      }
                    ></BackView>
                    <HorizontalWrapper1>
                      <UpperView
                        backgroundColor={
                          modeState ? colors.yellow : colors.primary
                        }
                        width={"40%"}
                      >
                        <TextNumber
                          color={
                            modeState ? colors.textBlack : colors.textWhite
                          }
                        >
                          12
                        </TextNumber>
                      </UpperView>
                    </HorizontalWrapper1>
                  </View>

                  <TitleWrapper style={{ marginLeft: 10 }}>
                    Name of Sehaj Paath
                  </TitleWrapper>
                  <View style={{ position: "relative", padding: 10 }}>
                    <BackView
                      backgroundColor={
                        modeState ? colors.yellow : colors.primary
                      }
                    ></BackView>
                    <HorizontalWrapper1>
                      <UpperView
                        backgroundColor={
                          modeState ? colors.yellow : colors.primary
                        }
                        width={"40%"}
                      >
                        <TextNumber
                          color={
                            modeState ? colors.textBlack : colors.textWhite
                          }
                        >
                          12
                        </TextNumber>
                      </UpperView>
                    </HorizontalWrapper1>
                  </View>

                  <TitleWrapper style={{ marginLeft: 10 }}>
                    Counter Name
                  </TitleWrapper>
                  <View
                    style={{
                      position: "relative",
                      padding: 10,
                      marginTop: -1,
                    }}
                  >
                    <BackView
                      backgroundColor={
                        modeState ? colors.yellow : colors.primary
                      }
                    ></BackView>
                    <HorizontalWrapper1>
                      <UpperView
                        backgroundColor={
                          modeState ? colors.yellow : colors.primary
                        }
                        width={"40%"}
                      >
                        <TextNumber
                          color={
                            modeState ? colors.textBlack : colors.textWhite
                          }
                        >
                          12
                        </TextNumber>
                      </UpperView>
                    </HorizontalWrapper1>
                  </View>
                </View>
              ) : (
                <TitleWrapper1>
                  Baba jee’s latest bachan can go here. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis
                </TitleWrapper1>
              )}

              <ImageView>
                <ImageWrapper source={icDragMove}></ImageWrapper>
              </ImageView>
            </ItemWrapper>
          );
        }}
      ></FlatList>
    </MainWrapper>
  );
};

export default withTheme(HomeTab);

type Props = {
  color: string;
  fontSize: string;
  backgroundColor: string;
  width: string;
};

const ImageView = styled.View`
  align-items: flex-end;
  padding: 10px;
`;

const ImageWrapper = styled.Image``;

const BackView = styled.View<Props>`
    width:100%
    margin-top:10px;
    border-radius:10px;
    height:15px
    opacity:0.3;
    background-color: ${({ backgroundColor }: any) => backgroundColor};

`;

const TextNumber = styled.Text`
  padding-right: 5px;
  text-align:right
  color: ${({ color }: any) => color};
  font-size: ${({ theme }: any) => theme.fontSize[0].cardSmallText};
`;

const UpperView = styled.View<Props>`
    width:${({ width }: any) => width};
    margin-top:10px;
    border-radius:10px;
    height:15px
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const HorizontalWrapper1 = styled.View`
    width:100%
  flex-direction: row;
  position: absolute;
  padding:10px
`;

const HorizontalWrapper = styled.View`
  background-color: ${({ theme }: any) => theme.colors.primaryYellow};
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const TitleWrapper1 = styled.Text`
padding:10px
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
  color: ${({ theme }: any) => theme.colors.blueWhite};
`;

const TitleWrapper = styled.Text`
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
  color: ${({ theme }: any) => theme.colors.blueYellow};
`;

const ItemWrapper = styled.View`
  background-color: ${({ theme }: any) => theme.colors.secondaryWhite};
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
