import React from "react";
import { View } from "react-native";
import styled, { withTheme } from "styled-components/native";

const MusicComponent = () => {
  return <MainWrapper></MainWrapper>;
};

export default withTheme(MusicComponent);

const MainWrapper = styled.View`
  height: 100px;
  background-color: ${({ theme }: any) => theme.colors.secondary};
`;
