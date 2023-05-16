import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";

const CustomDrawer = () => {
  return (
    <ItemWrapper>
      <TextWrapper>ਛੱਕਾ ੭</TextWrapper>
    </ItemWrapper>
  );
};

export default withTheme(CustomDrawer);

const TextWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.PothiTextSubDesc};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].pothiTextDecs}px;
`;

const ItemWrapper = styled.View`
  height: 55px;
`;
