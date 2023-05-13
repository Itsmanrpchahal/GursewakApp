import React from "react";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";

const PothiSahibViewer = () => {
  return <MainWrapper></MainWrapper>;
};

export default withTheme(PothiSahibViewer);

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;
