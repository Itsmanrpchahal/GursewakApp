import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import styled, { withTheme } from "styled-components/native";

const AboutApp = () => {
  const { colors }: any = useTheme();
  return (
    <MainWrapper>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <TextWrapper>Subtitle</TextWrapper>
      <TextDesc style={{ marginTop: 5 }}>
        For example, if you are unsure whether the shabad you’re searching has
        bIcwr or vIcwr, enabling Similar Letters will display results for both.
      </TextDesc>
    </MainWrapper>
  );
};

export default withTheme(AboutApp);

const TextDesc = styled.Text`
  color: ${({ theme }: any) => theme.colors.textWhite};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardDate}px;
  font-weight: 500;
`;

const TextWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.accentColor};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle}px;
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;
