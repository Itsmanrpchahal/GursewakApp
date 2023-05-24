import React, { useState } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { Appearance } from "react-native";

import {
  icArrowDown,
  icArrowDownWhite,
  icMinus,
  icPlus,
} from "../../../assets";
import Collapsible from "react-native-collapsible";
import { useTheme } from "styled-components";
import navigationStrings from "../../../navigations/navigationStrings";

const AddNotes = ({ navigation }) => {
  const mode = Appearance.getColorScheme();
  const { colors }: any = useTheme();
  const [collapsedBlackSearch, setCollaspedBlackSearch] = useState(false);

  return (
    <MainWrapper>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <TItleHorizontalView>
        <ItemWrapper1>
          <TextWrapperYellow>Add Notes</TextWrapperYellow>

          {/* <DropdownWrapper>
            <ToggleWrapper>
              <TextWrapperWhite>New Note</TextWrapperWhite>
              <ImageWrapper source={icPlus}></ImageWrapper>
            </ToggleWrapper>
          </DropdownWrapper> */}
        </ItemWrapper1>
      </TItleHorizontalView>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(navigationStrings.NEW_NOTE);
        }}
      >
        <TItleHorizontalView>
          <ItemWrapper1>
            <TextWrapperYellow>New Folder</TextWrapperYellow>
          </ItemWrapper1>
          <ImageWrapper source={icPlus} />
        </TItleHorizontalView>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setCollaspedBlackSearch(!collapsedBlackSearch);
        }}
      >
        <TItleHorizontalView>
          <ItemWrapper1>
            <TextWrapperWhite>Folder Name</TextWrapperWhite>
          </ItemWrapper1>
          <ImageWrapper source={icArrowDownWhite} />
        </TItleHorizontalView>
      </TouchableOpacity>
      <Collapsible collapsed={collapsedBlackSearch}>
        <View>
          <TextWrapperWhite>Gurbani pangti here</TextWrapperWhite>
        </View>
      </Collapsible>

      <DividerView />

      <TextWrapperYellow>Favourites</TextWrapperYellow>
      <TItleHorizontalView>
        <ItemWrapper1>
          <TextWrapperWhite>New Folder</TextWrapperWhite>
        </ItemWrapper1>
        <ImageWrapper source={icPlus} />
      </TItleHorizontalView>

      <TItleHorizontalView>
        <ItemWrapper1>
          <TextWrapperWhite>Folder Name</TextWrapperWhite>
        </ItemWrapper1>
        <ImageWrapper source={icArrowDownWhite} />
      </TItleHorizontalView>

      <TItleHorizontalView>
        <ItemWrapper1>
          <TextWrapperWhite>Folder Name</TextWrapperWhite>
        </ItemWrapper1>
        <ImageWrapper source={icArrowDownWhite} />
      </TItleHorizontalView>

      <DividerView />
      <TextWrapperYellow>Kamaiyi</TextWrapperYellow>

      <TItleHorizontalView>
        <ItemWrapper1>
          <TextWrapperYellow>New Counter</TextWrapperYellow>
        </ItemWrapper1>
        <ImageWrapper source={icPlus} />
      </TItleHorizontalView>

      <ToggleWrapper style={{ marginTop: 8, marginBottom: 8 }}>
        <FontHorizontal>
          <TextWrapperWhite>Counter Name</TextWrapperWhite>
          <PlusMinus>
            <TouchableOpacity>
              <ImageWrapper
                style={{ marginLeft: -15 }}
                source={icPlus}
              ></ImageWrapper>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageWrapper
                style={{ marginLeft: 15 }}
                source={icMinus}
              ></ImageWrapper>
            </TouchableOpacity>
          </PlusMinus>
        </FontHorizontal>
      </ToggleWrapper>
      <TextWrapperWhite>00/00</TextWrapperWhite>
    </MainWrapper>
  );
};

export default withTheme(AddNotes);

const FontHorizontal = styled.View`
width:100%
  flex-direction: row;
  justify-content: space-between;
`;

const PlusMinus = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextWrapperYellow = styled.Text`
  color: ${({ theme }: any) => theme.colors.accentColor};
  margin-top: 8px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle}px;
`;

const DividerView = styled.View`
  width: 100%;
  height: 1px;
  margin-top: 16px;
  background-color: ${({ theme }: any) => theme.colors.textWhite};
  opacity: 0.1;
`;

const ImageWrapper = styled.Image``;

const TextWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.accentColor};
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle}px;
`;

const ToggleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DropdownWrapper = styled.View`
  height: 45px;
  width:100%;
  border-width: 0.5px;
  border-radius: 22px;
  margin-top:8px;
  padding:4px
  opacity:0.1;
  background-color: white;
`;

const TextWrapperWhite = styled.Text`
  color: ${({ theme }: any) => theme.colors.textWhite};
  margin-top: 10px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle}px;
`;

const ItemWrapper1 = styled.View``;

const TItleHorizontalView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;
