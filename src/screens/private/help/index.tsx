import React, { useEffect } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { useTypedSelector } from "@root/hooks/useTypedSelector";

const Help = ({ navigation }) => {
  const { colors }: any = useTheme();
  const { modeState } = useTypedSelector((state) => state.mode);

  useEffect(() => {
    navigation.setOptions({ title: "Acknowledgements" });
  }, []);
  return (
    <MainWrapper>
      <TextWrapperYellow color={colors.blueYellow}>SubTitle</TextWrapperYellow>
      <TextWrapperYellow
        color={modeState ? colors.textWhite : colors.textBlack}
      >
        Descriptions or body copy can be in this typography style. Descriptions
        or body copy can be in this typography style. Descriptions or body copy
        can be in this typography style.
      </TextWrapperYellow>
    </MainWrapper>
  );
};

export default withTheme(Help);

type Porps = {
  color: string;
};
const TextWrapperYellow = styled.Text`
  color: ${({ color }: any) => color};
  margin-top: 8px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle}px;
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
