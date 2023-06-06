import React from "react";
import { Appearance, View } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { useTypedSelector } from "@root/hooks/useTypedSelector";

const NoteDetail = () => {
  const mode = Appearance.getColorScheme();
  const { colors }: any = useTheme();
  const { modeState } = useTypedSelector((state) => state.mode);

  return (
    <MainWrapper>
      <HeaderText
        style={{ padding: 10, marginTop: 10 }}
        color={modeState ? colors.yellow : colors.textBlack}
        width={100}
      >
        Content to be Added
      </HeaderText>

      <DescText color={modeState ? colors.blue : colors.gold}>
        Source, Ang 324, Pangti 9
      </DescText>

      <ContentView>
        This is a full version of the note and this body text can go as long as
        the note is.
      </ContentView>
    </MainWrapper>
  );
};

export default withTheme(NoteDetail);

type TextProps = {
  height: string;
  backgroundColor: string;
  width: string;
  color: string;
  textAlign: string;
};

const ContentView = styled.Text`
padding:10px
  fontsize: ${({ theme }: any) => theme.fontSize[0].cardSmallText};
  color: ${({ theme }: any) => theme.colors.blueWhite};

`;

const DescText = styled.Text<TextProps>`
  color: ${({ color }: any) => color};
  margin-left:10px
  fontsize: ${({ theme }: any) => theme.fontSize[0].cardSmallText};
`;

const HeaderText = styled.Text<TextProps>`
  width: ${({ width }: any) => width}%;
  text-align: ${({ textAlign }: any) => textAlign};
  color: ${({ color }: any) => color};
  fontsize: 10px;
`;

const MainWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
