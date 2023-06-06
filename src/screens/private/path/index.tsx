import React from "react";
import styled, { withTheme } from "styled-components/native";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import { useTheme } from "styled-components";
import { View } from "react-native";

const Path = () => {
  const { modeState } = useTypedSelector((state) => state.mode);
  const { colors }: any = useTheme();

  return (
    <MainWrapper>
      <TitleWrappewr color={modeState ? colors.yellow : colors.primary}>
        Content to be Added
      </TitleWrappewr>
      <TitleSubWrapper color={modeState ? colors.textWhite : colors.primary}>
        Content to be Added
      </TitleSubWrapper>

      <View style={{ position: "relative" }}>
        <BackView
          backgroundColor={modeState ? colors.yellow : colors.primary}
        ></BackView>
        <HorizontalWrapper>
          <UpperView
            backgroundColor={modeState ? colors.yellow : colors.primary}
            width={"40%"}
          >
            <TextNumber color={modeState ? colors.textBlack : colors.textWhite}>
              12
            </TextNumber>
          </UpperView>
        </HorizontalWrapper>
      </View>
      <TitleSubWrapper color={modeState ? colors.textWhite : colors.primary}>
        Camp SP
      </TitleSubWrapper>

      <View style={{ position: "relative" }}>
        <BackView
          backgroundColor={modeState ? colors.yellow : colors.primary}
        ></BackView>
        <HorizontalWrapper>
          <UpperView
            backgroundColor={modeState ? colors.yellow : colors.primary}
            width={"60%"}
          >
            <TextNumber color={modeState ? colors.textBlack : colors.textWhite}>
              224
            </TextNumber>
          </UpperView>
        </HorizontalWrapper>
      </View>

      <TitleSubWrapper color={modeState ? colors.textWhite : colors.primary}>
        SP
      </TitleSubWrapper>

      <View style={{ position: "relative" }}>
        <BackView
          backgroundColor={modeState ? colors.yellow : colors.primary}
        ></BackView>
        <HorizontalWrapper>
          <UpperView
            backgroundColor={modeState ? colors.yellow : colors.primary}
            width={"27%"}
          >
            <TextNumber color={modeState ? colors.textBlack : colors.textWhite}>
              12
            </TextNumber>
          </UpperView>
        </HorizontalWrapper>
      </View>

      <TitleWrappewr color={modeState ? colors.yellow : colors.primary}>
        Content to be Added
      </TitleWrappewr>
    </MainWrapper>
  );
};

export default withTheme(Path);

type Props = {
  color: string;
  fontSize: string;
  backgroundColor: string;
  width: string;
};

const TextNumber = styled.Text`
  padding-right: 5px;
  text-align:right
  color: ${({ color }: any) => color};
  font-size: ${({ theme }: any) => theme.fontSize[0].cardSmallText};
`;

const HorizontalWrapper = styled.View`
    width:100%
  flex-direction: row;
  position: absolute;
`;

const UpperView = styled.View<Props>`
    width:${({ width }: any) => width};
    margin-top:10px;
    border-radius:10px;
    height:15px
  background-color: ${({ backgroundColor }: any) => backgroundColor};

`;

const BackView = styled.View<Props>`
    width:100%
    margin-top:10px;
    border-radius:10px;
    height:15px
    opacity:0.3;
  background-color: ${({ backgroundColor }: any) => backgroundColor};

`;

const TitleSubWrapper = styled.Text<Props>`
  color: ${({ color }: any) => color};
  margin-top: 16px;
  font-size: ${({ theme }: any) => theme.fontSize[0].cardSubTitle};
`;
const TitleWrappewr = styled.Text<Props>`
  color: ${({ color }: any) => color};
  margin-top: 16px;
  font-size: ${({ theme }: any) => theme.fontSize[0].cardTitle};
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;