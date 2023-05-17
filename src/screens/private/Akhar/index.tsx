import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "styled-components";
import styled, { withTheme } from "styled-components/native";
import { data } from "../../../utils/constants";

const Akhar = () => {
  const [tab, setTab] = useState(0);
  const { colors }: any = useTheme();
  const [akhar, setAkhar] = useState(-1);
  const [view, setView] = useState(-1);
  let count = useRef(0);
  const [show, setShow] = useState(false);

  const renderSeparator = ({ index }) => alert(index);
  // index === 2 && (
  //   <View>
  //     <Text>Hello</Text>
  //   </View>

  useEffect(() => {}, []);

  return (
    <MainWrapper>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <ButtonWrapper>
        <TouchableOpacity
          style={{ width: "50%", marginRight: 3 }}
          onPress={() => {
            setTab(0);
          }}
        >
          <ButtonVerticle>
            <TextWrapperBottom color={colors.akharTextBtnColor}>
              Gurbani Search
            </TextWrapperBottom>
            <ViewDivider
              backgroundColor={
                tab === 0 ? colors.akharTextBtnColor : colors.textWhite
              }
            />
          </ButtonVerticle>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ width: "50%", marginLeft: 3 }}
          onPress={() => {
            setTab(1);
          }}
        >
          <ButtonVerticle>
            <TextWrapperBottom color={colors.akharTextBtnColor}>
              Hukamnama Sahib
            </TextWrapperBottom>
            <ViewDivider
              backgroundColor={
                tab === 1 ? colors.akharTextBtnColor : colors.textWhite
              }
            />
          </ButtonVerticle>
        </TouchableOpacity>
      </ButtonWrapper>

      <FlatList
        style={{ margin: 8 }}
        data={data}
        extraData={<HiddenView></HiddenView>}
        keyExtractor={(item) => item.id}
        numColumns={5}
        renderItem={({ item, index }) => {
          return (
            <AkharWrapper
              backgroundColor={
                akhar == index ? colors.textLightTheme : colors.LightTheme
              }
            >
              <TouchableOpacity
                onPress={() => {
                  setAkhar(index);
                  setShow(true);
                }}
              >
                <AkharText>{item.title}</AkharText>
              </TouchableOpacity>
            </AkharWrapper>
          );
        }}
      />
    </MainWrapper>
  );
};

export default withTheme(Akhar);

type ColorProps = {
  color: string;
  backgroundColor: string;
};

const HiddenView = styled.View`
  width: 100%;
  height: 20px;
  background-color: ${({ theme }: any) => theme.colors.textWhite};
`;

const AkharText = styled.Text`
  text-align: center;
  color: ${({ theme }: any) => theme.colors.text};
  font-size: ${({ theme }: any) => theme.fontSize[0].akharText};
`;

const AkharWrapper = styled.View<ColorProps>`
  justify-content: center;
  width: 18%;
  margin: 3px;
  padding: 5px;
  border-radius: 55px;
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const ViewDivider = styled.View<ColorProps>`
  height: 1px;
  width: 100%;
  margin-top: 5px;
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const TextWrapperBottom = styled.Text<ColorProps>`
  width: 100%;
  color: ${({ color }: any) => color};
  text-align: center;
`;

const ButtonVerticle = styled.View`
  width: 100%;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const SearchWrapper = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

const MainWrapper = styled.View`
  align-items: center;
  flex: 1;
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.backgroundAkhar};
`;
