import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import { icDarkBar, icLightBar } from "../../../assets";
import { useTheme } from "styled-components";

const DailyDoseTab = () => {
  const { modeState } = useTypedSelector((state) => state.mode);
  const { colors }: any = useTheme();
  return (
    <MainWrapper>
      <ImageWrapper source={modeState ? icDarkBar : icLightBar}></ImageWrapper>

      <TitleWrapper>RECENT</TitleWrapper>
      <ItemWrapper backgroundColor={modeState ? "#0D1C39" : colors.textWhite}>
        <TextWrapper>
          Baba jee’s latest bachan can go here. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        </TextWrapper>
      </ItemWrapper>
    </MainWrapper>
  );
};

export default withTheme(DailyDoseTab);

type BackgroundProps = {
  backgroundColor: string;
};

const TextWrapper = styled.Text`
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
  color: ${({ theme }: any) => theme.colors.blueWhite};
`;

const ItemWrapper = styled.View<BackgroundProps>`
  background-color: ${({ backgroundColor }: any) => backgroundColor};
  padding:10px
  top:10px
  border-radius: 10px;
`;

const TitleWrapper = styled.Text`
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
  color: ${({ theme }: any) => theme.colors.blueYellow};
  margin-top: 10px;
`;

const ImageWrapper = styled.Image`
  align-content: center;
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
