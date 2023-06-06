import React, { useEffect, useState } from "react";
import { Animated, Text } from "react-native";
import { withTheme } from "styled-components/native";
import styled from "styled-components/native";
import ProgressBar from "react-native-progress/Bar";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import { icblueDots, icshareYellow } from "../../../assets";

const KamaiyiTab = () => {
  const { modeState } = useTypedSelector((state) => state.mode);

  return (
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
          <ImageWrapper
            source={modeState ? icshareYellow : icblueDots}
          ></ImageWrapper>
        </HorizontalWrapper>
        <ProgressBar
          style={{ border: 10, margin: 10 }}
          progress={0.3}
          width={320}
          height={20}
        />
      </ItemWrapper>
    </MainWrapper>
  );
};

export default withTheme(KamaiyiTab);

const ImageWrapper = styled.Image``;

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
  margin-bottom: 10px;
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
