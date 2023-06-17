import React, { useEffect, useState } from "react";
import { Animated, ScrollView, Text, View } from "react-native";
import { withTheme } from "styled-components/native";
import styled from "styled-components/native";
import ProgressBar from "react-native-progress/Bar";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import {
  icEditBlue,
  icEditYellow,
  icShareArrowBlue,
  icShareArrowYellow,
  icblueDots,
  icshareYellow,
} from "../../../assets";
import { useTheme } from "styled-components";

const KamaiyiTab = () => {
  const { modeState } = useTypedSelector((state) => state.mode);
  const { colors }: any = useTheme();
  return (
    <ScrollView
      style={{ backgroundColor: colors.pankantiBC }}
      pagingEnabled={true}
    >
      <MainWrapper>
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
            <HorizontalWrapper>
              <ImageWrapper
                source={modeState ? icEditYellow : icEditBlue}
              ></ImageWrapper>
              <ImageWrapper
                source={modeState ? icShareArrowYellow : icShareArrowBlue}
              ></ImageWrapper>
            </HorizontalWrapper>
          </HorizontalWrapper>
          <View style={{ position: "relative", padding: 10 }}>
            <BackView
              backgroundColor={modeState ? colors.yellow : colors.primary}
            ></BackView>
            <HorizontalWrapper1>
              <UpperView
                backgroundColor={modeState ? colors.yellow : colors.primary}
                width={"40%"}
              >
                <TextNumber
                  color={modeState ? colors.textBlack : colors.textWhite}
                >
                  12
                </TextNumber>
              </UpperView>
            </HorizontalWrapper1>
          </View>

          <TextHorizontalWrapper>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              Daily Goal
            </TextTitle>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              Total Goal
            </TextTitle>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              125 000
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              Completed
            </TextTitle>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              98 202
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper style={{ marginBottom: 10 }}>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              Deadline
            </TextTitle>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              July 02, 2021
            </TextTitle>
          </TextHorizontalWrapper>
        </ItemWrapper>

        <ItemWrapper
          style={{
            shadowOffset: { width: -2, height: 4 },
            shadowColor: "#52006A",
            shadowOpacity: 0.2,
            shadowRadius: 7,
          }}
        >
          <HorizontalWrapper>
            <TitleWrapper>GURMANTAR JAAP</TitleWrapper>
            <HorizontalWrapper>
              <ImageWrapper
                source={modeState ? icEditYellow : icEditBlue}
              ></ImageWrapper>
              <ImageWrapper
                source={modeState ? icShareArrowYellow : icShareArrowBlue}
              ></ImageWrapper>
            </HorizontalWrapper>
          </HorizontalWrapper>
          <View style={{ position: "relative", padding: 10 }}>
            <BackView
              backgroundColor={modeState ? colors.yellow : colors.primary}
            ></BackView>
            <HorizontalWrapper1>
              <UpperView
                backgroundColor={modeState ? colors.yellow : colors.primary}
                width={"40%"}
              >
                <TextNumber
                  color={modeState ? colors.textBlack : colors.textWhite}
                >
                  12
                </TextNumber>
              </UpperView>
            </HorizontalWrapper1>
          </View>

          <TextHorizontalWrapper>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              Daily Goal
            </TextTitle>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper style={{ marginBottom: 10 }}>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              Total Goal
            </TextTitle>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              125 000
            </TextTitle>
          </TextHorizontalWrapper>
        </ItemWrapper>

        <ItemWrapper
          style={{
            shadowOffset: { width: -2, height: 4 },
            shadowColor: "#52006A",
            shadowOpacity: 0.2,
            shadowRadius: 7,
          }}
        >
          <HorizontalWrapper>
            <TitleWrapper>GURMANTAR JAAP</TitleWrapper>
            <HorizontalWrapper>
              <ImageWrapper
                source={modeState ? icEditYellow : icEditBlue}
              ></ImageWrapper>
              <ImageWrapper
                source={modeState ? icShareArrowYellow : icShareArrowBlue}
              ></ImageWrapper>
            </HorizontalWrapper>
          </HorizontalWrapper>
          <View style={{ position: "relative", padding: 10 }}>
            <BackView
              backgroundColor={modeState ? colors.yellow : colors.primary}
            ></BackView>
            <HorizontalWrapper1>
              <UpperView
                backgroundColor={modeState ? colors.yellow : colors.primary}
                width={"40%"}
              >
                <TextNumber
                  color={modeState ? colors.textBlack : colors.textWhite}
                >
                  12
                </TextNumber>
              </UpperView>
            </HorizontalWrapper1>
          </View>

          <TextHorizontalWrapper>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              NITNEM
            </TextTitle>
            <TextTitle
              style={{
                textDecorationLine: "line-through",
              }}
              color={modeState ? colors.textWhite : colors.primary}
            >
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper>
            <TextTitle
              color={modeState ? colors.textWhite : colors.primary}
            ></TextTitle>
            <TextTitle
              style={{
                textDecorationLine: "line-through",
              }}
              color={modeState ? colors.textWhite : colors.primary}
            >
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper>
            <TextTitle
              color={modeState ? colors.textWhite : colors.primary}
            ></TextTitle>
            <TextTitle
              style={{
                textDecorationLine: "line-through",
              }}
              color={modeState ? colors.textWhite : colors.primary}
            >
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper>
            <TextTitle
              color={modeState ? colors.textWhite : colors.primary}
            ></TextTitle>
            <TextTitle
              style={{
                textDecorationLine: "line-through",
              }}
              color={modeState ? colors.textWhite : colors.primary}
            >
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper style={{ marginBottom: 10 }}>
            <TextTitle
              color={modeState ? colors.textWhite : colors.primary}
            ></TextTitle>
            <TextTitle
              style={{
                textDecorationLine: "line-through",
              }}
              color={modeState ? colors.textWhite : colors.primary}
            >
              125 000
            </TextTitle>
          </TextHorizontalWrapper>
        </ItemWrapper>

        <ItemWrapper
          style={{
            shadowOffset: { width: -2, height: 4 },
            shadowColor: "#52006A",
            shadowOpacity: 0.2,
            shadowRadius: 7,
          }}
        >
          <HorizontalWrapper>
            <TitleWrapper>PERSONAL SEHAJ PAATH</TitleWrapper>
            <HorizontalWrapper>
              <ImageWrapper
                source={modeState ? icEditYellow : icEditBlue}
              ></ImageWrapper>
              <ImageWrapper
                source={modeState ? icShareArrowYellow : icShareArrowBlue}
              ></ImageWrapper>
            </HorizontalWrapper>
          </HorizontalWrapper>
          <View style={{ position: "relative", padding: 10 }}>
            <BackView
              backgroundColor={modeState ? colors.yellow : colors.primary}
            ></BackView>
            <HorizontalWrapper1>
              <UpperView
                backgroundColor={modeState ? colors.yellow : colors.primary}
                width={"40%"}
              >
                <TextNumber
                  color={modeState ? colors.textBlack : colors.textWhite}
                >
                  12
                </TextNumber>
              </UpperView>
            </HorizontalWrapper1>
          </View>

          <TextHorizontalWrapper>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              Daily Goal
            </TextTitle>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              Total Goal
            </TextTitle>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              Completed
            </TextTitle>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper style={{ marginBottom: 10 }}>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              Deadline
            </TextTitle>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              101
            </TextTitle>
          </TextHorizontalWrapper>
        </ItemWrapper>

        <ItemWrapper
          style={{
            shadowOffset: { width: -2, height: 4 },
            shadowColor: "#52006A",
            shadowOpacity: 0.2,
            shadowRadius: 7,
          }}
        >
          <HorizontalWrapper>
            <TitleWrapper>EXERCISE</TitleWrapper>
            <HorizontalWrapper>
              <ImageWrapper
                source={modeState ? icEditYellow : icEditBlue}
              ></ImageWrapper>
              <ImageWrapper
                source={modeState ? icShareArrowYellow : icShareArrowBlue}
              ></ImageWrapper>
            </HorizontalWrapper>
          </HorizontalWrapper>
          <View style={{ position: "relative", padding: 10 }}>
            <BackView
              backgroundColor={modeState ? colors.yellow : colors.primary}
            ></BackView>
            <HorizontalWrapper1>
              <UpperView
                backgroundColor={modeState ? colors.yellow : colors.primary}
                width={"40%"}
              >
                <TextNumber
                  color={modeState ? colors.textBlack : colors.textWhite}
                >
                  12
                </TextNumber>
              </UpperView>
            </HorizontalWrapper1>
          </View>

          <TextHorizontalWrapper>
            <TextTitle color={modeState ? colors.textWhite : colors.primary}>
              Daily Goal
            </TextTitle>
            <TextTitle
              style={{
                textDecorationLine: "line-through",
              }}
              color={modeState ? colors.textWhite : colors.primary}
            >
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper>
            <TextTitle
              color={modeState ? colors.textWhite : colors.primary}
            ></TextTitle>
            <TextTitle
              style={{
                textDecorationLine: "line-through",
              }}
              color={modeState ? colors.textWhite : colors.primary}
            >
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper>
            <TextTitle
              color={modeState ? colors.textWhite : colors.primary}
            ></TextTitle>
            <TextTitle
              style={{
                textDecorationLine: "line-through",
              }}
              color={modeState ? colors.textWhite : colors.primary}
            >
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper>
            <TextTitle
              color={modeState ? colors.textWhite : colors.primary}
            ></TextTitle>
            <TextTitle
              style={{
                textDecorationLine: "line-through",
              }}
              color={modeState ? colors.textWhite : colors.primary}
            >
              101
            </TextTitle>
          </TextHorizontalWrapper>

          <TextHorizontalWrapper style={{ marginBottom: 10 }}>
            <TextTitle
              color={modeState ? colors.textWhite : colors.primary}
            ></TextTitle>
            <TextTitle
              style={{
                textDecorationLine: "line-through",
              }}
              color={modeState ? colors.textWhite : colors.primary}
            >
              125 000
            </TextTitle>
          </TextHorizontalWrapper>
        </ItemWrapper>
      </MainWrapper>
    </ScrollView>
  );
};

