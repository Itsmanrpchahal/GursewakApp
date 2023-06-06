import React from "react";
import { View } from "react-native";
import styled, { withTheme } from "styled-components/native";
import { icBack, icBackSong, icCanada, icNextSong, icPlay } from "../assets";
import { Slider } from "react-native-elements";
import { Animated } from "react-native";

const MusicComponent = () => {
  return (
    <MainWrapper>
      <HorizontalWrapper>
        <ImageWrapper source={icCanada}></ImageWrapper>
        <VerticleWrapper>
          <HorizontalWrapper style={{ marginRight: 50 }}>
            <VerticleWrapper>
              <TitleWrapper>Track Name</TitleWrapper>
              <DescWrapper>Description</DescWrapper>
            </VerticleWrapper>
            <ImageWrapper1 source={icBackSong}></ImageWrapper1>
            <ImageWrapper1 source={icPlay}></ImageWrapper1>
            <ImageWrapper1 source={icNextSong}></ImageWrapper1>
          </HorizontalWrapper>

          <Slider
            minimumValue={0}
            maximumValue={100}
            value={50}
            onValueChange={(value) => console.log(value)}
            trackStyle={{ height: 5, backgroundColor: "#FFFFFF" }}
            thumbStyle={{
              height: 20,
              width: 20,
              backgroundColor: "transparent",
            }}
          />
        </VerticleWrapper>
      </HorizontalWrapper>
    </MainWrapper>
  );
};

export default withTheme(MusicComponent);

const DescWrapper = styled.Text`
  margin-left: 16px;
  color: ${({ theme }: any) => theme.colors.textWhite};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSmallText};
`;

const TitleWrapper = styled.Text`
  margin-left: 16px;
  color: ${({ theme }: any) => theme.colors.yellow};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle};
`;

const VerticleWrapper = styled.View`
  width: 80%;
`;

const ImageWrapper1 = styled.Image`
  margin-left: 16px;
`;

const ImageWrapper = styled.Image`
  height: 45px;
  width: 45px;
  background-color: white;
  border-radius: 30px;
`;
const HorizontalWrapper = styled.View`
  flex-direction: row;
`;

const MainWrapper = styled.View`
  height: 90px;
  padding:16px
  background-color: ${({ theme }: any) => theme.colors.secondary};
`;
