import React from "react";
import { View } from "react-native";
import styled, { withTheme } from "styled-components/native";
import { icCanada } from "../assets";

const MusicComponent = () => {
  return (
    <MainWrapper>
      <HorizontalWrapper>
        <ImageWrapper source={icCanada}></ImageWrapper>
        <VerticleWrapper>
          <TitleWrapper>Track Name</TitleWrapper>
          <DescWrapper>Description</DescWrapper>
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

const VerticleWrapper = styled.View``;

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
  height: 100px;
  padding:16px
  background-color: ${({ theme }: any) => theme.colors.secondary};
`;
