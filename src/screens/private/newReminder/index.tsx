import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";

const NewReminder = () => {
  return <MainWrapper></MainWrapper>;
};

export default withTheme(NewReminder);

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