export default withTheme(KamaiyiTab);

type Props = {
  color: string;
  fontSize: string;
  backgroundColor: string;
  width: string;
};

const TextTitle = styled.Text<Props>`
  width: 50%;
  color: ${({ color }: any) => color};
  font-size: ${({ theme }: any) => theme.fontSize[0].cardSmallText};
`;

const TextSign = styled.Text`
  padding: 5px;
  color: ${({ color }: any) => color};
  font-size: ${({ theme }: any) => theme.fontSize[0].cardSmallText};
`;

const TextNumber = styled.Text`
  padding: 5px;
  text-align:right
  color: ${({ color }: any) => color};
  font-size: ${({ theme }: any) => theme.fontSize[0].cardSmallText};
`;

const UpperView = styled.View<Props>`
    width:${({ width }: any) => width};
    margin-top:10px;
    border-radius:10px;
    height:25px
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const TextHorizontalWrapper = styled.View`
  width:100%
  flex-direction: row;
  margin-top:10px
  margin-left:10px;
`;

const HorizontalWrapper1 = styled.View`
    width:100%
  flex-direction: row;
  position: absolute;
  padding:10px
`;

const BackView = styled.View<Props>`
    width:100%
    margin-top:10px;
    border-radius:10px;
    height:25px
    opacity:0.3;
    background-color: ${({ backgroundColor }: any) => backgroundColor};

`;

const ImageWrapper = styled.Image`
  margin-left: 16px;
`;

const TitleWrapper = styled.Text`
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
  color: ${({ theme }: any) => theme.colors.blueYellow};
`;

const HorizontalWrapper = styled.View`
  background-color: ${({ theme }: any) => theme.colors.primaryYellow};
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const ItemWrapper = styled.View`
  background-color: ${({ theme }: any) => theme.colors.secondaryWhite};
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
