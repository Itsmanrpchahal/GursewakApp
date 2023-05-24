import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";

const MediaPlayer = () => {
  return <MainWrapper></MainWrapper>;
};

export default withTheme(MediaPlayer);

const MainWrapper = styled.View`
  flex: 1;x
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
